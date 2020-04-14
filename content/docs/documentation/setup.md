---
title: Redpanda Setup Guide
introduction: This guide will lead you through initial setup and testing.
order: 1
---
Redpanda is a Kafka replacement for mission critical systems. This guide will 
lead you through initial setup and testing.



*   [Quick Start - 60 Seconds Time To Wow](#bookmark=id.kztlmwtzncny)
*   [Single Node Production Setup](#bookmark=id.1e9jonuebw7i)
*   [Multi-Node Production Setup](#bookmark=id.7dy6z0b7blxs)

        
# Quick Start - 60 Seconds Time To Wow
<a name="Quick_Start"></a>
#### On Fedora/RedHat Systems:


```
curl -s https://{{master_token}}:@packagecloud.io/install/repositories/
   vectorizedio/v/script.rpm.sh | sudo bash &&  dnf install redpanda -y &&
   systemctl start redpanda
```



#### On Debian Systems:


```
curl -s https://{{master_token}}:@packagecloud.io/install/repositories/
   vectorizedio/v/script.deb.sh | sudo bash &&  apt install redpanda -y && 
   systemctl start redpanda
```



# Single Node Production Setup
<a name="Single_Node"></a>
Requirements:



*   XFS Must be the filesystem for the data directory (/var/lib/redpanda)
*   Ensure port 9092  - Kafka API - is open and can be reached


## **Step 1**:  Install the binary


#### On Fedora/RedHat Systems:


```
curl -s https://{{master_token}}:@packagecloud.io/install/repositories/
   vectorizedio/v/script.rpm.sh | sudo bash && sudo dnf install redpanda -y
```



#### On Debian Systems:


```
curl -s https://{{master_token}}:@packagecloud.io/install/repositories/
   vectorizedio/v/script.deb.sh | sudo bash && sudo apt install redpanda -y
```



## **Step 2**: Tune the hardware & Linux Kernel


#### Automatically optimize the hardware: 


```
sudo rpk tune all
```



#### Optionally benchmark your SSD IOPS (IO Per Second):


```
sudo rpk iotune # takes 10mins
```



## **Step 3**: Profit!


```
sudo systemctl start redpanda
```



# Multi Node Production Setup
<a name="Multi_Node"></a>
Running redpanda in a multi-node setup requires only one extra step per node. 
No awk, grep or `command-line-fu` needed. 

Requirements:



*   XFS Must be the filesystem for the data directory (`/var/lib/redpanda`)
*   The following ports must be open:
    *   `33145` - Internal RPC Port - ensure your firewall allows node-to-node 
                  communication over TCP  on this port
    *   `9092`  - Kafka API Port
    *   `9644`  - Prometheus & HTTP Admin port
*   Allow outbound traffic to <code>
    [https://m.rp.vectorized.io](https://m.rp.vectorized.io)</code> - allows us
    to optimize code paths based on production use - see <strong>Autotuning
    </strong> section.


## <strong>Step 1</strong>:  Install the binary


#### On Fedora/RedHat Systems:


```
curl -s https://{{master_token}}:@packagecloud.io/install/repositories/
   vectorizedio/v/script.rpm.sh | sudo bash && sudo dnf install redpanda -y
```



#### On Debian Systems:


```
curl -s https://{{master_token}}:@packagecloud.io/install/repositories/
   vectorizedio/v/script.deb.sh | sudo bash && sudo dnf install redpanda -y
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
   <td><code>sudo rpk config bootstrap --id &lt;unique id> \</code>
<p>
<code>  --self &lt;private ip>                      \</code>
<p>
<code>  --ips &lt;root node ip> &&                  \</code>
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
