# Bayesian Packer - Client

<b>Resource:</b> https://packer.bayesianflow.space<br/>
<b>Dedicated port number:</b> 10033<br/>
<b>Initial author:</b> Damien Bayes<br/>
<b>Description:</b> Large-scale and secure folder and file archiver for automating your infrastructure<br/>

---

## Getting Started

### Bash

First and foremost, you have to install required dependencies which are part of the entire program. Just use subsequent commands in sequence:

```bash
# Get info on an updated version of packages or their dependencies
sudo apt update

# Install zip/unzip utilities
sudo apt install zip unzip

# Install lightweight and flexible command-line JSON processor
sudo apt install jq
```

For instance, the jq is used for processing configuration data along with a basic structure composed of sections, properties, and values. Whereas the zip/unzip utilities are used for working with archives.

```bash
sudo ./archiver.sh -s <your-source-path> -d <your-destination-path>
```

### Powershell

...

---

## Development

```bash
# Install Eleventy
npm install -g @11ty/eleventy
```

### Docker

```bash
# Build a new docker image using the Dockerfile
sudo docker build \
-t \
bayesian-ecosystem/bayesian-packer_client:1.1 .

sudo docker run \
-d \
--name bayesian-packer_client \
--expose 80 \
--net bayesian-network-1 \
-e VIRTUAL_HOST=packer.bayesianflow.space \
bayesian-ecosystem/bayesian-packer_client:1.1
```

---

## Bug Fixes

If you have some problems or proposals, please open an issue including a log error on https://github.com/damien-bayes/bayesian-packer/issues

The reports make it easy for the Bayesian Ecosystem team to identify the bug, solve it, and release a new version of the Bayesian Packer by seeing the stacktrace.

## References
1. https://stedolan.github.io/jq
2. https://www.webstoemp.com/blog/multilingual-sites-eleventy
3. https://www.11ty.dev/docs/config/#default-template-engine-for-markdown-files
4. https://www.11ty.dev/docs/config/#transforms
5. https://www.hawksworx.com/blog/keeping-sass-simple-and-speedy-on-eleventy
6. https://www.11ty.dev/docs