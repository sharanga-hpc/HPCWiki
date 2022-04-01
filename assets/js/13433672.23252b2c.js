"use strict";(self.webpackChunkhp_cwiki=self.webpackChunkhp_cwiki||[]).push([[28],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6579:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_position:3,sidebar_label:"Login",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null},s=void 0,p={unversionedId:"faq/login",id:"faq/login",title:"login",description:"Login and Accounts",source:"@site/docs/faq/login.md",sourceDirName:"faq",slug:"/faq/login",permalink:"/docs/faq/login",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Login",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null},sidebar:"defaultSidebar"},d={},u=[{value:"Login and Accounts",id:"login-and-accounts",level:2},{value:"How to generate an SSH key pair?",id:"how-to-generate-an-ssh-key-pair",level:3},{value:"On Windows: Using PuTTY",id:"on-windows-using-putty",level:4},{value:"On Windows: Using Windows 10 OpenSSH Client",id:"on-windows-using-windows-10-openssh-client",level:4},{value:"On macOS",id:"on-macos",level:4},{value:"On Linux",id:"on-linux",level:4},{value:"How to login to the HPC facility?",id:"how-to-login-to-the-hpc-facility",level:3},{value:"On Windows: Using PuTTY",id:"on-windows-using-putty-1",level:4},{value:"On Windows: Using Windows 10 OpenSSH Client",id:"on-windows-using-windows-10-openssh-client-1",level:4},{value:"On macOS",id:"on-macos-1",level:4},{value:"On Linux",id:"on-linux-1",level:4},{value:"How do I add another SSH key to my account for remote acccess?",id:"how-do-i-add-another-ssh-key-to-my-account-for-remote-acccess",level:3},{value:"My ssh connection disconnects with &quot;Write failed: Broken pipe&quot;.",id:"my-ssh-connection-disconnects-with-write-failed-broken-pipe",level:3},{value:"On Windows: Using PuTTY",id:"on-windows-using-putty-2",level:4},{value:"On Windows: Using Windows 10 OpenSSH Client",id:"on-windows-using-windows-10-openssh-client-2",level:4},{value:"Linux and macOS",id:"linux-and-macos",level:4}],c={toc:u};function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"login-and-accounts"},"Login and Accounts"),(0,o.kt)("h3",{id:"how-to-generate-an-ssh-key-pair"},"How to generate an SSH key pair?"),(0,o.kt)("p",null,"An SSH key pair consists of two keys, namely, the public key and the private key. The public key is stored in the SSH directory of the HPC facility, while the private key remains with the user. Users are requested to safeguard the private key carefully. Note that the file name of the public key is same as the private key except that the public key has a file extension ",(0,o.kt)("inlineCode",{parentName:"p"},".pub"),". For example, if the file name of the SSH private key is ",(0,o.kt)("inlineCode",{parentName:"p"},"id_rsa"),", then the file name of the public key would be ",(0,o.kt)("inlineCode",{parentName:"p"},"id_rsa.pub"),"."),(0,o.kt)("h4",{id:"on-windows-using-putty"},"On Windows: Using PuTTY"),(0,o.kt)("p",null,"Users are recommended to use PuTTY to access SSH in Windows. The installer for PuTTY can be downloaded from ",(0,o.kt)("a",{parentName:"p",href:"https://www.puttygen.com/download-putty"},"this")," website. Within this link, please choose the MSI 64-bit ('Windows Installer for putty') version of the package."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once installation is complete, go to\n",(0,o.kt)("inlineCode",{parentName:"p"},"Start Menu -> All Programs -> PuTTYgen")," and then launch the\napplication. Figure below shows the screenshot of the launched\napplication.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For the type of key to generate, please select RSA and click\n",(0,o.kt)("strong",{parentName:"p"},"Generate"),", and start moving the mouse within the Window. Putty\nuses the mouse movements to collect randomness. Note that on older\nmachines, please select SSH-2 (RSA) if RSA is not available.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once the progress bar becomes full, the actual key generation takes\nplace. This process may take few seconds to several minutes. When\ncomplete, the public key should appear in the Window. You can\nspecify a passphrase for the key (Optional).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Under Actions click on the ",(0,o.kt)("strong",{parentName:"p"},"Save public key")," and ",(0,o.kt)("strong",{parentName:"p"},"Save private\nkey")," to save your public and private keys respectively.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Please share the public key with the system administrator, who will\ncopy it to the SSH directory of the HPC facility."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"PuTTY Key Generator.",src:n(7401).Z,width:"479",height:"471"})),(0,o.kt)("h4",{id:"on-windows-using-windows-10-openssh-client"},"On Windows: Using Windows 10 OpenSSH Client"),(0,o.kt)("p",null,"Microsoft, from ",(0,o.kt)("strong",{parentName:"p"},"Windows 10")," build ",(0,o.kt)("strong",{parentName:"p"},"1803")," and onwards have shipped OpenSSH Client on all Windows 10 PCs. Users can use the OpenSSH ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," command to generate their SSH keys. The following steps will help in generating the SSH keys."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Press ",(0,o.kt)("inlineCode",{parentName:"p"},"Windows Key + R")," to open the Windows Run Prompt.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd")," and press ENTER.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," in the console and press ENTER.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In order to generate the SSH key pair and store them securely,\nWindows may prompt you to enter a directory where the key pair will\nbe stored. You may press Enter to choose the default location\nprovided.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, you'll be prompted to enter your passphrase for the key\n(Optional).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once the process is completed, two files will be generated along\nwith the ",(0,o.kt)("inlineCode",{parentName:"p"},"SHA256")," fingerprint. The key's random art image will also\nbe displayed on-screen. A sample screenshot is shown in Figure\nbelow. Note that the generated image and\nfingerprint will differ from system to system.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Please share the public key with the system administrator, who will\ncopy it to the SSH directory of the HPC facility."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Windows 10 Key Random Art.",src:n(3872).Z,width:"746",height:"494"})),(0,o.kt)("h4",{id:"on-macos"},"On macOS"),(0,o.kt)("p",null,"Users are recommended to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Terminal")," application to generate ssh key pairs. It is located in the utilities which can be accessed using the Finder."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open Terminal and enter ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-keygen -t rsa"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This starts the key generation process. The utility may also prompt\nyou to indicate where to store the key pair. Press ENTER to accept\nthe default location.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, you'll be prompted to enter your passphrase for the key\n(Optional).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once the process is completed, two files will be generated along\nwith the ",(0,o.kt)("inlineCode",{parentName:"p"},"SHA256")," fingerprint. The key's random art image will be\ndisplayed on-screen. A sample screenshot generated on a mac system\nis shown in Figure below. Note that the generated image and\nfingerprint will differ from system to system.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Please share the public key with the system administrator, who will\ncopy it to the SSH directory of the HPC facility."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"macOS Key Random Art.",src:n(9083).Z,width:"697",height:"318"})))),(0,o.kt)("h4",{id:"on-linux"},"On Linux"),(0,o.kt)("p",null,"To generate ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," keys on a Linux based operating system,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open a Terminal or Console and enter ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-keygen -t rsa"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The utility will now prompt you to enter the location where to save\nthe key pair. Press ENTER to accept the default location.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, you'll be prompted to enter your passphrase for the key\n(Optional).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once the process is completed, two files will be generated along\nwith the ",(0,o.kt)("inlineCode",{parentName:"p"},"SHA256")," fingerprint. The key's random art image will also\nbe displayed on-screen. A sample screenshot generated on a linux\nsystem is shown in Figure below. Note that the generated image and\nfingerprint will differ from system to system.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Please share the public key with the system administrator, who will\ncopy it to the SSH directory of the HPC facility."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Linux Key Random Art.",src:n(773).Z,width:"583",height:"404"})),(0,o.kt)("h3",{id:"how-to-login-to-the-hpc-facility"},"How to login to the HPC facility?"),(0,o.kt)("p",null,"Users can securely access the HPC facility using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," protocol."),(0,o.kt)("h4",{id:"on-windows-using-putty-1"},"On Windows: Using PuTTY"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To launch PuTTY, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Start Menu -> All Programs -> PuTTY"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When the program starts, a window titled ",(0,o.kt)("strong",{parentName:"p"},"PuTTY configuration"),"\nshould open.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Under ",(0,o.kt)("strong",{parentName:"p"},"Connection")," please expand ",(0,o.kt)("strong",{parentName:"p"},"SSH"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Auth")," and a new configuration pane should open on the\nleft.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Under ",(0,o.kt)("inlineCode",{parentName:"p"},"Authentication Parameters"),", you will find a ",(0,o.kt)("strong",{parentName:"p"},"Browser"),"\nbutton. Click on it and select the file path of the Private SSH Key\nyou generated.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once the above process is completed, users can go back to\n",(0,o.kt)("strong",{parentName:"p"},"Session")," Category. This window has a configuration pane on the\nright containing ",(0,o.kt)("strong",{parentName:"p"},"Hostname (or IP address)")," field.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"hpc.bits-hyderabad.ac.in")," in the ",(0,o.kt)("strong",{parentName:"p"},"Hostname")," field and click\n",(0,o.kt)("strong",{parentName:"p"},"Open"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If this is the first time you are trying to login you might get a\nSecurity Alert. This is normal, and you should click ",(0,o.kt)("strong",{parentName:"p"},"Yes"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After the security alert, you should get a terminal window asking\nfor username. Type the ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," provided to you by the HPC team to\naccess the facility. If you have entered a ",(0,o.kt)("inlineCode",{parentName:"p"},"passphrase")," for your ssh\nkey pair, please type the password and press ENTER.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You should now be connected to the login node of the HPC facility."))),(0,o.kt)("p",null,"Alternatively, users can click on the ",(0,o.kt)("strong",{parentName:"p"},"Save")," button in the Session category to save the SSH configuration. Users can then quickly connect to the login node by simply loading their saved configuration."),(0,o.kt)("h4",{id:"on-windows-using-windows-10-openssh-client-1"},"On Windows: Using Windows 10 OpenSSH Client"),(0,o.kt)("p",null,"If you have already generated an SSH key pair using the OpenSSH Client, you can then directly access the login node by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Command Prompt"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Press ",(0,o.kt)("inlineCode",{parentName:"p"},"Windows Key + R")," to open the Windows Run Prompt.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd")," and press ENTER.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh <username>@hpc.bits-hyderabad.ac.in")," in the console and\npress ENTER. Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"<username>")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," provided to you by\nthe HPC team to access the facility. If you have entered a\n",(0,o.kt)("inlineCode",{parentName:"p"},"passphrase")," for your ssh key pair please type the password and\npress ENTER.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You should now be connected to the login node of the HPC facility."))),(0,o.kt)("h4",{id:"on-macos-1"},"On macOS"),(0,o.kt)("p",null,"Users are recommended to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Terminal")," application to login using ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh"),". It is located in the utilities, which can be accessed using the Finder."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open Terminal.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh <username>@hpc.bits-hyderabad.ac.in")," in the console and\npress ENTER. Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"<username>")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," provided to you by\nthe HPC team to access the facility. If you have entered a\n",(0,o.kt)("inlineCode",{parentName:"p"},"passphrase")," for your ssh key pair please type the password and\npress ENTER.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You should now be connected to the login node of the HPC facility."))),(0,o.kt)("h4",{id:"on-linux-1"},"On Linux"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open a Terminal or Console.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh <username>@hpc.bits-hyderabad.ac.in")," in the console and\npress ENTER. Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"<username>")," is the ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," provided to you by\nthe HPC team to access the facility. If you have entered a\n",(0,o.kt)("inlineCode",{parentName:"p"},"passphrase")," for your ssh key pair please type the password and\npress ENTER.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You should now be connected to the login node of the HPC facility."))),(0,o.kt)("h3",{id:"how-do-i-add-another-ssh-key-to-my-account-for-remote-acccess"},"How do I add another SSH key to my account for remote acccess?"),(0,o.kt)("p",null,"Users can add multiple SSH keys into their ",(0,o.kt)("inlineCode",{parentName:"p"},"authorized_keys")," file of the HPC facility."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open a terminal in the HPC facility.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"nano")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"vi")," open ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Append the contents of the new public key at the end of the file.\nPlease ensure that the entire content of the public key fits in one\nsingle line with no additional spaces in between. Note that, each\nline in this file represents $1$ ssh key pair.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Save the file and exit. You should now be able to connect from the\nnewly added machine."))),(0,o.kt)("p",null,"Note: You are requested to copy the ",(0,o.kt)("strong",{parentName:"p"},"public")," key of the key pair and not the ",(0,o.kt)("strong",{parentName:"p"},"private")," key. Public key can be identified easily with the ",(0,o.kt)("strong",{parentName:"p"},".pub")," file extension at the end of the the filename. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"id_rsa.pub")," refers to the public key and ",(0,o.kt)("inlineCode",{parentName:"p"},"id_rsa")," refers to the private key."),(0,o.kt)("h3",{id:"my-ssh-connection-disconnects-with-write-failed-broken-pipe"},'My ssh connection disconnects with "Write failed: Broken pipe".'),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," enforces a maximum idle time after last input from user. This is a security precaution to protect the account from unauthorized access. A user can override this setting by configuring the ",(0,o.kt)("inlineCode",{parentName:"p"},"KeepAlive")," directive, as explained below."),(0,o.kt)("h4",{id:"on-windows-using-putty-2"},"On Windows: Using PuTTY"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Launch ",(0,o.kt)("inlineCode",{parentName:"p"},"PuTTY")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"Start Menu -> All Programs -> PuTTY"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Connection"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the configuration pane on the left you should find an option\ncalled ",(0,o.kt)("inlineCode",{parentName:"p"},"Seconds between keepalive"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enter in ",(0,o.kt)("strong",{parentName:"p"},"seconds")," the amount of time you would want as maximum\nidle time."))),(0,o.kt)("h4",{id:"on-windows-using-windows-10-openssh-client-2"},"On Windows: Using Windows 10 OpenSSH Client"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open a file editor, preferably ",(0,o.kt)("inlineCode",{parentName:"p"},"Notepad"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Type the following text without the ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," symbol. Example shown is for\n300 seconds and users can change this value accordingly."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ Host *\n    ServerAliveInterval 300\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Save this file as ",(0,o.kt)("strong",{parentName:"p"},"config")," under\n",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\<your username>\\.ssh\\config"),"."))),(0,o.kt)("h4",{id:"linux-and-macos"},"Linux and macOS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open a ",(0,o.kt)("inlineCode",{parentName:"p"},"Terminal"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Using a file editor of your choice, type the following lines without\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," symbol. Example shown is for 300 seconds and users can\nchange this value accordingly."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ Host *\n    ServerAliveInterval 300\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Save this file as ",(0,o.kt)("strong",{parentName:"p"},"config")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/config"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make sure the file has ",(0,o.kt)("strong",{parentName:"p"},"644")," set as file system permission. If\nnot, users can run ",(0,o.kt)("inlineCode",{parentName:"p"},"chmod 644 ~/.ssh/config")," to set the file\npermissions."))))}m.isMDXComponent=!0},773:function(e,t,n){t.Z=n.p+"assets/images/OpenSSH-Key-Art-Linux-434e4533051efd16d6eff1c309846c75.png"},3872:function(e,t,n){t.Z=n.p+"assets/images/OpenSSH-Key-Art-Windows-c3b463effe2c0ccfa552f2929cce3238.png"},9083:function(e,t,n){t.Z=n.p+"assets/images/OpenSSH-Key-Art-macOS-e817ee351d7af08378551359a81dde80.png"},7401:function(e,t,n){t.Z=n.p+"assets/images/PuTTY-Windows-b18e6c49f903e543be68f27bb75cde75.png"}}]);