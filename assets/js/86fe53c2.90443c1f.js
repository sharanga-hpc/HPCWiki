"use strict";(self.webpackChunkhpc_wiki=self.webpackChunkhpc_wiki||[]).push([[3194],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(f,i(i({ref:t},s),{},{components:a})):r.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4553:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:4,sidebar_label:"Software",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Software",displayed_sidebar:null},i=void 0,o={unversionedId:"misc_docs/software/llvm",id:"misc_docs/software/llvm",title:"Software",description:"Software - llvm",source:"@site/docs/misc_docs/software/llvm.mdx",sourceDirName:"misc_docs/software",slug:"/misc_docs/software/llvm",permalink:"/docs/misc_docs/software/llvm",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Software",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Software",displayed_sidebar:null}},p={},c=[{value:"Software - llvm",id:"software---llvm",level:2},{value:"Description",id:"description",level:4},{value:"Website",id:"website",level:4},{value:"Variants installed",id:"variants-installed",level:4}],s={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"software---llvm"},"Software - llvm"),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,'The LLVM Project is a collection of modular and reusable compiler and toolchain technologies. Despite its name, LLVM has little to do with traditional virtual machines, though it does provide helpful libraries that can be used to build them. The name "LLVM" itself is not an acronym; it is the full name of the project.'),(0,n.kt)("h4",{id:"website"},"Website"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://llvm.org/"},"https://llvm.org/")),(0,n.kt)("h4",{id:"variants-installed"},"Variants installed"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"llvm 12.0.1"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Compiler: gcc 8.5.0"),(0,n.kt)("li",{parentName:"ul"},"Architecture: zen")),(0,n.kt)("p",{parentName:"li"},"Spack Command"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load llvm/sdcts24\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"llvm 12.0.1"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Compiler: gcc 8.5.0"),(0,n.kt)("li",{parentName:"ul"},"Architecture: zen")),(0,n.kt)("p",{parentName:"li"},"Spack Command"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load llvm/inj4bmb\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"llvm 13.0.1"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Compiler: gcc 8.5.0"),(0,n.kt)("li",{parentName:"ul"},"Architecture: zen"),(0,n.kt)("li",{parentName:"ul"},"Supports CUDA")),(0,n.kt)("p",{parentName:"li"},"Spack Command"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load llvm/cxnumfy\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"llvm 13.0.1"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Compiler: gcc 8.5.0"),(0,n.kt)("li",{parentName:"ul"},"Architecture: zen"),(0,n.kt)("li",{parentName:"ul"},"Supports CUDA")),(0,n.kt)("p",{parentName:"li"},"Spack Command"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load llvm/khjzvwq\n")))))}u.isMDXComponent=!0}}]);