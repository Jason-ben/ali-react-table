(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{119:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),m=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=m(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(r),p=t,d=s["".concat(l,".").concat(p)]||s[p]||b[p]||a;return r?o.a.createElement(d,c(c({ref:n},u),{},{components:r})):o.a.createElement(d,c({ref:n},u))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,l=new Array(a);l[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},298:function(e,n,r){"use strict";r.d(n,"a",(function(){return a}));var t=r(0),o=r.n(t);function a({id:e,height:n=400}){const r="/beta/storybook/",t=`${r}?path=/story/${e}`,a=`${r}iframe.html?id=${e}&viewMode=story`;return o.a.createElement("div",null,o.a.createElement("a",{href:t,target:"_blank"},"\u5728\u65b0\u7a97\u53e3\u6253\u5f00\u67e5\u770b\u793a\u4f8b\u6e90\u7801"),o.a.createElement("iframe",{src:a,style:{border:"1px solid #ccc",width:"100%",height:n}}))}},70:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return s}));var t=r(2),o=r(6),a=(r(0),r(119)),l=r(298),c={id:"column-hover",title:"\u5217\u9ad8\u4eae"},i={unversionedId:"transforms/column-hover",id:"transforms/column-hover",isDocsHomePage:!1,title:"\u5217\u9ad8\u4eae",description:"columnHover \u5217\u9ad8\u4eae",source:"@site/docs/transforms/4-column-hover.mdx",slug:"/transforms/column-hover",permalink:"/beta/docs/transforms/column-hover",editUrl:"https://github.com/alibaba/ali-react-table/docusaurus/edit/master/website/docs/transforms/4-column-hover.mdx",version:"current",sidebar:"sidebar",previous:{title:"\u5355\u5143\u683c\u81ea\u52a8\u5408\u5e76",permalink:"/beta/docs/transforms/auto-row-span"},next:{title:"\u62d6\u62fd\u8c03\u6574\u5217\u5bbd",permalink:"/beta/docs/transforms/column-resize"}},u=[{value:"columnHover \u5217\u9ad8\u4eae",id:"columnhover-\u5217\u9ad8\u4eae",children:[]},{value:"columnRangeHover \u5217\u8303\u56f4\u9ad8\u4eae",id:"columnrangehover-\u5217\u8303\u56f4\u9ad8\u4eae",children:[]},{value:"\u975e\u53d7\u63a7\u7528\u6cd5",id:"\u975e\u53d7\u63a7\u7528\u6cd5",children:[]}],m={rightToc:u};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},m,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"columnhover-\u5217\u9ad8\u4eae"},"columnHover \u5217\u9ad8\u4eae"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"makeColumnHoverTransform(options: ColumnHoverOptions): TableTransform")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8fd9\u662f\u4e00\u4e2a\u53ea\u4f1a\u5bf9 ",Object(a.b)("inlineCode",{parentName:"li"},"columns")," \u8fdb\u884c\u66f4\u65b0\u7684 transform"),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u67d0\u4e00\u5217\u7684 colIndex \u4e0e options.hoverColIndex \u5339\u914d\uff0c\u8be5 transform \u4f1a\u5c06\u8be5\u5217\u5355\u5143\u683c\u7684\u80cc\u666f\u8272\u8bbe\u7f6e\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"options.hoverColor"),"\uff0c\u9ed8\u8ba4\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"'#f5f5f5'"))),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"type ColumnHoverOptions = {\n  hoverColor?: string\n  hoverColIndex: number\n  onChangeHoverColIndex(nextColIndex: number): void\n}\n")),Object(a.b)(l.a,{id:"transforms-\u529f\u80fd\u62d3\u5c55\uff08\u5df2\u8fc7\u65f6\uff09--\u5217\u9ad8\u4eae",mdxType:"Story"}),Object(a.b)("h2",{id:"columnrangehover-\u5217\u8303\u56f4\u9ad8\u4eae"},"columnRangeHover \u5217\u8303\u56f4\u9ad8\u4eae"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"makeColumnRangeHoverTransform(options: ColumnRangeHoverOptions): TableTransform")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8fd9\u662f\u4e00\u4e2a\u53ea\u4f1a\u5bf9 ",Object(a.b)("inlineCode",{parentName:"li"},"columns")," \u8fdb\u884c\u66f4\u65b0\u7684 transform"),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u67d0\u4e00\u5217\u7684 colIndex \u4e0e ",Object(a.b)("inlineCode",{parentName:"li"},"options.hoverColor")," \u5339\u914d...",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u8be5 transform \u4f1a\u5c06\u8be5\u5217\u5355\u5143\u683c\u7684\u80cc\u666f\u8272\u8bbe\u7f6e\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"options.hoverColor"),"\uff0c\u9ed8\u8ba4\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"'#f5f5f5'")),Object(a.b)("li",{parentName:"ul"},"\u8be5 transform \u4f1a\u5c06\u8be5\u5217\u8868\u5934\u7684\u80cc\u666f\u8272\u8bbe\u7f6e\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"options.headerHoverColor"),"\uff0c\u9ed8\u8ba4\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"'#ddd'"))))),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-typescript"}),"type ColumnHoverOptions = {\n  hoverColor?: string\n  headerHoverColor?: string\n  hoverRange: { start: number; end: number }\n  onChangeHoverRange(nextColIndexRange: { start: number; end: number }): void\n}\n")),Object(a.b)(l.a,{id:"transforms-\u529f\u80fd\u62d3\u5c55\uff08\u5df2\u8fc7\u65f6\uff09--\u5217\u7684\u8303\u56f4\u9ad8\u4eae",mdxType:"Story"}),Object(a.b)("h2",{id:"\u975e\u53d7\u63a7\u7528\u6cd5"},"\u975e\u53d7\u63a7\u7528\u6cd5"),Object(a.b)("p",null,"ali-react-table \u4e5f\u63d0\u4f9b\u4e86\u975e\u53d7\u63a7\u7684\u4f7f\u7528\u65b9\u5f0f\uff1auseColumnHoverTransform\u3002\u4e24\u8005\u4e0e\u53d7\u63a7\u7528\u6cd5\u7c7b\u4f3c\uff0c\u4f46\u79fb\u9664\u4e86 hoverColIndex/onChangeHoverColIndex\uff0c\u540c\u65f6\u589e\u52a0\u4e86 defaultHoverColIndex."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),"import { useColumnHoverTransform } from 'ali-react-table'\n\nfunction MyComponent() {\n  const columnHover = useColumnHoverTransform()\n  const renderData = applyTransforms({ columns: inputColumns, dataSource: inputDataSource }, columnHover)\n\n  return <BaseTable dataSource={renderData.dataSource} columns={renderData.columns} />\n}\n")),Object(a.b)("p",null,"\u975e\u53d7\u63a7\u5217\u8303\u56f4\u9ad8\u4eae useColumnRangeHoverTransform\uff1auseColumnHoverRangeTransform \u5728\u53d7\u63a7\u7528\u6cd5\u7684\u57fa\u7840\u4e0a\u79fb\u9664\u4e86 hoverRange/onChangeHoverRange\uff0c\u589e\u52a0\u4e86 defaultHoverRange."))}s.isMDXComponent=!0}}]);