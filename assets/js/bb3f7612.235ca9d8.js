"use strict";(self.webpackChunkhpc_wiki=self.webpackChunkhpc_wiki||[]).push([[403],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=i,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||r;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2490:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:5,sidebar_label:"Files and Directories",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Files and Directories"},o=void 0,l={unversionedId:"faq/files",id:"faq/files",title:"Files and Directories",description:"Files and Directories",source:"@site/docs/faq/files.md",sourceDirName:"faq",slug:"/faq/files",permalink:"/docs/faq/files",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Files and Directories",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null,title:"Files and Directories"},sidebar:"FAQ"},s={},c=[{value:"Files and Directories",id:"files-and-directories",level:2},{value:"How to find the last modification date of a file?",id:"how-to-find-the-last-modification-date-of-a-file",level:3},{value:"How to find the deletion date of a file stored in <code>SCRATCH</code>?",id:"how-to-find-the-deletion-date-of-a-file-stored-in-scratch",level:3},{value:"Using <code>date</code>",id:"using-date",level:4},{value:"Using <code>usertools</code>",id:"using-usertools",level:4},{value:"How to copy files or directories from my computer to the HPC cluster?",id:"how-to-copy-files-or-directories-from-my-computer-to-the-hpc-cluster",level:3},{value:"How to copy files or directories from HPC cluster to my computer?",id:"how-to-copy-files-or-directories-from-hpc-cluster-to-my-computer",level:3},{value:"How to access my $HOME directory?",id:"how-to-access-my-home-directory",level:3},{value:"How to access my $SCRATCH space?",id:"how-to-access-my-scratch-space",level:3},{value:"SCP file transfer is very slow. Is it possible to speed it up?",id:"scp-file-transfer-is-very-slow-is-it-possible-to-speed-it-up",level:3},{value:"How do I remove a large number of files?",id:"how-do-i-remove-a-large-number-of-files",level:3},{value:"Comparison of the two approaches",id:"comparison-of-the-two-approaches",level:4},{value:"Warning",id:"warning",level:4},{value:"How do I selectively delete files?",id:"how-do-i-selectively-delete-files",level:3},{value:"Warning",id:"warning-1",level:4}],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"files-and-directories"},"Files and Directories"),(0,i.kt)("h3",{id:"how-to-find-the-last-modification-date-of-a-file"},"How to find the last modification date of a file?"),(0,i.kt)("p",null,"Users can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"stat")," command to get the detailed status of a file. For example, if a user has a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"example.txt"),", then the ",(0,i.kt)("inlineCode",{parentName:"p"},"stat")," command can be invoked as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ stat example.txt\n")),(0,i.kt)("p",null,"The output will be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"File: example.txt\nSize: 0 Blocks: 1 IO Block: 4194304 regular empty file\nDevice: f96638d6h/4184226006d Inode: 144115339825778942  Links: 1\nAccess: (0600/-rw-------) Uid: ( 1000/ nischay) Gid: ( 1000/ nischay)\nAccess: 2020-08-18 23:21:06.000000000 +0530\nModify: 2020-08-18 23:21:06.000000000 +0530\nChange: 2020-08-18 23:21:06.000000000 +0530\n")),(0,i.kt)("h3",{id:"how-to-find-the-deletion-date-of-a-file-stored-in-scratch"},"How to find the deletion date of a file stored in ",(0,i.kt)("inlineCode",{parentName:"h3"},"SCRATCH"),"?"),(0,i.kt)("h4",{id:"using-date"},"Using ",(0,i.kt)("inlineCode",{parentName:"h4"},"date")),(0,i.kt)("p",null,"The file deletion date of a file can be obtained using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"date"),". For example, if we want to know the deletion date of the file ",(0,i.kt)("inlineCode",{parentName:"p"},"example.txt"),", please type the following command "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ date -d "2020-08-18 23:21:06.000000000 +0530 +15days"\n')),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"2020-08-18 23:21:06.000000000 +0530")," is the access time of the file, obtained using the ",(0,i.kt)("inlineCode",{parentName:"p"},"stat")," command as shown earlier. Since the files stores in ",(0,i.kt)("inlineCode",{parentName:"p"},"$SCRATCH")," are automatically deleted after 15 days from its last modification, we need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"+15days")," to the access time. The output of the above command will be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Wed Sep  2 23:21:06 IST 2020\n")),(0,i.kt)("h4",{id:"using-usertools"},"Using ",(0,i.kt)("inlineCode",{parentName:"h4"},"usertools")),(0,i.kt)("p",null,"Alternatively, users can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"usertools")," command to get the access time and also the time left before deletion with one single command. Please note that ",(0,i.kt)("inlineCode",{parentName:"p"},"usertools")," is ",(0,i.kt)("strong",{parentName:"p"},"not")," a standard linux command but developed by us to obtain the status of files with ease."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ usertools file access example.txt\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Filename: example.txt\nAccess Time: 2020-08-18 23:21:06.100206\nTime Left: 359 hours 59 minutes 52 seconds.\n")),(0,i.kt)("h3",{id:"how-to-copy-files-or-directories-from-my-computer-to-the-hpc-cluster"},"How to copy files or directories from my computer to the HPC cluster?"),(0,i.kt)("p",null,"Users of Linux, Windows 10 (1803 and above) and macOS can copy files using ",(0,i.kt)("inlineCode",{parentName:"p"},"scp")," utility. The following commands illustrate copying a file ",(0,i.kt)("inlineCode",{parentName:"p"},"example.txt")," and a directory ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," from a user's personal machine to the HPC facility."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ scp example.txt <user>@login.hpc.bits-hyderabad.ac.in:\n")),(0,i.kt)("p",null,"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"<user>")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," of the account to access the facility. Please note the ",(0,i.kt)("strong",{parentName:"p"},":")," (colon) after the domain name. By default, if no path is specified after the colon, the file is copied into the ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME")," directory of the user. Similarly, to copy a directory, ",(0,i.kt)("inlineCode",{parentName:"p"},"-r")," flag is used along with ",(0,i.kt)("inlineCode",{parentName:"p"},"scp"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ scp -r test <user>@login.hpc.bits-hyderabad.ac.in:\n")),(0,i.kt)("p",null,"Alternatively, the above two commands can be merged into a single command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ scp -r example.txt test <user>@login.hpc.bits-hyderabad.ac.in:\n")),(0,i.kt)("p",null,"Users of ",(0,i.kt)("inlineCode",{parentName:"p"},"macOS")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Linux")," can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"rsync")," utility, which offers faster resumable transfers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ rsync -avz --progress test <user>@login.hpc.bits-hyderabad.ac.in:\n")),(0,i.kt)("p",null,"Here,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-a")," represents archival mode of transfer, which preserves metadata\nof the file.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-v")," represents verbose mode.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-z")," represents compression mode, which compresses the data during\nthe transfer and thus improves the transfer rate.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--progress")," shows the progress of the transfer."))),(0,i.kt)("h3",{id:"how-to-copy-files-or-directories-from-hpc-cluster-to-my-computer"},"How to copy files or directories from HPC cluster to my computer?"),(0,i.kt)("p",null,"Users can copy a file or directory from the HPC cluster to their machine by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"scp")," command. For example, if a user wishes to transfer a file ",(0,i.kt)("inlineCode",{parentName:"p"},"example.txt")," and a directory ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"\\home\\<user>\\result")," directory, then the following commands can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ scp <user>@login.hpc.bits-hyderabad.ac.in:\\home\\<user>\\result\\example.txt .\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ scp -r <user>@login.hpc.bits-hyderabad.ac.in:\\home\\<user>\\result\\test .\n")),(0,i.kt)("p",null,"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"<user>")," is the ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," of the account to access the facility. Please note the ",(0,i.kt)("strong",{parentName:"p"},".")," (dot symbol) at the end of the command. The above commands copy ",(0,i.kt)("inlineCode",{parentName:"p"},"example.txt")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," into the current directory of the user's terminal on their local machine. For more information on ",(0,i.kt)("inlineCode",{parentName:"p"},"scp")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rsync"),", users can refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"manpages")," for the utilities. The manual pages of these commands can be accessed using ",(0,i.kt)("inlineCode",{parentName:"p"},"man scp")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"man rsync"),"."),(0,i.kt)("h3",{id:"how-to-access-my-home-directory"},"How to access my $HOME directory?"),(0,i.kt)("p",null,"Users can access their ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME")," directory by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"cd $HOME")," in a terminal on Sharanga. Note that the home directory of a user is accessible only to that particular user and cannot be viewed or accessed by others in the cluster."),(0,i.kt)("h3",{id:"how-to-access-my-scratch-space"},"How to access my $SCRATCH space?"),(0,i.kt)("p",null,"Users can access their ",(0,i.kt)("inlineCode",{parentName:"p"},"$SCRATCH")," space by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"cd $SCRATCH")," in a terminal on Sharanga. Note that the scratch space of a user is accessible only to that particular user and cannot be viewed or accessed by others in the cluster."),(0,i.kt)("h3",{id:"scp-file-transfer-is-very-slow-is-it-possible-to-speed-it-up"},"SCP file transfer is very slow. Is it possible to speed it up?"),(0,i.kt)("p",null,"Users are advised to use ",(0,i.kt)("inlineCode",{parentName:"p"},"rsync")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"-avz")," flags for compressible and resumable file transfers."),(0,i.kt)("h3",{id:"how-do-i-remove-a-large-number-of-files"},"How do I remove a large number of files?"),(0,i.kt)("p",null,"There are two methods to remove a large number of files that are much faster than using ",(0,i.kt)("inlineCode",{parentName:"p"},"rm -rf"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://rsync.samba.org/"},"RSync"),"\nLet us say that we want to delete a directory called ",(0,i.kt)("inlineCode",{parentName:"li"},"this_directory"),".\nFirst, create an empty directory.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir empty_dir\n")),(0,i.kt)("p",null,"Next, run this rsync command to delete the directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -aP --delete empty_dir/ this_directory/\n")),(0,i.kt)("p",null,"This should delete the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"this_directory"),".\nLastly, run ",(0,i.kt)("inlineCode",{parentName:"p"},"rm -r empty_directory")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rm -r this_directory")," to remove both the empty directories.\n2. Using Perl\nIf we want to delete a directory ",(0,i.kt)("inlineCode",{parentName:"p"},"this_directory")," with a large number of files, we first enter the directory with ",(0,i.kt)("inlineCode",{parentName:"p"},"cd this_directory"),", after which we can run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"perl -e 'for(<*>){((stat)[9]<(unlink))}'\n")),(0,i.kt)("p",null,"This will delete all the files inside the directory.\nLastly, to delete the now-empty directory, run "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ..; rm -r this_directory\n")),(0,i.kt)("h4",{id:"comparison-of-the-two-approaches"},"Comparison of the two approaches"),(0,i.kt)("p",null,"To delete a test batch of 10,000 files the RSync approach takes 0.136s of real time, while Perl takes 0.0169s.\nIn comparison, ",(0,i.kt)("inlineCode",{parentName:"p"},"rm -rf")," requires at least 0.140s of real time to delete the files, and it becomes considerably slower as the number of files increases.\nThe benefit of using RSync over Perl despite it being slower is that RSync shows progress for the operation."),(0,i.kt)("h4",{id:"warning"},"Warning"),(0,i.kt)("p",null,"Please exercise caution while deleting files, as it might not be possible to restore them once deleted. Make sure that the files within the directory being deleted are definitely unnecessary."),(0,i.kt)("h3",{id:"how-do-i-selectively-delete-files"},"How do I selectively delete files?"),(0,i.kt)("p",null,"For selectively deleting files, the ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," command with the ",(0,i.kt)("inlineCode",{parentName:"p"},"-delete")," flag is very helpful.\nFor example, to delete all files with the extension ",(0,i.kt)("inlineCode",{parentName:"p"},".ext")," in a directory, we can use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"find . -name \u201c*.ext\u201d -delete\n")),(0,i.kt)("p",null,"Please note that this search is recursive, and files with this extension in subdirectories will be deleted as well.\n",(0,i.kt)("inlineCode",{parentName:"p"},"find")," has a number of other ways to match files, including time of creation, regular expressions and permissions among other things.\nYou can find out more about the parameters of ",(0,i.kt)("inlineCode",{parentName:"p"},"find")," by running the command ",(0,i.kt)("inlineCode",{parentName:"p"},"man find"),"."),(0,i.kt)("h4",{id:"warning-1"},"Warning"),(0,i.kt)("p",null,"Please exercise caution while deleting files, as it might not be possible to restore them once deleted. Make sure that the files within the directory being deleted are definitely unnecessary."))}m.isMDXComponent=!0}}]);