(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{119:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),b=a,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?r.a.createElement(f,s(s({ref:n},c),{},{components:t})):r.a.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),o=(t(0),t(119)),i={id:"tree-mode",title:"\u6811\u72b6\u6a21\u5f0f"},s={unversionedId:"pipeline/features/tree-mode",id:"pipeline/features/tree-mode",isDocsHomePage:!1,title:"\u6811\u72b6\u6a21\u5f0f",description:"\u8ba9\u8868\u683c\u652f\u6301\u6811\u5f62\u6570\u636e\u7684\u5c55\u793a\uff0c\u5f53\u6570\u636e\u4e2d\u6709 children \u5b57\u6bb5\u65f6\u4f1a\u81ea\u52a8\u5c55\u793a\u4e3a\u6811\u5f62\u8868\u683c\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e indentSize \u4ee5\u63a7\u5236\u6bcf\u4e00\u5c42\u7684\u7f29\u8fdb\u5bbd\u5ea6\u3002",source:"@site/docs/pipeline/features/tree-mode.mdx",slug:"/pipeline/features/tree-mode",permalink:"/beta/docs/pipeline/features/tree-mode",editUrl:"https://github.com/alibaba/ali-react-table/docusaurus/edit/master/website/docs/pipeline/features/tree-mode.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u6392\u5e8f",permalink:"/beta/docs/pipeline/features/sort"},next:{title:"\u6811\u5f62\u9009\u62e9",permalink:"/beta/docs/pipeline/features/tree-select"}},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[]},{value:"<code>features.buildTree</code>",id:"featuresbuildtree",children:[]},{value:"\u5f02\u6b65\u6570\u636e\u52a0\u8f7d",id:"\u5f02\u6b65\u6570\u636e\u52a0\u8f7d",children:[]},{value:"\u5bf9\u4e0a\u6b21\u5c55\u5f00\u4f4d\u7f6e\u8fdb\u884c\u6807\u8bb0",id:"\u5bf9\u4e0a\u6b21\u5c55\u5f00\u4f4d\u7f6e\u8fdb\u884c\u6807\u8bb0",children:[]}],c={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u8ba9\u8868\u683c\u652f\u6301\u6811\u5f62\u6570\u636e\u7684\u5c55\u793a\uff0c\u5f53\u6570\u636e\u4e2d\u6709 children \u5b57\u6bb5\u65f6\u4f1a\u81ea\u52a8\u5c55\u793a\u4e3a\u6811\u5f62\u8868\u683c\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e indentSize \u4ee5\u63a7\u5236\u6bcf\u4e00\u5c42\u7684\u7f29\u8fdb\u5bbd\u5ea6\u3002"),Object(o.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function \u6811\u5f62\u8868\u683c() {\n  const { dataSource4, columns4 } = assets.biz\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ dataSource: dataSource4, columns: columns4 })\n    .primaryKey('id')\n    .use(features.treeMode({ defaultOpenKeys: ['4', '4-2'] }))\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),Object(o.b)("h3",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u542f\u7528\u884c\u591a\u9009\u529f\u80fd\u4e4b\u524d\uff0cpipeline \u5fc5\u987b\u5df2\u7ecf\u8bbe\u7f6e\u4e86 primaryKey\u3002")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"pipeline.use(features.treeMode(options))\n")),Object(o.b)("p",null,"options \u7ed3\u6784\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface TreeModeFeatureOptions {\n  /** \u975e\u53d7\u63a7\u7528\u6cd5\uff1a\u9ed8\u8ba4\u5c55\u5f00\u7684 keys */\n  defaultOpenKeys?: string[]\n\n  /** \u53d7\u63a7\u7528\u6cd5\uff1a\u5f53\u524d\u5c55\u5f00\u7684 keys */\n  openKeys?: string[]\n\n  /** \u53d7\u63a7\u7528\u6cd5\uff1a\u5c55\u5f00 keys \u6539\u53d8\u7684\u56de\u8c03 */\n  onChangeOpenKeys?(nextKeys: string[], key: string, action: 'expand' | 'collapse'): void\n\n  /** \u81ea\u5b9a\u4e49\u53f6\u5b50\u8282\u70b9\u7684\u5224\u5b9a\u903b\u8f91 */\n  isLeafNode?(node: any, nodeMeta: { depth: number; expanded: boolean; rowKey: string }): boolean\n\n  /** icon \u7684\u7f29\u8fdb\u503c\u3002\u4e00\u822c\u4e3a\u8d1f\u6570\uff0c\u6b64\u65f6 icon \u5c06\u5411\u5de6\u504f\u79fb\uff0c\u9ed8\u8ba4\u4ece pipeline.ctx.indents \u4e2d\u83b7\u53d6 */\n  iconIndent?: number\n\n  /** icon \u4e0e\u53f3\u4fa7\u6587\u672c\u7684\u8ddd\u79bb\uff0c\u9ed8\u8ba4\u4ece pipeline.ctx.indents \u4e2d\u83b7\u53d6 */\n  iconGap?: number\n\n  /** \u6bcf\u4e00\u7ea7\u7f29\u8fdb\u4ea7\u751f\u7684\u8ddd\u79bb\uff0c\u9ed8\u8ba4\u4ece pipeline.ctx.indents \u4e2d\u83b7\u53d6 */\n  indentSize?: number\n}\n")),Object(o.b)("h3",{id:"featuresbuildtree"},Object(o.b)("inlineCode",{parentName:"h3"},"features.buildTree")),Object(o.b)("p",null,"\u7528\u6cd5\uff1a ",Object(o.b)("inlineCode",{parentName:"p"},"pipeline.use(features.buildTree(idProp, parentIdProp))")),Object(o.b)("p",null,"\u6839\u636e\u6570\u636e\u4e2d\u7684 idProp/parentIdProp\uff0c\u5c06 \u5e73\u94fa\u7684\u6570\u636e \u8f6c\u6362\u4e3a\u6811\u72b6\u7ed3\u6784\u3002\u6811\u72b6\u7ed3\u6784\u4e0b\uff0c\u7236\u8282\u70b9\u4e2d\u7684 children \u5b57\u6bb5\u4f1a\u5305\u542b\u5176\u5b50\u8282\u70b9\u7684\u5217\u8868\u3002"),Object(o.b)("p",null,"ali-react-table \u8fd8\u5bfc\u51fa\u4e86\u4e00\u4e2a\u9759\u6001\u7684 buildTree \u51fd\u6570\uff0c\u5982\u679c\u4f60\u53ea\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u53ef\u4ee5\u4f7f\u7528\u9759\u6001\u7684 buildTree \u51fd\u6570\u3002"),Object(o.b)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u4e86\u6811\u72b6\u7ed3\u6784\u7684\u6570\u636e\uff0c\u90a3\u5c31\u53ef\u4ee5\u8df3\u8fc7 features.buildTree\uff0c\u76f4\u63a5\u4f7f\u7528 treeMode \u5373\u53ef\u3002"),Object(o.b)("h3",{id:"\u5f02\u6b65\u6570\u636e\u52a0\u8f7d"},"\u5f02\u6b65\u6570\u636e\u52a0\u8f7d"),Object(o.b)("p",null,"\u5f02\u6b65\u6570\u636e\u52a0\u8f7d\u573a\u666f\u4e0b\uff0c\u56e0\u4e3a\u524d\u7aef\u53ea\u4fdd\u5b58\u4e86\u6574\u68f5\u6811\u4e2d\u7684\u5176\u4e2d\u4e00\u90e8\u5206\u6570\u636e\uff0c\u6211\u4eec\u9700\u8981\u8bbe\u7f6e ",Object(o.b)("inlineCode",{parentName:"p"},"isLeafNode")," \u8986\u76d6\u9ed8\u8ba4\u7684\u5224\u65ad\u65b9\u5f0f\uff0c\u544a\u8bc9\u8868\u683c\u54ea\u4e9b\u8282\u70b9\u662f\u7236\u8282\u70b9\uff08\u53ef\u88ab\u5c55\u5f00\uff09\uff0c\u54ea\u4e9b\u8282\u70b9\u662f\u5b50\u8282\u70b9\uff08\u4e0d\u53ef\u88ab\u5c55\u5f00\uff09\u3002"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"onChangeOpenKeys")," \u4e2d\u6839\u636e\u5c55\u5f00\u7684\u8282\u70b9\u5224\u65ad\u662f\u5426\u9700\u8981\u52a0\u8f7d\u66f4\u591a\u6570\u636e\uff0c\u53ef\u4ee5\u5b9e\u73b0\u6811\u72b6\u6a21\u5f0f\u4e0b\u5f02\u6b65\u6570\u636e\u52a0\u8f7d\u529f\u80fd\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function \u5f02\u6b65\u6811\u72b6\u8868\u683c() {\n  const { amount, lfl, ratio } = assets.format\n\n  const [state, setState] = useState({ isLoading: true, data: [] })\n\n  const dataServiceRef = useRef()\n\n  useEffect(() => {\n    dataServiceRef.current = new assets.MockTreeDataService()\n\n    dataServiceRef.current.loadRootNodeData().then((rootNodeData) => {\n      setState({ data: [rootNodeData], isLoading: false })\n    })\n  }, [])\n\n  function loadNodeDataByParentKey(parentKey) {\n    setState((prev) => ({ isLoading: true, data: prev.data }))\n    dataServiceRef.current.loadNodeDataByParentKey(parentKey).then((newData) => {\n      setState((prev) => {\n        return {\n          isLoading: false,\n          data: prev.data.concat(newData),\n        }\n      })\n    })\n  }\n\n  const [openKeys, onChangeOpenKeys] = useState([])\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({\n      dataSource: state.data,\n      columns: [\n        { name: '\u540d\u79f0', code: 'name', width: 180, lock: true },\n        { code: 'a', name: '\u76ee\u6807\u6536\u5165', render: amount, align: 'right' },\n        { code: 'b', name: '\u5b9e\u9645\u6536\u5165', render: amount, align: 'right' },\n        { code: 'd', name: '\u91cd\u70b9\u5546\u54c1\u6536\u5165', render: amount, align: 'right' },\n        { code: 'lfl', name: '\u6536\u5165\u6708\u73af\u6bd4', render: lfl, align: 'right' },\n        { code: 'rate', name: '\u91cd\u70b9\u5546\u54c1\u6536\u5165\u5360\u6bd4', render: ratio, align: 'right' },\n      ],\n    })\n    .primaryKey('key')\n    .mapColumns(([firstCol, ...rest]) => [\n      firstCol,\n      // \u91cd\u590d\u51e0\u6b21 columns\uff0c\u770b\u8d77\u6765\u66f4\u52a0\u4e30\u6ee1\n      ...rest,\n      ...rest,\n      ...rest,\n      ...rest,\n    ])\n    .use(features.buildTree('key', 'parentKey'))\n    .use(\n      features.treeMode({\n        openKeys,\n\n        onChangeOpenKeys(nextKeys, key, action) {\n          if (state.isLoading) {\n            return\n          }\n          onChangeOpenKeys(nextKeys)\n\n          const needLoadData = state.data.every((d) => d.parentKey !== key)\n          if (action === 'expand' && needLoadData) {\n            // \u5982\u679c\u5f53\u524d\u5c55\u5f00\u4e86\u67d0\u4e00\u4e2a\u8282\u70b9\uff0c\u4e14\u8be5\u8282\u70b9\u7684\u5b50\u8282\u70b9\u6570\u636e\u5c1a\u672a\u52a0\u8f7d\uff0c\n            //  \u5219\u8c03\u7528 loadNodeDataByParentKey \u52a0\u8f7d\u66f4\u591a\u6570\u636e\n            loadNodeDataByParentKey(key)\n          }\n        },\n\n        // \u63d0\u4f9b\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684 isLeafNode \u65b9\u6cd5\uff0c\u4f7f\u5f97\u8868\u683c\u4e3a\u7236\u8282\u70b9\u6b63\u786e\u6e32\u67d3\u6536\u62e2/\u5c55\u5f00\u6309\u94ae\n        isLeafNode(node) {\n          return node.childCount === 0\n        },\n      }),\n    )\n\n  return <BaseTable defaultColumnWidth={120} isLoading={state.isLoading} {...pipeline.getProps()} />\n}\n")),Object(o.b)("h3",{id:"\u5bf9\u4e0a\u6b21\u5c55\u5f00\u4f4d\u7f6e\u8fdb\u884c\u6807\u8bb0"},"\u5bf9\u4e0a\u6b21\u5c55\u5f00\u4f4d\u7f6e\u8fdb\u884c\u6807\u8bb0"),Object(o.b)("p",null,"\u5728 onChangeOpenKeys \u8bb0\u5f55\u4e0a\u4e00\u6b21\u7528\u6237\u5c55\u5f00\u7684\u8282\u70b9\u7684 key\uff0c\u5e76\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"pipeline.appendRowPropsGetter")," \u4e3a\u76f8\u5e94\u7684\u884c\u8bbe\u7f6e ",Object(o.b)("inlineCode",{parentName:"p"},'className="last-open"'),"\u3002\u8fd9\u6837\u5c31\u53ef\u4ee5\u901a\u8fc7 CSS \u6765\u65b9\u4fbf\u7684\u63a7\u5236\u300c\u4e0a\u6b21\u5c55\u5f00\u7684\u4f4d\u7f6e\u300d\u7684\u6837\u5f0f\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function \u6811\u72b6\u8868\u683c\u4e2d\u7684\u6700\u8fd1\u5c55\u5f00\u6807\u8bb0() {\n  const { ratio } = assets.format\n\n  const columns = [\n    { code: 'name', name: '\u6570\u636e\u7ef4\u5ea6', width: 200 },\n    { code: 'shop_name', name: '\u95e8\u5e97' },\n    { code: 'imp_uv_dau_pct', name: '\u66dd\u5149UV\u5360DAU\u6bd4\u4f8b', render: ratio, align: 'right' },\n    { code: 'app_qty_pbt', name: 'APP\u4ef6\u5355\u4ef7', align: 'right' },\n    { code: 'all_app_trd_amt_1d', name: 'APP\u6210\u4ea4\u91d1\u989d\u6c47\u603b', align: 'right' },\n  ]\n\n  const [state, setState] = useState({\n    isLoading: true,\n    data: [],\n    lastOpenKey: '',\n    lastCollapseKey: '',\n  })\n\n  useEffect(() => {\n    assets.cdnData.getAppTrafficData().then((data) => {\n      setState({ isLoading: false, data, lastOpenKey: 'B2C', lastCollapseKey: '' })\n    })\n  }, [])\n\n  const [openKeys, onChangeOpenKeys] = useState(['B2C'])\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ columns: columns, dataSource: state.data })\n    .primaryKey('id')\n    .use(features.buildTree('id', 'parent_id'))\n    .use(\n      features.treeMode({\n        openKeys,\n        onChangeOpenKeys(nextKeys, key, action) {\n          onChangeOpenKeys(nextKeys)\n          if (action === 'expand') {\n            setState({ ...state, lastOpenKey: key, lastCollapseKey: '' })\n          } else {\n            setState({ ...state, lastOpenKey: '', lastCollapseKey: key })\n          }\n        },\n      }),\n    )\n    .appendRowPropsGetter((record) => {\n      if (record.id === state.lastOpenKey) {\n        return { className: 'last-open' }\n      } else if (record.id === state.lastCollapseKey) {\n        return { className: 'last-collapse' }\n      }\n    })\n\n  /*\n    const StyledBaseTable = styled(art.BaseTable)`\n      tr.last-open {\n        --bgcolor: rgba(128, 243, 87, 0.32);\n        --hover-bgcolor: rgba(128, 243, 87, 0.32);\n\n        .expansion-icon {\n          fill: #4de247;\n        }\n      }\n\n      tr.last-collapse {\n        --bgcolor: rgba(253, 32, 32, 0.32);\n        --hover-bgcolor: rgba(253, 32, 32, 0.32);\n\n        .expansion-icon {\n          fill: #e54950;\n        }\n      }\n    `\n   */\n\n  return (\n    <docHelpers.StyledWebsiteBaseTable defaultColumnWidth={150} isLoading={state.isLoading} {...pipeline.getProps()} />\n  )\n}\n")))}p.isMDXComponent=!0}}]);