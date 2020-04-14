---
title: Concepts
introduction: Some principal concepts
order: 3
---

## Autotuning
<a name="Autotuning"></a>
Thank you for making it this far! Until this point we have not explained how 
anything works or why. Before you go into production we’d like to highlight 
the system components so you understand what is running on your hardware.

It’s worth mentioning - as you might have noticed by now - you’ll always 
interact with redpanda through `rpk`. `rpk` is the Redpanda Keeper; a command 
line interface to automate all tasks related to managing, running and upgrading 
your system. We also leverage `systemd` to make it even simpler to run and 
operate redpanda as a service. This means you’ll also find yourself using
`systemctl` to start and stop `redpanda`, as well as checking its status. 
You can also manage, filter and rotate the logs emitted by redpanda through 
journalctl.

```
rpk --help             # interact with the server & machine
journalctl -u redpanda # see logs
```



## Disk
<a name="Disk"></a>
To get the best IO performance, we recommend the data directory 
(/var/lib/redpanda) to reside on an XFS partition in a local NVMe SSD - redpanda
can drive your SSD at maximum throughput at all times. Using networked block 
devices is strongly discouraged, because of their inherent performance 
limitations.

Furthermore, redpanda relies on XFS due to its use of sparse filesystem support
to flush concurrent, non-overlapping pages. Although other filesystems might
work, they may have limitations that prevent you from getting the most value
out of your hardware. For multi-disk setups we recommend using Raid-0 with
XFS on top. Future releases will manage multi-disk virtualization without
user involvement.

While monitoring, you might notice that the filesystem file sizes might jump 
around. This is expected behavior as we use internal heuristics to expand the 
filesystem metadata eagerly when we determine it would improve performance for 
a sequence of operations, to amortize the cost of synchronization events. 
We note that `redpanda` uses DMA (Direct Memory Access) for all its disk IO.


## Network
<a name="Network"></a>
Modern NICs can drive multi gigabit traffic to hosts. rpk probes the hardware 
(taking into account the number of CPUs, etc) and automatically chooses the 
best setting to drive high throughput traffic to the machine. The modes are all 
but cpu0,  cpu0 + Hyper Thread sibling, or distributed across all cores, in 
addition to other settings like backlog and max sockets, regardless if the NIC 
is bonded or not. The user is never aware of any of these low level settings, 
and in most production scenarios it is usually always distributed across all 
cores. 

This is to distribute the cost of interrupt processing evenly among all cores.


## CGROUPS
<a name="CGROUPS"></a>
To be able to run at peak performance for extended periods, we leverage cgroups
to isolate the redpanda processes, shielding them from “noisy neighbors”: 
processes running alongside redpanda which demand sharing resources that 
adversely affect performance. 

We leverage `systemd` slices, instructing the kernel to strongly prefer 
evicting other processes before evicting our process’ memory, as well as to 
reserve IO quotas and CPU time so that even in some adversarial situations 
we still deliver predictable latency and throughput to end users. 


## CPU
<a name="CPU"></a>
Oftentimes, the default CPU configuration is prioritized for end-user-typical 
use cases such as non-cpu-intensive desktop applications and optimizing power 
usage. 

Redpanda disables all power-saving modes and ensures that the CPU is configured 
for predictable latency at all times. We designed redpanda to drive machines 
around ~90% utilization and still give the user predictable low latency results. 


## Memory
<a name="Memory"></a>
Swapping is prevented so that Redpanda is never swapped out of memory. By 
design, `redpanda` allocates all the available memory 
(aside for some small OS reservation) upfront, partitioning the allocated 
memory between all cores and pinning such memory to the specified NUMA domain 
(specific CPU socket). We do this to have predictable memory allocations without
having to go to the system memory, ensuring predictable latency. 


## Monitoring 
<a name="Monitoring"></a>
Redpanda comes with a built in Prometheus metrics endpoint on 
`http://&lt;host>:9644/metrics`

Redpanda ships with an additional `systemd` service which executes periodically 
and reports resource usage and configuration data to Vectorized's metrics API. 

It is enabled by default, and the data is anonymous. If you'd like us to be able
to identify your cluster's data, so that we can monitor it and alert you of 
possible issues, please set the `organization` (your company's domain) and 
`cluster_id` (usually your team's or project's name) configuration fields. 

For example:


```
rpk config set organization 'vectorized.io'
rpk config set cluster_id 'us-west-2'
```


To opt out of all metrics reporting, set `rpk.enable_usage_stats` to 
false via `rpk`


```
rpk config set rpk.enable_usage_stats false
```


Well Known IO

Redpanda relies on its own disk IO scheduler, and by default tells the kernel 
to use the `noop` scheduler. To give the users near optimal performance by 
default, `rpk` comes with an embedded database of IO settings for well-known 
cloud computers, which are specific combinations of CPUs, SSD types, and VM 
sizes. It is not the same to run software on 4 VCPUs than it is to run on an 
EC2 i3.metal with 96 physical cores. Often,when trying to scale rapidly to meet 
demands, product teams will not have the time to measure IO throughput and 
latency before starting every new instance (via `rpk iotune`) and instead 
need resources right now. To meet this demand,, redpanda will attempt to 
predict the best known settings for VM cloud types.

We still encourage users to run `rpk iotune` for production workloads, but we’ll
do our best to start with near optimal settings for popular machines types we 
have measured. It’s important to mention that this doesn’t need to be done each 
time redpanda is started. rpk iotune’s output parameters are written to a file 
which can be saved and reused in nodes running on the same type of hardware.

Currently, we only have well-known-types for AWS (GCP and Azure VM types support
is coming soon). Upon startup, rpk will try to detect the current cloud and 
instance type via the cloud’s metadata API, setting the correct iotune 
properties if the detected setup is known apriori.

If access to the metadata API isn’t allowed from the instance, you can also hint
the desired setup by passing the --well-known-io flag to rpk start with the 
cloud vendor, VM type and storage type surrounded by quotes and separated 
by colons:


```
rpk start --well-known-io 'aws:l3.xlarge:default'
```


It can also be specified in the redpanda YAML configuration file, under the 
rpk object:


```
rpk:
  well_known_io: 'gcp:c2-standard-16:nvme'
```


If well-known-io is specified in the config file, and as a flag, the value 
passed with the flag will take precedence.

In the case where a certain cloud vendor, machine type or storage type isn’t 
found, or if the metadata isn’t available and no hint is given, rpk will print 
a warning pointing out the issue and continue using the default values.

rpk Modes

Usability is paramount to us. We know the delta from downloading and running 
something from the internet and running in production is large.  `redpanda` 
relies on interrupt coalescing, interrupt distribution, noop IO scheduling, 
CPU frequency scaling (performance governor), NIC multi-queue setup, memory 
ocking and real-time scheduling. Not to mention measuring the IO throughput to 
disk, etc and keeping them updated with every release. 

While these settings exist to give the users predictable low latency, high 
throughput, high resource utilization, etc, they are not good settings for 
developer’s laptops. We keep a set of auto-tunables in big 
groups: `rpk mode developer` and `rpk mode production.`

These commands are idempotent, they’re safe to run multiple times. Some settings
might require restart of redpanda, others are injected into the runtime settings
of the kernel and can take effect immediately **if followed **by 
a `rpk tune all.` Users can also review and edit redpanda.yaml and enable or 
disable any individual setting manually, or to enable experimental flags.
