# Tools / Scripts

In this folder we have tools or scripts that helps the documentation team auto-generate content.

# rpk commands

For `rpk` we have a Python script `gen-rpk-help-doc.py`. This script runs all the `rpk --help` commands in the user's machine. It requires redpanda installed. 

## Requirements
- Redpanda installed
- OS: Linux based 
- [Python3](https://www.python.org/downloads/) installed

## How to run
To run this script run this command from the repository folder:

```bash
python3 tools/gen-rpk-help-doc.py
```

## Output
A complete markdown file at `docs/www/rpk-commands.md` 

# Metrics / Properties

For the metrics and configuration properties we have a Javascript script. It reads from 3 different files directly from `redpanda-data/redpanda` repository.

- [Cluster Properties](https://github.com/redpanda-data/redpanda/blob/dev/src/v/config/configuration.h)
- [Cluster Config](https://github.com/redpanda-data/redpanda/blob/dev/src/v/config/configuration.cc)
- [Node Config](https://github.com/redpanda-data/redpanda/blob/dev/src/v/config/node_config.cc)

Please notice that the links here and in the script point to the `dev` branch. You can change these for whatever you want. 
If you want to create the tables for some unreleased version, just go the that branch on the repository, find the file, **click on raw**, and then copy the URL into the script.

## Requirements
- The files must exist on the repository
- [Node.js](https://nodejs.org/en/) is installed in your machine

## How to run
To run this script run this command from the repository folder:

```bash
node tools/configuration_extractor.js
```

## Output 
The script will output 3 or 4 `txt` files. They contain the markdown tables for their respective content.
- 3 files if everything is working as expected
- 4 files if any flag is missing some info. 

The files are:
- cluster_configs_table.txt  - Cluster configuration
- node_configs_table.txt - Node configuration
- tunable_configs_table.txt - Tunable configuration
- missing_info_table.txt - (Optional) This file may be created if any of the flags are missing info. Either the description or their default values.