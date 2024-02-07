---
sidebar_position: 4
sidebar_label: "Storage"
hide_table_of_contents: true
hide_title: true
pagination_next : null
pagination_prev : null
title: "Storage"
---

## Storage

### How much storage space do I have? 

Users are provided with 40GiB of storage space in their `$HOME` directory and unlimited storage space (subject to the availability) in their `$SCRATCH` directory. Please note that files stored in `$SCRATCH` directory are deleted after 15 days from their last modification date.

### How to find the current usage of my storage quota in $HOME?

Users can obtain the current usage of their storage quota in $HOME by typing the following command in the terminal.

```bash
$ usertools quota info
```

An example output would be:

```bash
Username: nischay
Quota Exceeded: No
Total Storage Alloted: 40 GiB
Total Storage Available: 37.86 GiB (94.65 %)
Total Storage Consumed: 2.14 GiB (5.35 %)
```

### I am getting the message "Disk Quota Exceeded". What should I do? 

To ensure fair share of storage resources on the HPC facility, users have limited disk quota for their `$HOME` directory. Once the storage space exceeds the allotted quota, users might receive the above message. To resolve this issue, we request the users to either shift files from their `$HOME` directory to `$SCRATCH` or to their personal machine.

### Can I increase my storage quota?

Users are provided with 40GiB of storage quota for their home directories. However, users can request for more storage space on a case by case basis by contacting the HPC facility. Please include a proper justification for the request.
### How to find the files and directories that are occupying significant space in home directory? 

The `du` command lists the size of files/folders.

```bash
$ du
```

For example, if we want to view the top 20 files and directories occupying the most space in `$HOME` directory, then type the following command:

```bash
$ du -ah ~/ 2>/dev/null | sort -n -r | head -n 20
```

However, some softwares and libraries create hidden directories in the home directory. To see their data usage, you can run the following command:

```bash
$ du -sh ~/.??*
```

### Is there any backup available for my data?

Currently, we maintain daily backups of the `$HOME` directory for a period of 30 days. This is subjected to the HPC policy and also the availability of storage space on the backup drives. In case a user has accidentally lost any of their data, they may contact the system administrator at [hpc@hyderabad.bits-pilani.ac.in](mailto:hpc@hyderabad.bits-pilani.ac.in) for a possible restoration.

Please note that `$SCRATCH` directory is **not** backed up by the system and therefore not restorable in case of any loss of data. Users are advised to maintain their **own** backups as the HPC facility is not responsible for the loss of users data.

