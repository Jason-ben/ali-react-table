import React from 'react'
import { ArtColumn, CellProps } from '../../interfaces'
import { makeTreeDataHelper } from '../../utils'
import { always } from '../../utils/others'
import { TablePipeline } from '../pipeline'

export interface TreeSelectFeatureOptions {
  /** 完整的树 */
  tree: any[]

  /** 虚拟的根节点值；该参数非空时， treeSelect 将会在 tree 参数之上再添加一个父节点 */
  rootKey?: string

  // todo
  checkStrictly?: boolean

  // todo
  checkedStrategy?: 'all' | 'parent' | 'child'

  // todo
  checkboxColumn?: Partial<ArtColumn>

  // todo
  value?: string[]

  // todo
  defaultValue?: string[]

  // todo
  onChange?(nextValue: string[]): void

  /** 点击事件的响应区域 */
  clickArea?: 'checkbox' | 'cell' | 'row'

  // todo
  stopClickEventPropagation?: boolean

  /** 被选中时是否高亮整行 */
  highlightRowWhenSelected?: boolean

  /** 是否禁用该节点的交互 */
  isDisabled?(row: any): boolean

  /** 是否让该节点对应的子树 与其父节点脱离联动 */
  idDetached?(row: any): boolean
}

const STATE_KEY = 'treeSelect'

export function treeSelect(opts: TreeSelectFeatureOptions) {
  return function treeSelectStep<P extends TablePipeline>(pipeline: P) {
    const Checkbox = pipeline.ctx.components.Checkbox
    if (Checkbox == null) {
      throw new Error('使用 treeSelect 之前需要通过 pipeline context 设置 components.Checkbox')
    }
    const primaryKey = pipeline.ensurePrimaryKey('treeSelect') as string
    if (typeof primaryKey !== 'string') {
      throw new Error('treeSelect 仅支持字符串作为 primaryKey')
    }
    const clickArea = opts.clickArea ?? 'checkbox'
    const isDisabled = opts.isDisabled ?? always(false)
    const isDetached = opts.idDetached ?? always(false)

    const value = opts.value ?? pipeline.getStateAtKey(STATE_KEY) ?? opts.defaultValue ?? []
    const tree = opts.rootKey != null ? [{ [primaryKey]: opts.rootKey, children: opts.tree }] : opts.tree
    const getNodeValue = (node: any) => node[primaryKey]

    const treeDataHelper = makeTreeDataHelper({
      value,
      getNodeValue,
      isDisabled,
      isDetached,
      tree,
      checkedStrategy: opts.checkedStrategy,
      checkStrictly: opts.checkStrictly,
    })

    const onToggleKey = (key: string) => {
      const nextValue = treeDataHelper.getValueAfterToggle(key)
      pipeline.setStateAtKey(STATE_KEY, nextValue)
      opts.onChange?.(nextValue)
    }

    const makeCheckbox = (key: string, root: boolean, row?: any) => {
      return (
        <Checkbox
          checked={treeDataHelper.isChecked(key)}
          indeterminate={treeDataHelper.isIndeterminate(key)}
          disabled={!root && isDisabled(row)}
          onChange={clickArea === 'checkbox' || root ? () => onToggleKey(key) : undefined}
        />
      )
    }

    const columns = pipeline.getColumns()
    pipeline.columns([
      // 在左侧添加一列用于渲染 checkbox
      {
        name: '',
        width: 50,
        align: 'center',
        title: opts.rootKey != null ? makeCheckbox(opts.rootKey, true) : undefined,
        ...opts.checkboxColumn,
        render(value, record) {
          return makeCheckbox(record[primaryKey], false, record)
        },
        getCellProps(value: any, row: any): CellProps {
          const rowKey = row[primaryKey]
          if (clickArea !== 'cell') {
            return
          }

          const disabled = isDisabled(row)
          if (disabled) {
            return { style: { cursor: 'not-allowed' } }
          }

          return {
            style: { cursor: 'pointer' },
            onClick(e) {
              if (opts.stopClickEventPropagation) {
                e.stopPropagation()
              }
              onToggleKey(rowKey)
            },
          }
        },
      },
      ...columns,
    ])

    if (clickArea === 'row') {
      pipeline.appendRowPropsGetter((row) => {
        const disabled = isDisabled(row)
        if (!disabled) {
          return {
            style: { cursor: 'pointer' },
            onClick(e) {
              if (opts.stopClickEventPropagation) {
                e.stopPropagation()
              }
              onToggleKey(row[primaryKey])
            },
          }
        }
      })
    }

    if (opts.highlightRowWhenSelected) {
      pipeline.appendRowPropsGetter((row) => {
        if (treeDataHelper.isChecked(row[primaryKey])) {
          return { className: 'highlight' }
        }
      })
    }

    return pipeline
  }
}
