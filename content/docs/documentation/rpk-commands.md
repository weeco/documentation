---
title: rpk Commands
order: 6
---
# rpk Commands

## tune

Run all (`rpk tune all`) or some (i.e. `rpk tune cpu network`) of the tuners
available on **rpk.**

```

Usage:
  rpk tune <list_of_elements_to_tune> [flags]

Flags:
      --config string          Redpanda config file, if not set the file will be searched for in the default locations (default "/etc/redpanda/redpanda.yaml")
      --cpu-set string         Set of CPUs for tuner to use in cpuset(7) format if not specified tuner will use all available CPUs (default "all")
  -r, --dirs strings           List of *data* directories. or places to store data. i.e.: '/var/vectorized/redpanda/', usually your XFS filesystem on an NVMe SSD device
  -d, --disks strings          Lists of devices to tune f.e. 'sda1'
      --interactive            Ask for confirmation on every step (e.g. tuner execution, configuration generation)
  -m, --mode string            Operation Mode: one of: [sq, sq_split, mq]
  -n, --nic strings            Network Interface Controllers to tune
      --output-script string   If set tuners will generate tuning file that can later be used to tune the system
      --reboot-allowed         If set will allow tuners to tune boot paramters  and request system reboot
      --timeout duration       The maximum time to wait for the tune processes to complete. The value passed is a sequence of decimal numbers, each with optional fraction and a unit suffix, such as '300ms', '1.5s' or '2h45m'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h' (default 10s)
```

## start

Start redpanda.

```

Usage:
  rpk start [flags]

Flags:
      --check                  When set to false will disable system checking before starting redpanda (default true)
      --config string          Redpanda config file, if not set the file will be searched for in the default locations (default "/etc/redpanda/redpanda.yaml")
      --install-dir string     Directory where redpanda has been installed
      --timeout duration       The maximum time to wait for the checks and tune processes to complete. The value passed is a sequence of decimal numbers, each with optional fraction and a unit suffix, such as '300ms', '1.5s' or '2h45m'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h' (default 10s)
      --tune                   When present will enable tuning before starting redpanda
      --well-known-io string   The cloud vendor and VM type, in the format <vendor>:<vm type>:<storage type>
```

## mode

Enable a default configuration mode (development, production). See the [**rpk
Modes**](http://localhost:8000/documentation/rpk-modes/) section.

```

Usage:
  rpk mode {development, production} [flags]

Flags:
      --config string   Redpanda config file, if not set the file will be searched for in the default locations (default "/etc/redpanda/redpanda.yaml")
```

## config set

Edit the configuration.

```

Usage:
  rpk config set <key> <value> [flags]

Flags:
      --config string   Redpanda config file, if not set the file will be searched for in default location (default "/etc/redpanda/redpanda.yaml")
      --format string   The value format. Can be 'single', for single values such as '/etc/redpanda' or 100; and 'json', 'toml', 'yaml','yml', 'properties', 'props', 'prop', or 'hcl' when partially or completely setting config objects (default "single")
```

## iotune

Measure filesystem performance and create IO configuration file.

```

Usage:
  rpk iotune [flags]

Flags:
      --config string         Redpanda config file, if not set the file will be searched for in the default locations (default "/etc/redpanda/redpanda.yaml")
      --directories strings   List of directories to evaluate
      --duration duration     Duration of tests.The value passed is a sequence of decimal numbers, each with optional fraction and a unit suffix, such as '300ms', '1.5s' or '2h45m'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h' (default 10m0s)
      --out string            The file path where the IO config will be written (default "/var/lib/redpanda/data/io-config.yaml")
      --timeout duration      The maximum time after --duration to wait for iotune to complete. The value passed is a sequence of decimal numbers, each with optional fraction and a unit suffix, such as '300ms', '1.5s' or '2h45m'. Valid time units are 'ns', 'us' (or 'µs'), 'ms', 's', 'm', 'h' (default 1h0m0s)
```

## generate grafana-dashboard

Generate a Grafana dashboard for redpanda metrics.

```
Usage:
  rpk generate grafana-dashboard [flags]

Flags:
      --datasource string       The name of the Prometheus datasource as configured in your grafana instance.
      --job-name string         The prometheus job name by which to identify the redpanda nodes (default "redpanda")
      --prometheus-url string   The redpanda Prometheus URL from where to get the metrics metadata (default "http://localhost:9644/metrics")
```

## generate prometheus-config

Generate the Prometheus configuration to scrape redpanda nodes. This command's
output should be added to the `scrape_configs` array in your Prometheus
instance's YAML config file.

If `--seed-addr` is passed, it will be used to discover the rest of the cluster
hosts via redpanda's Kafka API. If `--node-addrs` is passed, they will be used
directly. Otherwise, `rpk generate prometheus-conf` will read the redpanda
config file and use the node IP configured there. `--config` may be passed to
especify an arbitrary config file.

```
Usage:
  rpk generate prometheus-config [flags]

Flags:
      --config string        The path to the redpanda config file (default "/etc/redpanda/redpanda.yaml")
      --job-name string      The prometheus job name by which to identify the redpanda nodes (default "redpanda")
      --node-addrs strings   A comma-delimited list of the addresses (<host:port>) of all the redpanda nodes
                             in a cluster. The port must be the one configured for the nodes' admin API
                             (9644 by default)
      --seed-addr string     The URL of a redpanda node with which to discover the rest
```
