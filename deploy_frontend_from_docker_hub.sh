#!/bin/sh

# parameters:
# docker_repo
# interval. default 10
# timetou. default 1800
function check_docker_repo () {
    prev_image_state=$(docker images | grep "${1}")
    previous_time=$(date +%s)
    while true ; do
        docker pull $1

        current_image_state=$(docker images | grep "${1}")
        
        currenttime=$(date +%s)
        duration=$(( $currenttime - $previous_time ))

        if [[ "${prev_image_state}" == "" ]]; then
            echo "success: ${1} was pulled with lateast version from docker hub."
            return 1
        elif [[ "${prev_image_state}" == "${current_image_state}" ]]; then
            echo "success: ${1} was pulled with lateast version from docker hub."
            return 1
        elif [[ "$currenttime" > "${3}" ]]; then 
            break
        else
            echo "processing: wating until will complete to building ${1} docker on docker hub..."
        fi
        sleep "${2}"
    done

    echo "failed: timed out to pull ${1} from docker hub."
    return 0
}

function remove_gabage_docker_images {
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
}

echo "logining to docker hub..."
docker login -u $1 -p $2
echo "logged in with "${1}" user to docker hub..."

echo "pulling docker iamge from docker hub..."
check_docker_repo $3 10 1800

# if [[ $? == 1 ]]; then
echo "removing every gabage docker images..."
# remove_gabage_docker_images
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

# fi 

echo "done"