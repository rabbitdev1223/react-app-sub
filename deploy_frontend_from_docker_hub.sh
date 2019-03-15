#!/bin/sh
docker login -u $1 -p $2
docker pull $3

docker container prune << EOF
y
EOF

docker image prune << EOF
y
EOF

docker network prune << EOF
y
EOF

docker volume prune << EOF
y
EOF

# docker rmi $(docker images -f "dangling=true" -q)