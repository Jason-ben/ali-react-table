import { AbstractTreeNode } from '../../interfaces'
import isLeafNode from '../isLeafNode'
import { arrayUtils } from '../others'

class Wrapper<N extends AbstractTreeNode> {
  constructor(input?: Partial<Wrapper<N>>) {
    Object.assign(this, input)
  }

  /** 是否为根节点 */
  root?: boolean

  /** 子节点数组 */
  children?: Wrapper<N>[]

  /** 父节点 (parent wrapper node) */
  parent?: Wrapper<N>

  /** 指向对应的普通节点 */
  node: N

  /** 节点是否被禁用，被禁用的节点 需要在处理过程中被忽略 */
  disabled?: boolean

  /** 是否「选中」 */
  checked?: boolean

  /** 该节点是否「恰好选中」 (即节点的值是否在 value 数组中） */
  exactChecked?: boolean

  /** 是否有任意祖先节点被选中 */
  anyAncestorsChecked?: boolean

  /** 是否有任意子孙节点被选中 */
  anyDescendentsChecked?: boolean

  /** 该节点的所有子孙节点是否均为选中 */
  allDescendentsChecked?: boolean
}

type CheckedStrategy = 'all' | 'parent' | 'child'

export interface TreeDataHelperOptions<N extends AbstractTreeNode> {
  tree: N[]
  getNodeValue(node: N): string
  value: string[]
  checkedStrategy?: CheckedStrategy
  isDisabled?(node: N): boolean
  isDetached?(node: N): boolean
}

export default class TreeDataHelper<N extends AbstractTreeNode> {
  private readonly opts: TreeDataHelperOptions<N>
  private readonly valueSet: ReadonlySet<string>

  private wrapperMap: Map<string, Wrapper<N>>
  private rootWrapper: Wrapper<N>

  constructor(opts: TreeDataHelperOptions<N>) {
    this.opts = opts
    this.valueSet = new Set(opts.value)
    this.initWrapperTree()
  }

  private get value() {
    return this.opts.value
  }

  private isDetached(node: N) {
    return this.opts.isDetached(node) ?? false
  }

  private isDisabled(node: N) {
    return this.opts.isDisabled?.(node) ?? false
  }

  private initWrapperTree() {
    const valueSet = new Set(this.value)
    this.rootWrapper = new Wrapper<N>({ root: true, children: [] })
    this.wrapperMap = new Map<string, Wrapper<N>>()

    const wrapperMap = this.wrapperMap
    const getNodeValue = this.opts.getNodeValue
    const isDisabled = this.isDisabled.bind(this)

    dfs(this.rootWrapper, this.opts.tree, false)

    // todo 考虑 detach 状态带来的影响

    function dfs(parentWrapper: Wrapper<N>, nodes: N[], anyAncestorsChecked: boolean) {
      for (const node of nodes) {
        const disabled = isDisabled(node)
        const exactChecked = valueSet.has(getNodeValue(node))
        if (exactChecked && !disabled) {
          parentWrapper.anyDescendentsChecked = true
        }

        const checked = exactChecked || (!disabled && anyAncestorsChecked)
        const wrapper = new Wrapper<N>({
          parent: parentWrapper,
          node,
          checked,
          exactChecked,
          anyAncestorsChecked,
          anyDescendentsChecked: checked,
          allDescendentsChecked: true,
          disabled,
        })
        wrapperMap.set(getNodeValue(node), wrapper)
        parentWrapper.children.push(wrapper)

        if (!isLeafNode(node)) {
          wrapper.children = []
          dfs(wrapper, node.children as N[], checked)

          if (wrapper.anyDescendentsChecked && !disabled) {
            parentWrapper.anyDescendentsChecked = true
          }
          if (wrapper.allDescendentsChecked && !disabled) {
            wrapper.checked = true
            // 当一个节点因为「子节点被全选」而变为 checked 时，我们需要更新子节点的 anyAncestorsChecked 字段
            for (const child of wrapper.children) {
              child.anyAncestorsChecked = true
            }
          }
        }
        if (!wrapper.checked && !disabled) {
          parentWrapper.allDescendentsChecked = false
        }
      }
    }
  }

  public isIndeterminate(nodeValue: string) {
    const wrapper = this.wrapperMap.get(nodeValue)
    // if (wrapper.disabled) {
    //   // todo 考虑 disabled 的情况
    //   //   return !wrapper.exactChecked && wrapper.anyDescendentsChecked
    // }
    return !wrapper.checked && wrapper.anyDescendentsChecked
  }

  public isChecked(nodeValue: string) {
    const wrapper = this.wrapperMap.get(nodeValue)
    return wrapper.checked
  }

  public getValueAfterCheck(nodeValue: string) {
    const node = this.getNode(nodeValue)
    if (this.isDisabled(node) || this.isChecked(nodeValue)) {
      return this.getCleanValue()
    }
    const nextValue = arrayUtils.merge(this.value, [nodeValue])
    return new TreeDataHelper({ ...this.opts, value: nextValue }).getCleanValue()
  }

  public getValueAfterUncheck(nodeValue: string) {
    const wrapper = this.wrapperMap.get(nodeValue)
    const node = wrapper.node
    if (this.isDisabled(node) || !this.isChecked(nodeValue)) {
      return this.getCleanValue()
    }

    const { getNodeValue } = this.opts

    const appendArray = getAppendArray(wrapper)
    const removeSet = getRemoveSet(wrapper)
    removeSet.add(nodeValue)

    const nextValue = arrayUtils.diff(this.value.concat(appendArray), removeSet)

    return new TreeDataHelper({ ...this.opts, value: nextValue }).getCleanValue()

    function getAppendArray(startWrapper: Wrapper<N>) {
      let result: string[] = []

      let current = startWrapper
      while (current.anyAncestorsChecked) {
        const appendSiblings = current.parent.children.filter(
          (sibling) => sibling !== current && !sibling.exactChecked && !sibling.disabled,
        )
        result = result.concat(appendSiblings.map((wrapper) => getNodeValue(wrapper.node)))
        current = current.parent
      }

      return result
    }

    function getRemoveSet(startWrapper: Wrapper<N>) {
      const result = new Set<string>()

      let wrapper = startWrapper
      while (wrapper.anyAncestorsChecked) {
        wrapper = wrapper.parent
        if (!wrapper.disabled) {
          result.add(getNodeValue(wrapper.node))
        }
      }

      dfs(startWrapper)

      return result

      function dfs(wrapper: Wrapper<N>) {
        if (wrapper.checked && !wrapper.disabled) {
          result.add(getNodeValue(wrapper.node))
        }
        if (!isLeafNode(wrapper) && wrapper.anyDescendentsChecked) {
          wrapper.children.forEach(dfs)
        }
      }
    }
  }

  public getValueAfterToggle(nodeValue: string) {
    if (this.isChecked(nodeValue)) {
      return this.getValueAfterUncheck(nodeValue)
    } else {
      return this.getValueAfterCheck(nodeValue)
    }
  }

  public getNode(nodeValue: string) {
    return this.wrapperMap.get(nodeValue)?.node
  }

  public getCleanValue() {
    const { checkedStrategy, getNodeValue } = this.opts

    const result = this.value.filter((nodeValue) => {
      const wrapper = this.wrapperMap.get(nodeValue)
      return wrapper == null || wrapper.disabled
    })

    dfs(this.rootWrapper.children)

    return result

    function dfs(wrappers: Wrapper<N>[]) {
      for (const wrapper of wrappers) {
        if (!wrapper.disabled && wrapper.checked) {
          if (checkedStrategy === 'all') {
            result.push(getNodeValue(wrapper.node))
          } else if (checkedStrategy === 'parent') {
            if (!wrapper.anyAncestorsChecked) {
              result.push(getNodeValue(wrapper.node))
            }
          } else {
            // checkedStrategy === 'child'
            if (isLeafNode(wrapper)) {
              result.push(getNodeValue(wrapper.node))
            }
          }
        }
        if (wrapper.anyDescendentsChecked && !isLeafNode(wrapper)) {
          dfs(wrapper.children)
        }
      }
    }
  }
}
