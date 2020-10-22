import collectNodes from '../collectNodes'
import makeTreeDataHelper from '../tree-data-helpers/makeTreeDataHelper'

interface TreeNode {
  id: string
  title?: string
  children?: TreeNode[]
}

const tree: TreeNode[] = [
  {
    id: 'root',
    children: [
      {
        id: '1',
        title: '一级标题',
        children: [
          {
            id: '1-1',
            title: '二级标题',
            children: [
              { id: '1-1-1', title: '三级标题' },
              { id: '1-1-2', title: '三级标题' },
            ],
          },
          {
            id: '1-2',
            title: '二级标题',
            children: [
              { id: '1-2-1', title: '三级标题' },
              { id: '1-2-2', title: '三级标题' },
            ],
          },
          { id: '1-3', title: '二级标题' },
        ],
      },
      {
        id: '2',
        title: '一级标题',
        children: [
          {
            id: '2-1',
            title: '二级标题',
            children: [
              { id: '2-1-1', title: '三级标题' },
              { id: '2-1-2', title: '三级标题' },
            ],
          },
          {
            id: '2-2',
            title: '二级标题',
            children: [
              { id: '2-2-1', title: '三级标题' },
              { id: '2-2-2', title: '三级标题' },
            ],
          },
          { id: '2-3', title: '二级标题' },
        ],
      },
      {
        id: '3',
        title: '一级标题',
        children: [
          {
            id: '3-1',
            title: '二级标题',
            children: [
              { id: '3-1-1', title: '三级标题' },
              { id: '3-1-2', title: '三级标题' },
            ],
          },
          {
            id: '3-2',
            title: '二级标题',
            children: [
              { id: '3-2-1', title: '三级标题' },
              { id: '3-2-2', title: '三级标题' },
            ],
          },
          { id: '3-3', title: '二级标题' },
        ],
      },
    ],
  },
]

function makeHelper(value: string[]) {
  return makeTreeDataHelper<TreeNode>({
    tree: tree,
    getNodeValue(node) {
      return node.id
    },
    value,
  })
}

function makeStrategyAllHelper(value: string[]) {
  return makeTreeDataHelper<{ id: string; title?: string; children?: any[] }>({
    tree: tree,
    getNodeValue(node) {
      return node.id
    },
    value,
    checkedStrategy: 'all',
  })
}

function makeCheckStrictlyHelper(value: string[]) {
  return makeTreeDataHelper<{ id: string; title?: string; children?: any[] }>({
    tree: tree,
    getNodeValue(node) {
      return node.id
    },
    value,
    checkStrictly: true,
  })
}

test('query', () => {
  const helper = makeHelper(['1', '2'])

  expect(helper.isChecked('root')).toBe(false)
  expect(helper.isChecked('1')).toBe(true)
  expect(helper.isChecked('2-1-1')).toBe(true)
  expect(helper.isChecked('3')).toBe(false)
  expect(helper.isIndeterminate('root')).toBe(true)
  expect(helper.isIndeterminate('3')).toBe(false)

  expect(helper.getWrapper('1').parent).toBe(helper.getWrapper('root'))
  expect(helper.getNode('1').children[0]).toBe(helper.getNode('1-1'))
  expect(helper.getCleanValue()).toEqual(['1', '2'])
})

test('check', () => {
  const helper = makeHelper(['1', '2'])

  expect(helper.getValueAfterCheckAll()).toEqual(['root'])
  expect(helper.getValueAfterUncheckAll()).toEqual([])

  expect(helper.getValueAfterCheck('1')).toEqual(['1', '2'])
  expect(helper.getValueAfterCheck('2-1-1')).toEqual(['1', '2'])
  expect(helper.getValueAfterCheck('3')).toEqual(['root'])
  expect(helper.getValueAfterCheck('3-1')).toEqual(['1', '2', '3-1'])
  expect(helper.getValueAfterCheck('root')).toEqual(['root'])

  expect(helper.getValueAfterToggle('1')).toEqual(['2'])
  expect(helper.getValueAfterToggle('2-1-1')).toEqual(['1', '2-1-2', '2-2', '2-3'])
  expect(helper.getValueAfterToggle('3')).toEqual(['root'])
  expect(helper.getValueAfterToggle('3-1')).toEqual(['1', '2', '3-1'])
  expect(helper.getValueAfterToggle('root')).toEqual(['root'])

  expect(helper.getValueAfterUncheck('1')).toEqual(['2'])
  expect(helper.getValueAfterUncheck('2-1-1')).toEqual(['1', '2-1-2', '2-2', '2-3'])
  expect(helper.getValueAfterUncheck('3')).toEqual(['1', '2'])
  expect(helper.getValueAfterUncheck('3-1')).toEqual(['1', '2'])
  expect(helper.getValueAfterUncheck('root')).toEqual(['1', '2'])
})

test('strategy=all', () => {
  const helper = makeStrategyAllHelper(['1', '2'])

  expect(helper.getValueAfterCheckAll()).toEqual(collectNodes(tree, 'pre').map((n) => n.id))
  expect(helper.getValueAfterUncheckAll()).toEqual([])

  const actual1 = helper.getValueAfterCheck('1')
  const expected1 = [
    ...collectNodes([helper.getNode('1')], 'pre').map((n) => n.id),
    ...collectNodes([helper.getNode('2')], 'pre').map((n) => n.id),
  ]
  expect(actual1.length).toEqual(expected1.length)
  expect(actual1).toEqual(expect.arrayContaining(expected1))
})

test('checkStrictly', () => {
  const helper = makeCheckStrictlyHelper(['1', '2'])

  expect(helper.isChecked('root')).toBe(false)
  expect(helper.isChecked('1')).toBe(true)
  expect(helper.isChecked('2-1-1')).toBe(false)
  expect(helper.isChecked('3')).toBe(false)
  expect(helper.isIndeterminate('root')).toBe(false)
  expect(helper.isIndeterminate('3')).toBe(false)

  expect(helper.getValueAfterToggle('2')).toEqual(['1'])
  expect(helper.getValueAfterToggle('3-1')).toEqual(['1', '2', '3-1'])
  expect(helper.getValueAfterCheckAll()).toEqual(collectNodes(tree, 'pre').map((n) => n.id))
})
