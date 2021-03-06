# ExpressVis-docker

#### Description
The project contains all necessary files for deploying ExpressVis (https://omicsmining.ncpsb.org.cn/ExpressVis/home) with Docker. Users can easily deploy ExpressVis locally or in the own server.

#### Prerequisite

1. Install [Docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/)
   
2. Download ExpressVis.database.zip from ftp(ftp://omicsmining.ncpsb.org.cn/pub). Unzip the data and place them in a directory.


#### Deploy ExpressVis
1. Clone this project
   
   `
   git clone https://gitee.com/omicsmining/express-vis-docker.git
   `

2.  Change to ExpressVis-Docker directory

    `
      cd ExpressVis-docker
    `

3.  Change database path in docker-compose.yml file.

    > change '/user/annotationDatabasePath' to your database directory(from prerequisite 2) in setion djangoserver/volumes and section nginx/volumns/

4.  Build docker image rdiffbase. Rdifbase image will be used in rdiffServer image. Docker installs all necessary Microaray annotation packages and so building rdiffbase will take a long time. We recommend users only install Microarray packages they requires. By default, the Microarray packages in this project are just a few packages for test. Users can change the packages to be installed in ./rdiffbase/annoPackagesInfo/**.txt files. MicroarrayPackages.zip file that contains all Microarray packages infos can be download from ftp(ftp://omicsmining.ncpsb.org.cn/pub). 
   
    ```
    cd ./diffbase       
    docker build -t rdiffbase .
    ```

5. Build images and run containsers using docker-compose

   ```
   cd .. # Go back to the root directory of ExpressVis-docker from ./diffBase
   docker-compose up -d
   ```

6. Open ExpessVis in a browser with the url [localhost:80/ExpressVis/home](localhost:80/ExpressVis/home).







