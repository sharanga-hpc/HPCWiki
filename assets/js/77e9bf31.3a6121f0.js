"use strict";(self.webpackChunkhp_cwiki=self.webpackChunkhp_cwiki||[]).push([[614],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6595:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3,sidebar_label:"Shared CPU",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null},s=void 0,p={unversionedId:"faq/jobs/shared",id:"faq/jobs/shared",title:"shared",description:"How to schedule a shared memory CPU parallel job on Slurm?",source:"@site/docs/faq/jobs/shared.md",sourceDirName:"faq/jobs",slug:"/faq/jobs/shared",permalink:"/docs/faq/jobs/shared",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Shared CPU",hide_table_of_contents:!0,hide_title:!0,pagination_next:null,pagination_prev:null},sidebar:"defaultSidebar"},m={},u=[{value:"How to schedule a shared memory CPU parallel job on Slurm?",id:"how-to-schedule-a-shared-memory-cpu-parallel-job-on-slurm",level:2},{value:"Example of a job script <code>job.sh</code> using Modulefiles",id:"example-of-a-job-script-jobsh-using-modulefiles",level:4},{value:"Example of a job script <code>job.sh</code> using Spack",id:"example-of-a-job-script-jobsh-using-spack",level:4}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-schedule-a-shared-memory-cpu-parallel-job-on-slurm"},"How to schedule a shared memory CPU parallel job on Slurm?"),(0,o.kt)("p",null,"Users can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"sbatch")," command provided by Slurm to submit a job script. Note that, for loading the required packages one can use either ",(0,o.kt)("inlineCode",{parentName:"p"},"Modulefiles")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Spack"),". In the following we have shown example job scripts using ",(0,o.kt)("inlineCode",{parentName:"p"},"Modulefiles")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Spack"),"."),(0,o.kt)("h4",{id:"example-of-a-job-script-jobsh-using-modulefiles"},"Example of a job script ",(0,o.kt)("inlineCode",{parentName:"h4"},"job.sh")," using Modulefiles"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos=""}',linenos:'""}'},'   #!/bin/bash\n   #SBATCH -p compute\n   #SBATCH -N 1\n   #SBATCH -c 4\n   #SBATCH --mem 512M\n   #SBATCH -t 4-2:23 # time (D-HH:MM)\n   #SBATCH --job-name="hello_test"\n   #SBATCH -o slurm.%j.out\n   #SBATCH -e slurm.%j.err\n   #SBATCH --mail-user=<username>@hyderabad.bits-pilani.ac.in\n   #SBATCH --mail-type=ALL\n   export OMP_NUM_THREADS=${SLURM_CPUS_PER_TASK}\n   module load openmpi-3.1.6-gcc-9.3.0\n   module load parmetis-4.0.3-gcc-9.3.0\n   module load openblas-0.3.10-gcc-9.3.0\n   module load hdf5-1.10.6-gcc-9.3.0\n   module load petsc-3.13.1-gcc-9.3.0\n   srun ./execname\n')),(0,o.kt)("p",null,"To submit the above job script use the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sbatch job.sh\n")),(0,o.kt)("p",null,"If you wish to test your job script and want to find when it is estimated to run, please run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sbatch --test-only job.sh\n")),(0,o.kt)("p",null,"Note that this does not actually submit the job. A detailed explanation for each code snippet of the job script ",(0,o.kt)("inlineCode",{parentName:"p"},"job.sh")," is given below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos=""}',linenos:'""}'},"   #!/bin/bash\n")),(0,o.kt)("p",null,"This is the standard convention to let the linux shell know what interpreter to run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos="" startFrom="last"}',linenos:'""',startFrom:'"last"}'},"   #SBATCH -p compute\n   #SBATCH -N 1\n   #SBATCH -c 4\n")),(0,o.kt)("p",null,"Configuration variables for Slurm start with ",(0,o.kt)("inlineCode",{parentName:"p"},"SBATCH"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-p")," refers to the partition to be used by Slurm. Sharanga provides\ntwo partitions, namely, ",(0,o.kt)("inlineCode",{parentName:"p"},"compute")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"gpu"),". For jobs to be executed\nexclusively on CPUs, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"compute")," partition.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-N")," represents the number of nodes to be used. In the present\nexample, we are using $1$ node. Note that in pure ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenMP"),"\nimplementations, the number of nodes is always set to $1$. However,\nif you are using hybrid parallel models such as ",(0,o.kt)("inlineCode",{parentName:"p"},"MPI+OpenMP"),", then\nthe number of nodes can be more than one.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-c")," represents the number of CPUs per task. For codes employing\nshared memory parallelism, users are requested to specify the number\nof threads as the number of compute cores required."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos="" startFrom="last"}',linenos:'""',startFrom:'"last"}'},'   #SBATCH --mem 512M\n   #SBATCH -t 4-2:23 # time (D-HH:MM)\n   #SBATCH --job-name="hello_test"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--mem")," represents the maximum amount of required memory. Here, we\nare requesting $512$ Megabytes of memory. Note that Slurm\nprioritises lower memory jobs over higher memory jobs in the queue.\nThis may result in delayed execution of higher memory jobs.\nTherefore, users are requested to give accurate and desirable memory\nlimits.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-t")," represents the maximum wall clock time the job requires. Here,\nwe are requesting $4$ days, $2$ hours and $23$ minutes. Slurm\nprioritises shorter time limit jobs over longer time limit jobs in\nthe queue. This may result in delayed execution of longer time limit\njobs. Therefore, users are requested to give accurate and desirable\ntime limits. Note that setting values greater than $168$ hours will\nresult in the termination of the job by Slurm automatically.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--job-name")," represents the name of the job."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos="" startFrom="last"}',linenos:'""',startFrom:'"last"}'},"   #SBATCH -o slurm.%j.out\n   #SBATCH -e slurm.%j.err\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-o")," represents ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-e")," represents ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr"),"."))),(0,o.kt)("p",null,"We are instructing Slurm to redirect ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," of the executed application to disk. For example, if your ",(0,o.kt)("inlineCode",{parentName:"p"},"jobid")," is $121$, then ",(0,o.kt)("inlineCode",{parentName:"p"},"slurm.121.out")," would contain the normal output of the application, while ",(0,o.kt)("inlineCode",{parentName:"p"},"slurm.121.err")," would contain the error output of the application. These files will be stored in the directory, where the jobs were launched from."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos="" startFrom="last"}',linenos:'""',startFrom:'"last"}'},"   #SBATCH --mail-user=<username>@hyderabad.bits-pilani.ac.in\n   #SBATCH --mail-type=ALL\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"\u2013mail-user")," represents the email address to which job events are to\nbe delivered.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"\u2013mail-type")," represents the type of events to be logged. Valid type\nvalues are NONE, BEGIN, END, FAIL, REQUEUE, ALL (equivalent to\nBEGIN, END, FAIL, REQUEUE, and STAGE","_","OUT), STAGE","_","OUT (burst buffer\nstage out and teardown completed), TIME","_","LIMIT, TIME","_","LIMIT","_","90\n(reached 90 percent of time limit), TIME","_","LIMIT","_","80 (reached 80\npercent of time limit) and TIME","_","LIMIT","_","50 (reached 50 percent of\ntime limit). Here, we have specified the event type to be ",(0,o.kt)("inlineCode",{parentName:"p"},"ALL"),"."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos="" startFrom="last"}',linenos:'""',startFrom:'"last"}'},"   export OMP_NUM_THREADS=${SLURM_CPUS_PER_TASK}\n")),(0,o.kt)("p",null,"The above command sets the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"$OMP_NUM_THREADS"),", which specifies the number of threads to be used in parallel regions of the ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENMP")," code. Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"$SLURM_CPUS_PER_TASK")," is a Slurm defined variable that is automatically set to the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," directive."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos="" startFrom="last"}',linenos:'""',startFrom:'"last"}'},"   module load openmpi-3.1.6-gcc-9.3.0\n   module load parmetis-4.0.3-gcc-9.3.0\n   module load openblas-0.3.10-gcc-9.3.0\n   module load hdf5-1.10.6-gcc-9.3.0\n   module load petsc-3.13.1-gcc-9.3.0\n")),(0,o.kt)("p",null,"We are using Modulefiles to set the environment needed to run our application. The example application depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"PETSc")," and also has transitive dependencies ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenMPI"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ParMETIS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenBLAS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HDF5"),". We are using ",(0,o.kt)("inlineCode",{parentName:"p"},"gcc 9.3.0")," compiled libraries for the application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos="" startFrom="last"}',linenos:'""',startFrom:'"last"}'},"   srun ./execname\n")),(0,o.kt)("p",null,"Finally, we are using ",(0,o.kt)("inlineCode",{parentName:"p"},"srun")," to start the execution of the application. This is somewhat analogous to ",(0,o.kt)("inlineCode",{parentName:"p"},"mpirun"),". Users are requested ",(0,o.kt)("strong",{parentName:"p"},"not")," to use ",(0,o.kt)("inlineCode",{parentName:"p"},"mpirun")," and instead use ",(0,o.kt)("inlineCode",{parentName:"p"},"srun"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"srun")," takes care of the allocation and efficient management of resources via Slurm automatically."),(0,o.kt)("h4",{id:"example-of-a-job-script-jobsh-using-spack"},"Example of a job script ",(0,o.kt)("inlineCode",{parentName:"h4"},"job.sh")," using Spack"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos=""}',linenos:'""}'},'   #!/bin/bash\n   #SBATCH -p compute\n   #SBATCH -N 1\n   #SBATCH -c 4\n   #SBATCH --mem 512M\n   #SBATCH -t 4-2:23 # time (D-HH:MM)\n   #SBATCH --job-name="hello_test"\n   #SBATCH -o slurm.%j.out\n   #SBATCH -e slurm.%j.err\n   #SBATCH --mail-user=<username>@hyderabad.bits-pilani.ac.in\n   #SBATCH --mail-type=ALL\n   export OMP_NUM_THREADS=${SLURM_CPUS_PER_TASK}\n   spack load petsc@3.13.1%gcc@9.3.0\n   srun ./execname\n')),(0,o.kt)("p",null,"To submit the above job script use the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sbatch job.sh\n")),(0,o.kt)("p",null,"If you wish to test your job script and want to find when it is estimated to run, please run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sbatch --test-only job.sh\n")),(0,o.kt)("p",null,"Note that this does not actually submit the job. A detailed explanation for each code snippet of the job script ",(0,o.kt)("inlineCode",{parentName:"p"},"job.sh")," is given below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos=""}',linenos:'""}'},"   #!/bin/bash\n")),(0,o.kt)("p",null,"This is the standard convention to let the linux shell know what interpreter to run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos="" startFrom="last"}',linenos:'""',startFrom:'"last"}'},"   #SBATCH -p compute\n   #SBATCH -N 1\n   #SBATCH -c 4\n")),(0,o.kt)("p",null,"Configuration variables for Slurm start with ",(0,o.kt)("inlineCode",{parentName:"p"},"SBATCH"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-p")," refers to the partition to be used by Slurm. Sharanga provides\ntwo partitions, namely, ",(0,o.kt)("inlineCode",{parentName:"p"},"compute")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"gpu"),". For jobs to be executed\nexclusively on CPUs, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"compute")," partition.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-N")," represents the number of nodes to be used. In the present\nexample, we are using $1$ node. Note that in pure ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenMP"),"\nimplementations, the number of nodes is always set to $1$. However,\nif you are using hybrid parallel models such as ",(0,o.kt)("inlineCode",{parentName:"p"},"MPI+OpenMP"),", then\nthe number of nodes can be more than one.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-c")," represents the number of CPUs per task. For codes employing\nshared memory parallelism, users are requested to specify the number\nof threads as the number of compute cores required."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos="" startFrom="last"}',linenos:'""',startFrom:'"last"}'},'   #SBATCH --mem 512M\n   #SBATCH -t 4-2:23 # time (D-HH:MM)\n   #SBATCH --job-name="hello_test"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--mem")," represents the maximum amount of required memory. Here, we\nare requesting $512$ Megabytes of memory. Note that Slurm\nprioritises lower memory jobs over higher memory jobs in the queue.\nThis may result in delayed execution of higher memory jobs.\nTherefore, users are requested to give accurate and desirable memory\nlimits.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-t")," represents the maximum wall clock time the job requires. Here,\nwe are requesting $4$ days, $2$ hours and $23$ minutes. Slurm\nprioritises shorter time limit jobs over longer time limit jobs in\nthe queue. This may result in delayed execution of longer time limit\njobs. Therefore, users are requested to give accurate and desirable\ntime limits. Note that setting values greater than $168$ hours will\nresult in the termination of the job by Slurm automatically.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--job-name")," represents the name of the job."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos="" startFrom="last"}',linenos:'""',startFrom:'"last"}'},"   #SBATCH -o slurm.%j.out\n   #SBATCH -e slurm.%j.err\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-o")," represents ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-e")," represents ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr"),"."))),(0,o.kt)("p",null,"We are instructing Slurm to redirect ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," of the executed application to disk. For example, if your ",(0,o.kt)("inlineCode",{parentName:"p"},"jobid")," is $121$, then ",(0,o.kt)("inlineCode",{parentName:"p"},"slurm.121.out")," would contain the normal output of the application, while ",(0,o.kt)("inlineCode",{parentName:"p"},"slurm.121.err")," would contain the error output of the application. These files will be stored in the directory, where the jobs were launched from."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos="" startFrom="last"}',linenos:'""',startFrom:'"last"}'},"   #SBATCH --mail-user=<username>@hyderabad.bits-pilani.ac.in\n   #SBATCH --mail-type=ALL\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"\u2013mail-user")," represents the email address to which job events are to\nbe delivered.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"\u2013mail-type")," represents the type of events to be logged. Valid type\nvalues are NONE, BEGIN, END, FAIL, REQUEUE, ALL (equivalent to\nBEGIN, END, FAIL, REQUEUE, and STAGE","_","OUT), STAGE","_","OUT (burst buffer\nstage out and teardown completed), TIME","_","LIMIT, TIME","_","LIMIT","_","90\n(reached 90 percent of time limit), TIME","_","LIMIT","_","80 (reached 80\npercent of time limit) and TIME","_","LIMIT","_","50 (reached 50 percent of\ntime limit). Here, we have specified the event type to be ",(0,o.kt)("inlineCode",{parentName:"p"},"ALL"),"."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos="" startFrom="last"}',linenos:'""',startFrom:'"last"}'},"   export OMP_NUM_THREADS=${SLURM_CPUS_PER_TASK}\n")),(0,o.kt)("p",null,"The above command sets the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"$OMP_NUM_THREADS"),", which specifies the number of threads to be used in parallel regions of the ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENMP")," code. Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"$SLURM_CPUS_PER_TASK")," is a Slurm defined variable that is automatically set to the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," directive."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos="" startFrom="last"}',linenos:'""',startFrom:'"last"}'},"   spack load petsc@3.13.1%gcc@9.3.0\n")),(0,o.kt)("p",null,"We are using Spack to set the environment needed to run our application. Our example application depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"PetSc")," and has transitive dependencies ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenMPI"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ParMETIS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenBLAS")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HDF5"),". We are using ",(0,o.kt)("inlineCode",{parentName:"p"},"gcc 9.3.0")," compiled libraries for our application. An advantage of Spack over Modulefiles is that Spack handles all the dependencies automatically in one single command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-{.bash",metastring:'linenos="" startFrom="last"}',linenos:'""',startFrom:'"last"}'},"   srun ./execname\n")),(0,o.kt)("p",null,"Finally, we are using ",(0,o.kt)("inlineCode",{parentName:"p"},"srun")," to start the execution of the application. This is somewhat analogous to ",(0,o.kt)("inlineCode",{parentName:"p"},"mpirun"),". Users are requested ",(0,o.kt)("strong",{parentName:"p"},"not")," to use ",(0,o.kt)("inlineCode",{parentName:"p"},"mpirun")," and instead use ",(0,o.kt)("inlineCode",{parentName:"p"},"srun"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"srun")," takes care of the allocation and efficient management of resources via Slurm automatically."))}c.isMDXComponent=!0}}]);