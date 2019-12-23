#!/bin/sh

NAME=miniwhoami

# Clean up
docker container stop ${NAME}
docker container rm ${NAME}

# Build new image
docker rmi jennerwein/${NAME}
docker build -t jennerwein/${NAME} .

# Start ${NAME} on port 7777
docker run -p 7777:8080 --name ${NAME} --restart=always -d jennerwein/${NAME}

