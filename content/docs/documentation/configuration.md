---
title: Configuration
introduction: Configuration introduction
order: 2
---

The redpanda configuration is by default loaded from and persisted to `/etc/redpanda/redpanda.yaml`. It is broadly divided into 2 sections, `redpanda` and `rpk`.

The `redpanda` section contains all the runtime configuration, such as the cluster member IPs, the node ID, data directory, and so on. The `rpk` section contains configuration related to tuning the machine that redpanda will run on.

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


##rpk Commands


```
tune
```


Run all (`rpk tune all`) or some (i.e. `rpk tune cpu network`) of the tuners available on **rpk.**


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


Enable a default configuration mode (development, production). See the **rpk Modes** section below.


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


