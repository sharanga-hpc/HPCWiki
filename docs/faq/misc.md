---
sidebar_position: 9
sidebar_label: "Miscellaneous"
hide_table_of_contents: true
hide_title: true
pagination_next : null
pagination_prev : null
title: "Miscellaneous"
---

## Miscellaneous

### How do I acknowledge the high performance computing facility in my presentations or publications?

We request the users to kindly use the following text to acknowledge the HPC resources.

> The authors gratefully acknowledge the computing time provided on the high performance computing facility, Sharanga, at the Birla Institute of Technology and Science - Pilani, Hyderabad Campus.

<!-- ### I am a student of the institute. Can I contribute to the HPC facility?
Yes, you can contribute to the HPC facility. Please contact us at [hpc@hyderabad.bits-pilani.ac.in](mailto:hpc@hyderabad.bits-pilani.ac.in). -->

### Is HyperThreading enabled on the compute nodes?

`HyperThreading`, also known as `Simultaneous multithreading` by AMD is disabled on the compute nodes as we observed several performance regressions and compatibility issues.

### Can I launch HTML files on the cluster?

It is well-known that the browser applications consume a lot of system memory and may hamper the performance of applications. Due to this, we have disabled the ability to forward X Server on the nodes. Therefore, it is not possible to launch HTML files on the cluster.

### Can I launch GUI applications such as gnuplot?

Similar to the browser applications, GUI applications (like gnuplot) too consume a lot of memory. Under heavy load, these applications may result in out of memory and disconnection logs. Therefore, we have disabled GUI on the cluster.