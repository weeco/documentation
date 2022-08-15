import subprocess
import re

suggestedReadings = """

---

## Suggested readings
- Introduction to rpk container [article](https://redpanda.com/blog/rpk-container/)
- Getting started with rpk commands [article](https://redpanda.com/blog/getting-started-rpk/)
- Working with schema registry [article](https://redpanda.com/blog/schema_registry/)

"""

class Flag:
    def __init__(self, value, type, explanation):
        self.value = value
        self.type = type
        self.explanation = explanation


# Execute a subprocess inside a Linux machine. If the command is multi level (ex. rpk acl create) is generates a bigger list
def execute_process(commands):
    if len(commands) > 0:
        commands = commands[0].split(" ")
    commands.insert(0, "rpk")
    commands.append("-h")
    process = subprocess.run(commands, stdout=subprocess.PIPE)
    return process.stdout.decode("utf-8")


# Get the explanation written before the usage. Example:
""" # rpk is the Redpanda CLI & toolbox.
# Usage:
#   rpk [command] """


def get_explanation(process_line):
    return process_line[: process_line.find("Usage")].rstrip("\n")


# Get the usage of the command. If it's initial command, look for available commands. If it's a final a command, then look for flags. Finally if neither are present, extract the usage. Example:
""" Usage:
  rpk [command]

Available Commands:
  acl         Manage ACLs and SASL users.
  cluster     Interact with a Redpanda cluster.
  container   Manage a local container cluster.
  debug       Debug the local Redpanda process.
  generate    Generate a configuration template for related services.
  group       Describe, list, and delete consumer groups and manage their offsets.
  help        Help about any command
  iotune      Measure filesystem performance and create IO configuration file.
  plugin      List, download, update, and remove rpk plugins.
  redpanda    Interact with a local Redpanda process
  topic       Create, delete, produce to and consume from Redpanda topics.
  version     Check the current version.
  wasm        Deploy and remove inline WASM engine scripts. """


def get_usage(process_line):
    if process_line.find("Available Commands:") != -1:
        return process_line[
            process_line.find("Usage") : process_line.find("Available Commands:")
        ].rstrip("\n")
    elif process_line.find("Flags:") != -1:
        return process_line[
            process_line.find("Usage") : process_line.find("Flags:")
        ].rstrip("\n")
    else:
        return process_line[process_line.find("Usage") :].rstrip("\n")


# Get lines for possible available commands. Example:
""" Usage:
  rpk [command]

Available Commands:
  acl         Manage ACLs and SASL users.
  cluster     Interact with a Redpanda cluster.
  container   Manage a local container cluster.
  debug       Debug the local Redpanda process.
  generate    Generate a configuration template for related services.
  group       Describe, list, and delete consumer groups and manage their offsets.
  help        Help about any command
  iotune      Measure filesystem performance and create IO configuration file.
  plugin      List, download, update, and remove rpk plugins.
  redpanda    Interact with a local Redpanda process
  topic       Create, delete, produce to and consume from Redpanda topics.
  version     Check the current version.
  wasm        Deploy and remove inline WASM engine scripts. """


def get_commands(process_line):
    if process_line.find('Use "rpk') != -1:
        full_command = process_line[
            process_line.find("Available Commands:") : process_line.find('Use "rpk')
        ]
    else:
        full_command = process_line[process_line.find("Available Commands:") :]

    commands = full_command[: full_command.find("Flags:")]
    return commands.lstrip("Available Commands:")


# Extract lines for the flags from a command. Example:
""" Available Commands:
  acl         Manage ACLs and SASL users.
  cluster     Interact with a Redpanda cluster.
  container   Manage a local container cluster.
  debug       Debug the local Redpanda process.
  generate    Generate a configuration template for related services.
  group       Describe, list, and delete consumer groups and manage their offsets.
  help        Help about any command
  iotune      Measure filesystem performance and create IO configuration file.
  plugin      List, download, update, and remove rpk plugins.
  redpanda    Interact with a local Redpanda process
  topic       Create, delete, produce to and consume from Redpanda topics.
  version     Check the current version.
  wasm        Deploy and remove inline WASM engine scripts.

Flags:
  -h, --help      help for rpk
  -v, --verbose   Enable verbose logging (default: false).

Use "rpk [command] --help" for more information about a command. """


def extract_flags(process_line):
    if process_line.find('Use "rpk') != -1:
        return process_line[process_line.find("Flags:") : process_line.find('Use "rpk')]
    else:
        return process_line[process_line.find("Flags:") :]


# Extract new commands (multilevel) or flags from the available ones. Example:
"""   deploy      Deploy inline WASM function.
  generate    Create an npm template project for inline WASM engine.
  remove      Remove inline WASM function. """
# or
"""       --brokers strings         Comma-separated list of broker ip:port pairs (e.g. --brokers '192.168.78.34:9092,192.168.78.35:9092,192.179.23.54:9092' ). Alternatively, you may set the REDPANDA_BROKERS environment variable with the comma-separated list of broker addresses.
      --config string           Redpanda config file, if not set the file will be searched for in the default locations
  -h, --help                    help for wasm
      --password string         SASL password to be used for authentication.
      --sasl-mechanism string   The authentication mechanism to use. Supported values: SCRAM-SHA-256, SCRAM-SHA-512.
      --tls-cert string         The certificate to be used for TLS authentication with the broker.
      --tls-enabled             Enable TLS for the Kafka API (not necessary if specifying custom certs).
      --tls-key string          The certificate key to be used for TLS authentication with the broker.
      --tls-truststore string   The truststore to be used for TLS communication with the broker.
      --user string             SASL user to be used for authentication. """


def extract_new_commands(available, is_flag):
    iterable_commands = []

    for line in available.splitlines():
        if line == "":
            continue
        if not is_flag:
            iterable_commands.append(line.split(" ")[2])
        else:
            if line.find("-") >= 0:
                line = line[line.find("-") :]
                if line.find('"') != -1:
                    continue
            else:
                continue
            iterable_commands.append(line)

    return iterable_commands


# Extract flag value, explanation and type from a flag line. Example:
"""--user string             SASL user to be used for authentication. """


def extract_all_flag(line):
    flag_set = []
    for flag in line:
        value = flag[: flag.find(" ")]
        explanation = flag[flag.find(" ") :]
        if value.find(",") != -1:
            explanation = explanation.lstrip(" ")
            value = value + " " + (explanation[: explanation.find(" ")])
            explanation = explanation[explanation.find(" ") :]

        if re.search(r"\bstring\b", explanation):
            type = "string"
            explanation = re.sub(r"\bstring\b", "", explanation)
        elif re.search(r"\bstrings\b", flag):
            type = "strings"
            explanation = re.sub(r"\bstrings\b", "", explanation)
        elif re.search(r"\bstringArray\b", flag):
            type = "stringArray"
            explanation = re.sub(r"\bstringArray\b", "", explanation)
        elif re.search(r"\bint\b", flag):
            type = "int"
            explanation = re.sub(r"\bint\b", "", explanation)
        elif re.search(r"\bint16\b", flag):
            type = "int16"
            explanation = re.sub(r"\bint16\b", "", explanation)
        elif re.search(r"\bint32\b", flag):
            type = "int32"
            explanation = re.sub(r"\bint32\b", "", explanation)
        elif re.search(r"\bint32Slice\b", flag):
            type = "int32"
            explanation = re.sub(r"\bint32Array\b", "", explanation)
        elif re.search(r"\bduration\b", flag):
            type = "duration"
            explanation = re.sub(r"\bduration\b", "", explanation)
        else:
            type = "-"
        flag_set.append(Flag(value, type, explanation))
    return flag_set


# Build the resulting markdown file
def build_md(md_result, executed_command, explanation, usage, it_flags, flag_list):
    md_result += "\n## " + executed_command
    md_result += "\n\n " + explanation

    md_result += """\n\n```bash \n"""
    md_result += usage
    md_result += """\n```"""

    if it_flags:
        md_result += """ \n\n#### Flags\n
<table>
<tbody>
<tr>
<td><strong> Value</strong>
</td>
<td><strong> Type</strong>
</td>
<td><strong> Description</strong>
</td>
</tr>"""
    for flag in flag_list:
        md_result += """<tr>"""
        md_result += """<td>"""
        md_result += flag.value
        md_result += """</td>"""
        md_result += """<td>"""
        md_result += flag.type
        md_result += """</td>"""
        md_result += """<td>"""
        md_result += flag.explanation
        md_result += """</td>"""
        md_result += """</tr>"""
    md_result += """</tbody></table>"""

    md_result += "\n"
    return md_result


result = execute_process([])

explanation = get_explanation(result)

usage = get_usage(result)

full_command = get_commands(result)

commands = full_command[: full_command.find("Flags:")]

available_commmands = commands.lstrip("Available Commands:")
it_commands = extract_new_commands(available_commmands, False)

flags = extract_flags(result)
available_flags = flags.lstrip("Flags:")

it_flags = extract_new_commands(available_flags, True)
flag_list = extract_all_flag(it_flags)

md_result = """---
title: rpk commands
---

`rpk` (Redpanda Keeper) is Redpanda's command line interface (CLI) utility. rpk commands allow you to configure and manage Redpanda clusters, tune them for better performance, manage topics and groups, manage access control lists (ACLs).

This section lists each rpk command in alphabetical order, along with a table of flags for that command. All descriptions are from the output of the `rpk <command> -–help` command.

"""

executed_command = "rpk"

md_result = build_md(
    md_result, executed_command, explanation, usage, it_flags, flag_list
)

for command in it_commands:
    result = execute_process([command])
    executed_command = "rpk " + command

    explanation = get_explanation(result)

    usage = get_usage(result)

    full_command = get_commands(result)

    commands = full_command[: full_command.find("Flags:")]

    available_commmands = commands.lstrip("Available Commands:")
    new_commands = extract_new_commands(available_commmands, False)

    flags = extract_flags(result)
    available_flags = flags.lstrip("Flags:")

    it_flags = extract_new_commands(available_flags, True)
    flag_list = extract_all_flag(it_flags)
    md_result = build_md(
        md_result, executed_command, explanation, usage, it_flags, flag_list
    )
    index = it_commands.index(command) + 1
    for new_command in new_commands:
        it_commands.insert(index, command + " " + new_command)
        index += 1

md_result = md_result.replace(
    """  rpk-<name>
  rpk.ac-<name>""",
    """```bash
rpk-<name>
rpk.ac-<name>
```
""",
)

md_result = md_result.replace("redpanda.yaml", "`redpanda.yaml`")
md_result = md_result.replace("<IP>", "|IP|")
md_result = md_result.replace("<port>", "|port|")
md_result = md_result.replace("<name>", "|name|")
md_result = md_result.replace("<host>", "|host|")
md_result = md_result.replace("<storage type>", "|storage type|")
md_result = md_result.replace("<vm type>", "|vm type|")
md_result = md_result.replace("<vendor>", "|vendor|")
md_result = md_result.replace("<host:port>", "|host:port|")
md_result = md_result.replace("<tuner name>", "|tuner name|")

md_result = md_result + suggestedReadings


try:
    file = "docs/reference/rpk-commands.mdx"
    with open(file, "w") as filetowrite:
        filetowrite.write(md_result)
    print("The rpk commands have been successfully generated at docs/reference/rpk-commands.mdx")
except Exception as e:
    print("Error generating the rpk commands file " + e)
