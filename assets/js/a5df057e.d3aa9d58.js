"use strict";(self.webpackChunkhpc_wiki=self.webpackChunkhpc_wiki||[]).push([[9161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1053:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4,sidebar_label:"Software",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Software",displayed_sidebar:null},o=void 0,l={unversionedId:"misc_docs/software/pmix",id:"misc_docs/software/pmix",title:"Software",description:"Software - pmix",source:"@site/docs/misc_docs/software/pmix.mdx",sourceDirName:"misc_docs/software",slug:"/misc_docs/software/pmix",permalink:"/docs/misc_docs/software/pmix",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Software",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Software",displayed_sidebar:null}},p={},s=[{value:"Software - pmix",id:"software---pmix",level:2},{value:"Description",id:"description",level:4},{value:"Website",id:"website",level:4},{value:"Variants installed",id:"variants-installed",level:4}],c={toc:s},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"software---pmix"},"Software - pmix"),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"The Process Management Interface (PMI) has been used for quite some time as a means of exchanging wireup information needed for interprocess communication. However, meeting the significant orchestration challenges presented by exascale systems requires that the process-to-system interface evolve to permit a tighter integration between the different components of the parallel application and existing and future SMS solutions. PMI Exascale (PMIx) addresses these needs by providing an extended version of the PMI definitions specifically designed to support exascale and beyond environments by: (a) adding flexibility to the functionality expressed in the existing APIs, (b) augmenting the interfaces with new APIs that provide extended capabilities, (c) forging a collaboration between subsystem providers including resource manager, fabric, file system, and programming library developers, (d) establishing a standards-like body for maintaining the definitions, and (e) providing a reference implementation of the PMIx standard that demonstrates the desired level of scalability while maintaining strict separation between it and the standard itself."),(0,r.kt)("h4",{id:"website"},"Website"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pmix.org"},"https://pmix.org")),(0,r.kt)("h4",{id:"variants-installed"},"Variants installed"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"pmix 4.1.2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compiler: gcc 8.5.0"),(0,r.kt)("li",{parentName:"ul"},"Architecture: zen")),(0,r.kt)("p",{parentName:"li"},"Spack Command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load pmix/ng5nlim\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"pmix 4.1.2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compiler: gcc 11.2.0"),(0,r.kt)("li",{parentName:"ul"},"Architecture: zen2"),(0,r.kt)("li",{parentName:"ul"},"Supports CUDA")),(0,r.kt)("p",{parentName:"li"},"Spack Command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load pmix/otoh3fg\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"pmix 4.1.2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compiler: gcc 11.2.0"),(0,r.kt)("li",{parentName:"ul"},"Architecture: zen2")),(0,r.kt)("p",{parentName:"li"},"Spack Command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load pmix/hwybma5\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"pmix 4.1.2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compiler: nvhpc 22.5"),(0,r.kt)("li",{parentName:"ul"},"Architecture: zen")),(0,r.kt)("p",{parentName:"li"},"Spack Command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load pmix/r7b2vqa\n")))))}d.isMDXComponent=!0}}]);