"use strict";(self.webpackChunkhpc_wiki=self.webpackChunkhpc_wiki||[]).push([[6324],{8112:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=i(7624),o=i(4552);const s={sidebar_position:5,sidebar_label:"NVIDIA GPU Cloud (NGC)",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"NVIDIA GPU Cloud (NGC)",draft:!1},r=void 0,c={id:"faq/software/ngc",title:"NVIDIA GPU Cloud (NGC)",description:"NVIDIA GPU Cloud",source:"@site/docs/faq/software/ngc.md",sourceDirName:"faq/software",slug:"/faq/software/ngc",permalink:"/docs/faq/software/ngc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"NVIDIA GPU Cloud (NGC)",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"NVIDIA GPU Cloud (NGC)",draft:!1},sidebar:"FAQ"},t={},l=[{value:"NVIDIA GPU Cloud",id:"nvidia-gpu-cloud",level:2},{value:"What is the NVIDIA GPU Cloud (NGC) CLI?",id:"what-is-the-nvidia-gpu-cloud-ngc-cli",level:3},{value:"Do I Need an NVIDIA Account to Use NGC CLI?",id:"do-i-need-an-nvidia-account-to-use-ngc-cli",level:3},{value:"How Can I Authenticate with NGC Using the CLI?",id:"how-can-i-authenticate-with-ngc-using-the-cli",level:3},{value:"What Types of Resources Can I Access Through NGC CLI?",id:"what-types-of-resources-can-i-access-through-ngc-cli",level:3},{value:"How Do I Search for Containers or Models in NGC Using the CLI?",id:"how-do-i-search-for-containers-or-models-in-ngc-using-the-cli",level:3},{value:"Can I Pull a Specific Version of a Container Using NGC CLI?",id:"can-i-pull-a-specific-version-of-a-container-using-ngc-cli",level:3},{value:"Is There a Way to Download Pre-Trained Models Directly via NGC CLI?",id:"is-there-a-way-to-download-pre-trained-models-directly-via-ngc-cli",level:3},{value:"Are There Any Costs Associated with Using NGC and the NGC CLI?",id:"are-there-any-costs-associated-with-using-ngc-and-the-ngc-cli",level:3},{value:"What Kind of Support is Available for NGC CLI Users?",id:"what-kind-of-support-is-available-for-ngc-cli-users",level:3},{value:"Why should I use NGC containers?",id:"why-should-i-use-ngc-containers",level:3},{value:"How do I run an NGC containers?",id:"how-do-i-run-an-ngc-containers",level:3},{value:"Can I Access Private Registries Through NGC CLI?",id:"can-i-access-private-registries-through-ngc-cli",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"nvidia-gpu-cloud",children:"NVIDIA GPU Cloud"}),"\n",(0,a.jsx)(n.h3,{id:"what-is-the-nvidia-gpu-cloud-ngc-cli",children:"What is the NVIDIA GPU Cloud (NGC) CLI?"}),"\n",(0,a.jsx)(n.p,{children:"The NVIDIA GPU Cloud (NGC) CLI is a command-line interface for managing NVIDIA GPU Cloud resources. It allows you to manage your NGC resources from the command line. It offers functionalities to search, pull, and push AI and HPC application containers and models."}),"\n",(0,a.jsx)(n.h3,{id:"do-i-need-an-nvidia-account-to-use-ngc-cli",children:"Do I Need an NVIDIA Account to Use NGC CLI?"}),"\n",(0,a.jsxs)(n.p,{children:["Yes. You need an NVIDIA account to use NGC CLI. If you do not have an NVIDIA account, you can create one at ",(0,a.jsx)(n.a,{href:"https://ngc.nvidia.com/signup",children:"https://ngc.nvidia.com/signup"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"how-can-i-authenticate-with-ngc-using-the-cli",children:"How Can I Authenticate with NGC Using the CLI?"}),"\n",(0,a.jsx)(n.p,{children:"To authenticate with NGC using the CLI, run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ ngc config set\n"})}),"\n",(0,a.jsx)(n.h3,{id:"what-types-of-resources-can-i-access-through-ngc-cli",children:"What Types of Resources Can I Access Through NGC CLI?"}),"\n",(0,a.jsx)(n.p,{children:"You can access a variety of resources, including Docker containers optimized for NVIDIA GPUs, pre-trained models, SDKs, and HPC applications."}),"\n",(0,a.jsx)(n.h3,{id:"how-do-i-search-for-containers-or-models-in-ngc-using-the-cli",children:"How Do I Search for Containers or Models in NGC Using the CLI?"}),"\n",(0,a.jsx)(n.p,{children:"To search for containers or models in NGC using the CLI, run the following command:"}),"\n",(0,a.jsx)(n.p,{children:"For searching models:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ ngc catalog search model <search term>\n"})}),"\n",(0,a.jsx)(n.p,{children:"For searching containers:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ ngc catalog search container <search term>\n"})}),"\n",(0,a.jsx)(n.p,{children:"This will display a list of available models or containers that match your query."}),"\n",(0,a.jsx)(n.h3,{id:"can-i-pull-a-specific-version-of-a-container-using-ngc-cli",children:"Can I Pull a Specific Version of a Container Using NGC CLI?"}),"\n",(0,a.jsx)(n.p,{children:"Yes. To pull a specific version of a container, run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ ngc container pull <container name>:<version>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"is-there-a-way-to-download-pre-trained-models-directly-via-ngc-cli",children:"Is There a Way to Download Pre-Trained Models Directly via NGC CLI?"}),"\n",(0,a.jsx)(n.p,{children:"Yes. To download pre-trained models directly via NGC CLI, run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ ngc model download <model name>:<version>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"are-there-any-costs-associated-with-using-ngc-and-the-ngc-cli",children:"Are There Any Costs Associated with Using NGC and the NGC CLI?"}),"\n",(0,a.jsx)(n.p,{children:"Accessing NGC and using the NGC CLI is generally free, but some resources, especially certain enterprise-grade containers or models, may require a subscription or purchase."}),"\n",(0,a.jsx)(n.h3,{id:"what-kind-of-support-is-available-for-ngc-cli-users",children:"What Kind of Support is Available for NGC CLI Users?"}),"\n",(0,a.jsxs)(n.p,{children:["NVIDIA offers a variety of support options for NGC CLI users, including a community forum, a knowledge base, and a support portal. For more information, please visit ",(0,a.jsx)(n.a,{href:"https://ngc.nvidia.com/support",children:"https://ngc.nvidia.com/support"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"why-should-i-use-ngc-containers",children:"Why should I use NGC containers?"}),"\n",(0,a.jsx)(n.p,{children:"NGC containers are optimized for NVIDIA GPUs and provide a consistent, reliable, and secure environment for running AI and HPC applications. They are also easy to use and can be deployed in minutes."}),"\n",(0,a.jsx)(n.p,{children:"We recommend using NGC containers for all AI and HPC applications that require NVIDIA GPUs."}),"\n",(0,a.jsx)(n.h3,{id:"how-do-i-run-an-ngc-containers",children:"How do I run an NGC containers?"}),"\n",(0,a.jsx)(n.p,{children:"To run an NGC container using Apptainer, use the following command in your Slurm script:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ apptainer run --image <container name>:<version> --gpu <number of GPUs> -- <command>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Ensure that you replace ",(0,a.jsx)(n.code,{children:"<container name>"})," and ",(0,a.jsx)(n.code,{children:"<version>"})," with the name and version of the container you want to run. You can find the name and version of the container on the NGC website."]}),"\n",(0,a.jsx)(n.h3,{id:"can-i-access-private-registries-through-ngc-cli",children:"Can I Access Private Registries Through NGC CLI?"}),"\n",(0,a.jsx)(n.p,{children:"Yes. To access private registries through NGC CLI, run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ ngc registry login\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>c,M:()=>r});var a=i(1504);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);