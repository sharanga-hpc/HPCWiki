"use strict";(self.webpackChunkhpc_wiki=self.webpackChunkhpc_wiki||[]).push([[6473],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>h});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=c(t),p=o,h=u["".concat(s,".").concat(p)]||u[p]||d[p]||l;return t?n.createElement(h,i(i({ref:a},m),{},{components:t})):n.createElement(h,i({ref:a},m))}));function h(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=p;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r[u]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2367:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const l={sidebar_position:2,sidebar_label:"With ModuleFiles",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Package Management"},i=void 0,r={unversionedId:"faq/package/module",id:"faq/package/module",title:"Package Management",description:"Package Management with ModuleFiles",source:"@site/docs/faq/package/module.md",sourceDirName:"faq/package",slug:"/faq/package/module",permalink:"/docs/faq/package/module",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"With ModuleFiles",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Package Management"},sidebar:"FAQ"},s={},c=[{value:"Package Management with ModuleFiles",id:"package-management-with-modulefiles",level:2},{value:"How to view the list of available packages in the facility?",id:"how-to-view-the-list-of-available-packages-in-the-facility",level:3},{value:"How to load and unload a package(s)?",id:"how-to-load-and-unload-a-packages",level:3},{value:"How to view the list of loaded packages?",id:"how-to-view-the-list-of-loaded-packages",level:3},{value:"How do I check the version of the package installed?",id:"how-do-i-check-the-version-of-the-package-installed",level:3},{value:"After submitting a job, I am getting messages like &quot;module: command not found&quot;. Why am I getting this message?",id:"after-submitting-a-job-i-am-getting-messages-like-module-command-not-found-why-am-i-getting-this-message",level:3}],m={toc:c},u="wrapper";function d(e){let{components:a,...t}=e;return(0,o.kt)(u,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"package-management-with-modulefiles"},"Package Management with ModuleFiles"),(0,o.kt)("h3",{id:"how-to-view-the-list-of-available-packages-in-the-facility"},"How to view the list of available packages in the facility?"),(0,o.kt)("p",null,"On Sharanga, users can use the following command to view the list of installed packages (with the versions)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ module avail\n--------------------------------- /share/module-------------------------------\n   2brad_denovo/2019-01-22_giteec5016            meshclust2/2.1.0\n   2brad_gatk/2019-01-22_git1fcc9e8              metal/2010-02-08\n   admixture/1.3.0                               metal/2011-03-25\n   angsd/0.923                                   metalge/2010-02-08\n   annovar/2018apr                               minimac2/2014-09-15\n   artemis/18.0.3                                minimac3/2.0.1\n   augustus/3.3.2                                minimac4/1.0.0\n   bamtools/2.5.1                                mirdeep2/0.1.0\n   bamutil/1.0.14                                mixcr/3.0.3\n   basemount/0.15.103.3011                       mmap/2018-04-07\n   basespace-cli/0.8.12.590                      morgan/3.2\n   basespace-cli/0.9.17                          morgan/3.4\n   basespace-cli/0.10.8                          mosdepth/0.2.6\n   bayescan/2.1                                  mothur/1.35.0\n   bbmap/38.16                                   multiqc/1.6\n   bcbio/1.1.1                                   mummer/3.23\n")),(0,o.kt)("h3",{id:"how-to-load-and-unload-a-packages"},"How to load and unload a package(s)?"),(0,o.kt)("p",null,"Users can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"module load")," command to load a package into their current environment. For example, a user who wishes to use ",(0,o.kt)("inlineCode",{parentName:"p"},"PETSc")," library can use the following syntax."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ module load petsc\n")),(0,o.kt)("p",null,"If a user wishes to unload the ",(0,o.kt)("inlineCode",{parentName:"p"},"PETSc")," library from their user environment, they can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"module rm")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ module rm petsc\n")),(0,o.kt)("p",null,"If a user wishes to unload all the loaded libraries from their user environment, then they can use the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ module purge\n")),(0,o.kt)("h3",{id:"how-to-view-the-list-of-loaded-packages"},"How to view the list of loaded packages?"),(0,o.kt)("p",null,"Users can use the following command to find the list of currently loaded modules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ module list\n")),(0,o.kt)("h3",{id:"how-do-i-check-the-version-of-the-package-installed"},"How do I check the version of the package installed?"),(0,o.kt)("p",null,"Users can type the following command to find the version of the installed package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ module spider <package name>\n")),(0,o.kt)("p",null,"Note that the user may get additional information about the package by using the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ module help <package name>\n")),(0,o.kt)("h3",{id:"after-submitting-a-job-i-am-getting-messages-like-module-command-not-found-why-am-i-getting-this-message"},'After submitting a job, I am getting messages like "module: command not found". Why am I getting this message?'),(0,o.kt)("p",null,"Modulefiles are by default sourced by the default shell ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin/bash"),". You may get this message if you have changed the shell to something other than ",(0,o.kt)("inlineCode",{parentName:"p"},"bash"),". We request you to change the shell back to ",(0,o.kt)("inlineCode",{parentName:"p"},"bash")," for optimal functioning. Users can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"chsh")," shell command to change their user shell environment back to ",(0,o.kt)("inlineCode",{parentName:"p"},"bash"),". Another reason could be due to the unavailability of the desired package."))}d.isMDXComponent=!0}}]);