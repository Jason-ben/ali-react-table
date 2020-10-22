import { AbstractTreeNode } from '../../interfaces'
import { always } from '../others'
import StrictTreeDataHelper from './StrictTreeDataHelper'
import TreeDataHelper from './TreeDataHelper'

type CheckedStrategy = 'all' | 'parent' | 'child'

export interface MakeTreeDataHelperParams<N extends AbstractTreeNode> {
  tree: N[]
  getNodeValue(node: N): string
  value: string[]
  checkedStrategy: CheckedStrategy
  checkStrictly: boolean
  isDisabled(node: N): boolean
  isDetached(node: N): boolean
}

export default function makeTreeDataHelper<N extends AbstractTreeNode>({
  tree,
  value,
  getNodeValue,
  checkedStrategy,
  isDisabled,
  isDetached,
  checkStrictly,
}: MakeTreeDataHelperParams<N>) {
  if (checkStrictly) {
    return new StrictTreeDataHelper({ value, getNodeValue, isDisabled, tree })
  }

  return new TreeDataHelper({
    value,
    getNodeValue,
    isDisabled,
    isDetached,
    tree,
    checkedStrategy,
  })
}
