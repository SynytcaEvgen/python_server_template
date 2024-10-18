# AI_Manual

## How to build project in local computer 
### Step 1
First of all need set all .env variable. The .env file never stored in repository by security reason. But in repository you can find the .env.example file and just rename to .env basically  project should be work.


## Vector Database(Milvus in Docker)
<https://milvus.io/docs/install_standalone-docker.md>

Milvus provides an installation script to install it as a docker container. The script is available in the Milvus repository. To install Milvus in Docker, just run

### Download the installation script
```
$ curl -sfL <https://raw.githubusercontent.com/milvus-io/milvus/master/scripts/standalone_embed.sh> -o standalone_embed.sh

# Start the Docker container
$ bash standalone_embed.sh start
```

After running the installation script:

A docker container named milvus has been started at port 19530.
An embed etcd is installed along with Milvus in the same container and serves at port 2379. Its configuration file is mapped to embedEtcd.yaml in the current folder.
To change the default Milvus configuration, add your settings to the user.yaml file in the current folder and then restart the service.
The Milvus data volume is mapped to volumes/milvus in the current folder.
You can stop and delete this container as follows
```
# Stop Milvus

$ bash standalone_embed.sh stop

# Delete Milvus data

$ bash standalone_embed.sh delete
```


