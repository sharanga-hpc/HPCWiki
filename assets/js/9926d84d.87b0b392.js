"use strict";(self.webpackChunkhpc_wiki=self.webpackChunkhpc_wiki||[]).push([[6938],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=o,g=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:5,sidebar_label:"NVIDIA GPU Cloud (NGC)",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"NVIDIA GPU Cloud (NGC)",draft:!1},i=void 0,s={unversionedId:"faq/software/ngc",id:"faq/software/ngc",title:"NVIDIA GPU Cloud (NGC)",description:"NVIDIA GPU Cloud",source:"@site/docs/faq/software/ngc.md",sourceDirName:"faq/software",slug:"/faq/software/ngc",permalink:"/docs/faq/software/ngc",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"NVIDIA GPU Cloud (NGC)",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"NVIDIA GPU Cloud (NGC)",draft:!1},sidebar:"FAQ"},c={},l=[{value:"NVIDIA GPU Cloud",id:"nvidia-gpu-cloud",level:2},{value:"What is the NVIDIA GPU Cloud (NGC) CLI?",id:"what-is-the-nvidia-gpu-cloud-ngc-cli",level:3},{value:"Do I Need an NVIDIA Account to Use NGC CLI?",id:"do-i-need-an-nvidia-account-to-use-ngc-cli",level:3},{value:"How Can I Authenticate with NGC Using the CLI?",id:"how-can-i-authenticate-with-ngc-using-the-cli",level:3},{value:"What Types of Resources Can I Access Through NGC CLI?",id:"what-types-of-resources-can-i-access-through-ngc-cli",level:3},{value:"How Do I Search for Containers or Models in NGC Using the CLI?",id:"how-do-i-search-for-containers-or-models-in-ngc-using-the-cli",level:3},{value:"Can I Pull a Specific Version of a Container Using NGC CLI?",id:"can-i-pull-a-specific-version-of-a-container-using-ngc-cli",level:3},{value:"Is There a Way to Download Pre-Trained Models Directly via NGC CLI?",id:"is-there-a-way-to-download-pre-trained-models-directly-via-ngc-cli",level:3},{value:"Are There Any Costs Associated with Using NGC and the NGC CLI?",id:"are-there-any-costs-associated-with-using-ngc-and-the-ngc-cli",level:3},{value:"What Kind of Support is Available for NGC CLI Users?",id:"what-kind-of-support-is-available-for-ngc-cli-users",level:3},{value:"Why should I use NGC containers?",id:"why-should-i-use-ngc-containers",level:3},{value:"How do I run an NGC containers?",id:"how-do-i-run-an-ngc-containers",level:3},{value:"Can I Access Private Registries Through NGC CLI?",id:"can-i-access-private-registries-through-ngc-cli",level:3}],u={toc:l},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"nvidia-gpu-cloud"},"NVIDIA GPU Cloud"),(0,o.kt)("h3",{id:"what-is-the-nvidia-gpu-cloud-ngc-cli"},"What is the NVIDIA GPU Cloud (NGC) CLI?"),(0,o.kt)("p",null,"The NVIDIA GPU Cloud (NGC) CLI is a command-line interface for managing NVIDIA GPU Cloud resources. It allows you to manage your NGC resources from the command line. It offers functionalities to search, pull, and push AI and HPC application containers and models."),(0,o.kt)("h3",{id:"do-i-need-an-nvidia-account-to-use-ngc-cli"},"Do I Need an NVIDIA Account to Use NGC CLI?"),(0,o.kt)("p",null,"Yes. You need an NVIDIA account to use NGC CLI. If you do not have an NVIDIA account, you can create one at ",(0,o.kt)("a",{parentName:"p",href:"https://ngc.nvidia.com/signup"},"https://ngc.nvidia.com/signup"),"."),(0,o.kt)("h3",{id:"how-can-i-authenticate-with-ngc-using-the-cli"},"How Can I Authenticate with NGC Using the CLI?"),(0,o.kt)("p",null,"To authenticate with NGC using the CLI, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ngc config set\n")),(0,o.kt)("h3",{id:"what-types-of-resources-can-i-access-through-ngc-cli"},"What Types of Resources Can I Access Through NGC CLI?"),(0,o.kt)("p",null,"You can access a variety of resources, including Docker containers optimized for NVIDIA GPUs, pre-trained models, SDKs, and HPC applications."),(0,o.kt)("h3",{id:"how-do-i-search-for-containers-or-models-in-ngc-using-the-cli"},"How Do I Search for Containers or Models in NGC Using the CLI?"),(0,o.kt)("p",null,"To search for containers or models in NGC using the CLI, run the following command:"),(0,o.kt)("p",null,"For searching models:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ngc catalog search model <search term>\n")),(0,o.kt)("p",null,"For searching containers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ngc catalog search container <search term>\n")),(0,o.kt)("p",null,"This will display a list of available models or containers that match your query."),(0,o.kt)("h3",{id:"can-i-pull-a-specific-version-of-a-container-using-ngc-cli"},"Can I Pull a Specific Version of a Container Using NGC CLI?"),(0,o.kt)("p",null,"Yes. To pull a specific version of a container, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ngc container pull <container name>:<version>\n")),(0,o.kt)("h3",{id:"is-there-a-way-to-download-pre-trained-models-directly-via-ngc-cli"},"Is There a Way to Download Pre-Trained Models Directly via NGC CLI?"),(0,o.kt)("p",null,"Yes. To download pre-trained models directly via NGC CLI, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ngc model download <model name>:<version>\n")),(0,o.kt)("h3",{id:"are-there-any-costs-associated-with-using-ngc-and-the-ngc-cli"},"Are There Any Costs Associated with Using NGC and the NGC CLI?"),(0,o.kt)("p",null,"Accessing NGC and using the NGC CLI is generally free, but some resources, especially certain enterprise-grade containers or models, may require a subscription or purchase."),(0,o.kt)("h3",{id:"what-kind-of-support-is-available-for-ngc-cli-users"},"What Kind of Support is Available for NGC CLI Users?"),(0,o.kt)("p",null,"NVIDIA offers a variety of support options for NGC CLI users, including a community forum, a knowledge base, and a support portal. For more information, please visit ",(0,o.kt)("a",{parentName:"p",href:"https://ngc.nvidia.com/support"},"https://ngc.nvidia.com/support"),"."),(0,o.kt)("h3",{id:"why-should-i-use-ngc-containers"},"Why should I use NGC containers?"),(0,o.kt)("p",null,"NGC containers are optimized for NVIDIA GPUs and provide a consistent, reliable, and secure environment for running AI and HPC applications. They are also easy to use and can be deployed in minutes."),(0,o.kt)("p",null,"We recommend using NGC containers for all AI and HPC applications that require NVIDIA GPUs."),(0,o.kt)("h3",{id:"how-do-i-run-an-ngc-containers"},"How do I run an NGC containers?"),(0,o.kt)("p",null,"To run an NGC container using Apptainer, use the following command in your Slurm script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ apptainer run --image <container name>:<version> --gpu <number of GPUs> -- <command>\n")),(0,o.kt)("p",null,"Ensure that you replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<container name>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<version>")," with the name and version of the container you want to run. You can find the name and version of the container on the NGC website."),(0,o.kt)("h3",{id:"can-i-access-private-registries-through-ngc-cli"},"Can I Access Private Registries Through NGC CLI?"),(0,o.kt)("p",null,"Yes. To access private registries through NGC CLI, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ngc registry login\n")))}p.isMDXComponent=!0}}]);