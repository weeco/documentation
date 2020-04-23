---
title: Doc
description: Doc
introduction: Doc
---
# Redpanda Setup Guide

Redpanda is a Kafka replacement for mission critical systems. This guide will
lead you through initial setup and testing.


# Quick Start - 60 Seconds 

The following oneliner should get you up and running on your linux laptop in seconds.
It is design to let you experiment with `redpanda` locally to get a feel for the system.
If you are planning on benchmarking locally, make sure to check out our
**Single Node Production Setup** section below

#### On Fedora/RedHat Systems

```
curl -s https://{{client_token}}:@packagecloud.io/install/repositories/vectorizedio/v/script.rpm.sh \
    | sudo bash && sudo dnf install redpanda -y && sudo systemctl start redpanda
```

#### On Debian Systems

```
curl -s https://{{client_token}}:@packagecloud.io/install/repositories/vectorizedio/v/script.deb.sh \
    | sudo bash && sudo apt install redpanda -y && sudo systemctl start redpanda
```

# Single Node Production Setup

Requirements:

- XFS Must be the filesystem for the data directory (/var/lib/redpanda/data)
- Ensure port 9092 - Kafka API - is open and can be reached

## **Step 1**: Install the binary

#### On Fedora/RedHat Systems

```
curl -s https://{{client_token}}:@packagecloud.io/install/repositories/vectorizedio/v/script.rpm.sh \ 
    | sudo bash && sudo dnf install redpanda -y
```

#### On Debian Systems

```
curl -s https://{{client_token}}:@packagecloud.io/install/repositories/vectorizedio/v/script.deb.sh \
    | sudo bash && sudo apt install redpanda -y
```


## **Step 2**: Tune the hardware & Linux Kernel

#### Automatically optimize the hardware

```
sudo rpk tune all
```

#### Optionally benchmark your SSD

`rpk` comes with a program to allow you to test the actual hardware you are about to use - note you
only need to run it once. For reference, a decent local NVMe SSD should yield around
1GB/s sustained writes. `iotune` will capture SSD wear and tear and give accurate measurements
of what your hardware is actually capable of delivering. It is recommended you run this before benchmarking. 
If you are on AWS, GCP or Azure, creating a new instance and upgrading to an image with a recent
Linux Kernel version is often the easiest way to work around bad devices.

```
sudo rpk iotune # takes 10mins
```

## **Step 3**: Profit!

```
sudo systemctl start redpanda
```

# Multi Node Production Setup

Running redpanda in a multi-node setup requires only one extra step per node. No
awk, grep or `command-line-fu` needed.

Requirements:

- XFS Must be the filesystem for the data directory (`/var/lib/redpanda/data`)
- The following ports must be open:
  - `33145` - Internal RPC Port - ensure your firewall allows node-to-node
    communication over TCP on this port
  - `9092` - Kafka API Port
  - `9644` - Prometheus & HTTP Admin port
- Allow outbound traffic to
  <code>[https://m.rp.vectorized.io](https://m.rp.vectorized.io)</code> - allows
  us to optimize code paths based on production use - see
  <strong>Autotuning</strong> section.

## <strong>Step 1</strong>: Install the binary

#### On Fedora/RedHat Systems

```
curl -s https://{{client_token}}:@packagecloud.io/install/repositories/vectorizedio/v/script.rpm.sh \
    | sudo bash && sudo dnf install redpanda -y
```

#### On Debian Systems

```
curl -s https://{{client_token}}:@packagecloud.io/install/repositories/vectorizedio/v/script.deb.sh \
    | sudo bash && sudo apt install redpanda -y
```

**Step 2: **Start the root node

To get started, choose one node in your cluster to be the root node. The root
node will start as a standalone node, and every other one will join it, forming
a cluster along the way.

For the root node we’ll choose 0 as its ID. --self tells the node which
interface address to bind to. Usually you want that to be its private IP.

```
sudo rpk config bootstrap --id 0 --self <ip> && \
sudo systemctl start redpanda-tuner redpanda
```

**Step 3: **Start the other nodes

For every other node, we just have to choose a unique integer id for it and let
it know where to reach the root node.

<table>
  <tr>
   <td><code>sudo rpk config bootstrap --id <unique id> \</code>
<p>
<code>  --self <private ip>                      \</code>
<p>
<code>  --ips <root node ip> &&                  \</code>
<p>
<code>sudo systemctl start redpanda-tuner redpanda</code>
   </td>
  </tr>
  <tr>
   <td>
   </td>
  </tr>
</table>

You can verify that the cluster is up and running by checking the logs:

```
journalctl -u redpanda
```

# Autotuning

Thank you for making it this far! Until this point we have not explained how
anything works or why. Before you go into production we’d like to highlight the
system components so you understand what is running on your hardware.

It’s worth mentioning - as you might have noticed by now - you’ll always
interact with redpanda through `rpk`. `rpk` is the Redpanda Keeper; a command
line interface to automate all tasks related to managing, running and upgrading
your system. We also leverage `systemd` to make it even simpler to run and
operate redpanda as a service. This means you’ll also find yourself using
`systemctl` to start and stop `redpanda`, as well as checking its status. You
can also manage, filter and rotate the logs emitted by redpanda through
journalctl.

```
rpk --help             # interact with the server & machine
journalctl -u redpanda # see logs
```

## Disk

To get the best IO performance, we recommend the data directory
(/var/lib/redpanda/data) to reside on an XFS partition in a local NVMe SSD -
redpanda can drive your SSD at maximum throughput at all times. Using networked
block devices is strongly discouraged, because of their inherent performance
limitations.

Furthermore, redpanda relies on XFS due to its use of sparse filesystem support
to flush concurrent, non-overlapping pages. Although other filesystems might
work, they may have limitations that prevent you from getting the most value out
of your hardware. For multi-disk setups we recommend using Raid-0 with XFS on
top. Future releases will manage multi-disk virtualization without user
involvement.

While monitoring, you might notice that the filesystem file sizes might jump
around. This is expected behavior as we use internal heuristics to expand the
filesystem metadata eagerly when we determine it would improve performance for a
sequence of operations, to amortize the cost of synchronization events. We note
that `redpanda` uses DMA (Direct Memory Access) for all its disk IO.

## Network

Modern NICs can drive multi gigabit traffic to hosts. rpk probes the hardware
(taking into account the number of CPUs, etc) and automatically chooses the best
setting to drive high throughput traffic to the machine. The modes are all but
cpu0, cpu0 + Hyper Thread sibling, or distributed across all cores, in addition
to other settings like backlog and max sockets, regardless if the NIC is bonded
or not. The user is never aware of any of these low level settings, and in most
production scenarios it is usually always distributed across all cores. This is
to distribute the cost of interrupt processing evenly among all cores.

## CGROUPS

To be able to run at peak performance for extended periods, we leverage cgroups
to isolate the redpanda processes, shielding them from “noisy neighbors”:
processes running alongside redpanda which demand sharing resources that
adversely affect performance.

We leverage `systemd` slices, instructing the kernel to strongly prefer evicting
other processes before evicting our process’ memory, as well as to reserve IO
quotas and CPU time so that even in some adversarial situations we still deliver
predictable latency and throughput to end users.

## CPU

Oftentimes, the default CPU configuration is prioritized for end-user-typical
use cases such as non-cpu-intensive desktop applications and optimizing power
usage. Redpanda disables all power-saving modes and ensures that the CPU is
configured for predictable latency at all times. We designed redpanda to drive
machines around ~90% utilization and still give the user predictable low latency
results.

## Memory

Swapping is prevented so that Redpanda is never swapped out of memory. By
design, `redpanda` allocates all the available memory (aside for some small OS
reservation) upfront, partitioning the allocated memory between all cores and
pinning such memory to the specified NUMA domain (specific CPU socket). We do
this to have predictable memory allocations without having to go to the system
memory, ensuring predictable latency.

## Monitoring

Redpanda comes with a built in Prometheus metrics endpoint on
`http://<host>:9644/metrics`

Redpanda ships with an additional `systemd` service which executes periodically
and reports resource usage and configuration data to Vectorized's metrics API.
It is enabled by default, and the data is anonymous. If you'd like us to be able
to identify your cluster's data, so that we can monitor it and alert you of
possible issues, please set the `organization` (your company's domain) and
`cluster_id` (usually your team's or project's name) configuration fields. For
example:

```
rpk config set organization 'vectorized.io'
rpk config set cluster_id 'us-west-2'
```

To opt out of all metrics reporting, set `rpk.enable_usage_stats` to false via
`rpk`

```
rpk config set rpk.enable_usage_stats false
```

Well Known IO

Redpanda relies on its own disk IO scheduler, and by default tells the kernel to
use the `noop` scheduler. To give the users near optimal performance by default,
`rpk` comes with an embedded database of IO settings for well-known cloud
computers, which are specific combinations of CPUs, SSD types, and VM sizes. It
is not the same to run software on 4 VCPUs than it is to run on an EC2 i3.metal
with 96 physical cores. Often,when trying to scale rapidly to meet demands,
product teams will not have the time to measure IO throughput and latency before
starting every new instance (via `rpk iotune`) and instead need resources right
now. To meet this demand,, redpanda will attempt to predict the best known
settings for VM cloud types.

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
cloud vendor, VM type and storage type surrounded by quotes and separated by
colons:

```
rpk start --well-known-io 'aws:l3.xlarge:default'
```

It can also be specified in the redpanda YAML configuration file, under the rpk
object:

```
rpk:
  well_known_io: 'gcp:c2-standard-16:nvme'
```

If well-known-io is specified in the config file, and as a flag, the value
passed with the flag will take precedence.

In the case where a certain cloud vendor, machine type or storage type isn’t
found, or if the metadata isn’t available and no hint is given, rpk will print a
warning pointing out the issue and continue using the default values.

rpk Modes

Usability is paramount to us. We know the delta from downloading and running
something from the internet and running in production is large. `redpanda`
relies on interrupt coalescing, interrupt distribution, noop IO scheduling, CPU
frequency scaling (performance governor), NIC multi-queue setup, memory locking
and real-time scheduling. Not to mention measuring the IO throughput to disk,
etc and keeping them updated with every release.

While these settings exist to give the users predictable low latency, high
throughput, high resource utilization, etc, they are not good settings for
developer’s laptops. We keep a set of auto-tunables in big groups:
`rpk mode developer` and `rpk mode production.`

These commands are idempotent, they’re safe to run multiple times. Some settings
might require restart of redpanda, others are injected into the runtime settings
of the kernel and can take effect immediately **if followed **by a
`rpk tune all.` Users can also review and edit redpanda.yaml and enable or
disable any individual setting manually, or to enable experimental flags.

## Configuration

The redpanda configuration is by default loaded from and persisted to
`/etc/redpanda/redpanda.yaml`. It is broadly divided into 2 sections, `redpanda`
and `rpk`.

The `redpanda` section contains all the runtime configuration, such as the
cluster member IPs, the node ID, data directory, and so on. The `rpk` section
contains configuration related to tuning the machine that redpanda will run on.

Here’s a sample of what the config file looks like.

```
# organization and cluster_id help Vectorized identify your system.
organization: ""
cluster_id: ""
pid_file: "/var/lib/redpanda/pid"
redpanda:
  # The directory where the data will be stored. It must reside on an XFS
  # partition.
  data_directory: "/var/lib/redpanda/data"

  # An integer to identify the current node. Must be unique within the cluster.
  node_id: 1

  # The inter-node RPC server config.
  rpc_server:
    address: "0.0.0.0"
    port: 33145

  # The Kafka API config.
  kafka_api:
    address: "0.0.0.0"
    port: 9092

  # A list of `host` objects, holding known nodes' configuration. If empty, the
  # node will be considered a root node and become available upon startup.
  seed_servers:
    - node_id: 1
      host:
        address: "0.0.0.0"
        port: 33145

  # The admin API configuration
  admin:
    address: "0.0.0.0"
    port: 9644

rpk:
  # Available tuners. Set to true to enable, false to disable.

  # Setup NIC IRQs affinity, sets up NIC RPS and RFS, sets up NIC XPS, increases socket
  # listen backlog, increases the number of remembered connection requests, bans the
  # IRQ Balance service from moving distributed IRQs
  tune_network: true

  # Sets the preferred I/O scheduler for given block devices.
  # It can work using both the device name or a directory, in which the device
  # where directory is stored will be optimized. Sets either 'none' or 'noop' scheduler
  # if supported
  tune_disk_scheduler: true

  # Disables IOPS merging
  tune_disk_nomerges: true

  # Distributes IRQs across cores with the method deemed the most appropriate for the
  # current device type (i.e. NVMe)
  tune_disk_irq: true

  # Disables hyper-threading, sets the ACPI-cpufreq governor to 'performance'. Additionaly
  # if system reboot is allowed: disables Intel P-States, disables Intel C-States,
  # disables Turbo Boost
  tune_cpu: true

  # Increases the number of allowed asynchronous IO events
  tune_aio_events: true

  # Syncs NTP
  tune_clocksource: true

  # Tunes the kernel to prefer keeping processes in-memory instead of swapping them out
  tune_swappiness: true

  # Enables memory locking
  enable_memory_locking: true

  # Installs a custom script to process coredumps and save them to the given directory.
  tune_coredump: true

  # The directory where all coredumps will be saved after they're processed.
  coredump_dir: "/var/lib/redpanda/coredump"

  # (Optional) The vendor, VM type and storage device type that redpanda will run on, in
  # the format <vendor>:<vm>:<storage>. This hints to rpk which configuration values it
  # should use for the redpanda IO scheduler.
  well_known_io: "aws:i3.xlarge:default"
```

rpk Commands

```
tune
```

Run all (`rpk tune all`) or some (i.e. `rpk tune cpu network`) of the tuners
available on **rpk.**

```

Usage:
  rpk tune <list_of_elements_to_tune> [flags]

Flags:
      --cpu-set string         Set of CPUs for tuner to use in cpuset(7) format if not specified tuner will use all available CPUs (default "all")
  -r, --dirs strings           List of *data* directories. or places to store data. i.e.: '/var/vectorized/redpanda/', usually your XFS filesystem on an NVMe SSD device
  -d, --disks strings          Lists of devices to tune f.e. 'sda1'
  -h, --help                   help for tune
  -m, --mode string            Operation Mode: one of: [sq, sq_split, mq]
  -n, --nic strings            Network Interface Controllers to tune
      --output-script string   If set tuners will generate tuning file that can later be used to tune the system
      --reboot-allowed         If set will allow tuners to tune boot paramters  and request system reboot
      --redpanda-cfg string    If set, pointed redpanda config file will be used to populate tuner parameters
      --timeout duration       The maximum time to wait for the tune processes to complete. The value passed is a sequence of decimal numbers, each with optional fraction and a unit suffix, such as '300ms', '1.5s' or '2h45m'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h' (default 10s)
```

```
start
```

Start redpanda.

```

Usage:
  rpk start [flags]

Flags:
      --check                  When set to false will disable system checking before starting redpanda (default true)
  -h, --help                   help for start
      --install-dir string     Directory where redpanda has been installed
      --redpanda-cfg string     Redpanda config file, if not set the file will be searched forin default locations
      --timeout duration       The maximum time to wait for the checks and tune processes to complete. The value passed is a sequence of decimal numbers, each with optional fraction and a unit suffix, such as '300ms', '1.5s' or '2h45m'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h' (default 10s)
      --tune                   When present will enable tuning before starting redpanda
      --well-known-io string   The cloud vendor and VM type, in the format <vendor>:<vm type>:<storage type>
```

```
mode
```

Enable a default configuration mode (development, production). See the **rpk
Modes** section below.

```

Usage:
  rpk mode {development, production} [flags]

Flags:
  -h, --help                  help for mode
      --redpanda-cfg string   Redpanda config file, if not set the file will be searched for in default locations
```

```
config set
```

Edit the configuration.

```

Usage:
  rpk config set <key> <value> [flags]

Flags:
      --config string   Redpanda config file, if not set the file will be searched for in default location (default "/etc/redpanda/redpanda.yaml")
      --format string   The value format. Can be 'single', for single values such as '/etc/redpanda' or 100; and 'json', 'toml', 'yaml','yml', 'properties', 'props', 'prop', or 'hcl' when partially or completely setting config objects (default "single")
  -h, --help            help for set
```

```
iotune
```

Measure filesystem performance and create IO configuration file.

```

Usage:
  rpk iotune [flags]

Flags:
      --directories strings   List of directories to evaluate
      --duration    duration  Duration of tests (default 10 minutes). The value passed is a sequence of decimal numbers, each with optional fraction and a unit suffix, such as '300ms', '1.5s' or '2h45m'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h'
  -h, --help                  help for iotune
      --redpanda-cfg string   Redpanda config file, if not set the file will be searched for in default locations
      --timeout duration      The maximum time after --duration to wait for iotune to complete. The value passed is a sequence of decimal numbers, each with optional fraction and a unit suffix, such as '300ms', '1.5s' or '2h45m'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h' (default 1h0m0s)
```

