"use strict";(self.webpackChunkhpc_wiki=self.webpackChunkhpc_wiki||[]).push([[6789],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4,sidebar_label:"Software",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Software",displayed_sidebar:null},i=void 0,s={unversionedId:"misc_docs/software/gromacs",id:"misc_docs/software/gromacs",title:"Software",description:"Software - gromacs",source:"@site/docs/misc_docs/software/gromacs.mdx",sourceDirName:"misc_docs/software",slug:"/misc_docs/software/gromacs",permalink:"/docs/misc_docs/software/gromacs",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Software",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Software",displayed_sidebar:null}},l={},c=[{value:"Software - gromacs",id:"software---gromacs",level:2},{value:"Description",id:"description",level:4},{value:"Website",id:"website",level:4},{value:"Variants installed",id:"variants-installed",level:4}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"software---gromacs"},"Software - gromacs"),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"GROMACS is a molecular dynamics package primarily designed for simulations of proteins, lipids and nucleic acids. It was originally developed in the Biophysical Chemistry department of University of Groningen, and is now maintained by contributors in universities and research centers across the world. GROMACS is one of the fastest and most popular software packages available and can run on CPUs as well as GPUs. It is free, open source released under the GNU Lesser General Public License. Before the version 4.6, GROMACS was released under the GNU General Public License."),(0,a.kt)("h4",{id:"website"},"Website"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.gromacs.org"},"https://www.gromacs.org")),(0,a.kt)("h4",{id:"variants-installed"},"Variants installed"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"gromacs 2022.2"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Compiler: gcc 11.2.0"),(0,a.kt)("li",{parentName:"ul"},"Architecture: zen2"),(0,a.kt)("li",{parentName:"ul"},"Supports MPI"),(0,a.kt)("li",{parentName:"ul"},"Supports OpenMP")),(0,a.kt)("p",{parentName:"li"},"Spack Command"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ spack load gromacs/zc2twmd\n")))))}u.isMDXComponent=!0}}]);