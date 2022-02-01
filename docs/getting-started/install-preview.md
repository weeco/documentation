---
title: Installing previews
---

For those of us who like to live on the edge!

You can test our latest developments through our beta or preview builds. 

Choose the system that you're using and run the commands down below.

## Beta releases on Debian/Ubuntu

```bash
curl -1sLf \
  'https://packages.vectorized.io/HxYRCzL4xbbaEtPi/redpanda-beta/setup.deb.sh' \
  | sudo -E bash
  
sudo apt-get install redpanda
```

## Beta releases on Fedora/RedHat/Amazon Linux

```bash
curl -1sLf \
  'https://packages.vectorized.io/HxYRCzL4xbbaEtPi/redpanda-beta/setup.rpm.sh' \
  | sudo -E bash
  
sudo yum install redpanda
```

## Beta releases on Docker

For example, to pull the docker image:

```bash
docker pull docker.vectorized.io/vectorized/redpanda:v21.12.1-wasm-beta1
```

## Checking the installed version

To check if the installation was successful you can run this command:

```bash
rpk version
```

The result is similar to this:

```bash
v21.12.1-wasm-beta1 (rev ed9a450)
```

## Troubleshooting

If you face any errors during your installation or upgrading process, feel free to reach us in our [Slack Community](https://join.slack.com/t/redpandacommunity/shared_invite/zt-ng2ze1uv-l5VMWSGQHB9gp47~kNnYGA/) or on [GitHub Discussions](https://github.com/vectorizedio/redpanda/discussions).

