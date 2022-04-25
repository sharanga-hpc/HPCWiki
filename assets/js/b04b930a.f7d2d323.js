"use strict";(self.webpackChunkhp_cwiki=self.webpackChunkhp_cwiki||[]).push([[6473],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(a),p=o,h=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2367:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return m}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),l=["components"],r={sidebar_position:2,sidebar_label:"With ModuleFiles",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Package Management"},s=void 0,c={unversionedId:"faq/package/module",id:"faq/package/module",title:"Package Management",description:"Package Management with ModuleFiles",source:"@site/docs/faq/package/module.md",sourceDirName:"faq/package",slug:"/faq/package/module",permalink:"/docs/faq/package/module",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"With ModuleFiles",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Package Management"},sidebar:"FAQ"},u={},m=[{value:"Package Management with ModuleFiles",id:"package-management-with-modulefiles",level:2},{value:"How to view the list of available packages in the facility?",id:"how-to-view-the-list-of-available-packages-in-the-facility",level:3},{value:"How to load and unload a package(s)?",id:"how-to-load-and-unload-a-packages",level:3},{value:"How to view the list of loaded packages?",id:"how-to-view-the-list-of-loaded-packages",level:3},{value:"How do I check the version of the package installed?",id:"how-do-i-check-the-version-of-the-package-installed",level:3},{value:"After submitting a job, I am getting messages like &quot;module: command not found&quot;. Why am I getting this message?",id:"after-submitting-a-job-i-am-getting-messages-like-module-command-not-found-why-am-i-getting-this-message",level:3}],d={toc:m};function p(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"package-management-with-modulefiles"},"Package Management with ModuleFiles"),(0,i.kt)("h3",{id:"how-to-view-the-list-of-available-packages-in-the-facility"},"How to view the list of available packages in the facility?"),(0,i.kt)("p",null,"On Sharanga, users can use the following command to view the list of installed packages (with the versions)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ module avail\n--------------------------------- /share/module-------------------------------\n   2brad_denovo/2019-01-22_giteec5016            meshclust2/2.1.0\n   2brad_gatk/2019-01-22_git1fcc9e8              metal/2010-02-08\n   admixture/1.3.0                               metal/2011-03-25\n   angsd/0.923                                   metalge/2010-02-08\n   annovar/2018apr                               minimac2/2014-09-15\n   artemis/18.0.3                                minimac3/2.0.1\n   augustus/3.3.2                                minimac4/1.0.0\n   bamtools/2.5.1                                mirdeep2/0.1.0\n   bamutil/1.0.14                                mixcr/3.0.3\n   basemount/0.15.103.3011                       mmap/2018-04-07\n   basespace-cli/0.8.12.590                      morgan/3.2\n   basespace-cli/0.9.17                          morgan/3.4\n   basespace-cli/0.10.8                          mosdepth/0.2.6\n   bayescan/2.1                                  mothur/1.35.0\n   bbmap/38.16                                   multiqc/1.6\n   bcbio/1.1.1                                   mummer/3.23\n")),(0,i.kt)("h3",{id:"how-to-load-and-unload-a-packages"},"How to load and unload a package(s)?"),(0,i.kt)("p",null,"Users can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"module load")," command to load a package into their current environment. For example, a user who wishes to use ",(0,i.kt)("inlineCode",{parentName:"p"},"PETSc")," library can use the following syntax."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ module load petsc\n")),(0,i.kt)("p",null,"If a user wishes to unload the ",(0,i.kt)("inlineCode",{parentName:"p"},"PETSc")," library from their user environment, they can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"module rm")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ module rm petsc\n")),(0,i.kt)("p",null,"If a user wishes to unload all the loaded libraries from their user environment, then they can use the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ module purge\n")),(0,i.kt)("h3",{id:"how-to-view-the-list-of-loaded-packages"},"How to view the list of loaded packages?"),(0,i.kt)("p",null,"Users can use the following command to find the list of currently loaded modules."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ module list\n")),(0,i.kt)("h3",{id:"how-do-i-check-the-version-of-the-package-installed"},"How do I check the version of the package installed?"),(0,i.kt)("p",null,"Users can type the following command to find the version of the installed package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ module spider <package name>\n")),(0,i.kt)("p",null,"Note that the user may get additional information about the package by using the following command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ module help <package name>\n")),(0,i.kt)("h3",{id:"after-submitting-a-job-i-am-getting-messages-like-module-command-not-found-why-am-i-getting-this-message"},'After submitting a job, I am getting messages like "module: command not found". Why am I getting this message?'),(0,i.kt)("p",null,"Modulefiles are by default sourced by the default shell ",(0,i.kt)("inlineCode",{parentName:"p"},"/bin/bash"),". You may get this message if you have changed the shell to something other than ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),". We request you to change the shell back to ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," for optimal functioning. Users can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"chsh")," shell command to change their user shell environment back to ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),". Another reason could be due to the unavailability of the desired package."))}p.isMDXComponent=!0}}]);