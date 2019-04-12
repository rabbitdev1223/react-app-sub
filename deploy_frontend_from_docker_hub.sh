#!/bin/sh

# parameters:
# docker_repo
# interval. default 10 seconds
# timeout. default 1200 seconds
function check_docker_repo () {
    prev_image_state=$(docker images | grep ${1})
    echo ${prev_image_state}
    previous_time=$(date +%s)
    echo ${prev_image_state} ${previous_time}

    while true ; do
        docker pull $1

        current_image_state=$(docker images | grep ${1})
        
        currenttime=$(date +%s)
        duration=$(( $currenttime - $previous_time ))

        echo ${current_image_state} ${currenttime} ${duration}
        
        echo ${prev_image_state} ${previous_time}
        if [[ ${prev_image_state} == "" ]]; then
            echo "success: ${1} was pulled with lateast version from docker hub."
            return 1
        elif [[ "${prev_image_state}" != "${current_image_state}" ]]; then
            echo "success: ${1} was already updated with lateast version from docker hub."
            return 1
        elif [[ "$currenttime" > "${3}" ]]; then 
            break
        else
            echo "processing: wating until will complete to build ${1} on docker hub..."
        fi
        sleep ${2}
    done

    echo "failed: timed out to pull ${1} from docker hub."
    return 0
}


echo "Logining to docker hub..."
docker login -u $1 -p $2
echo "Logged in with ${1} user to docker hub..."

echo "Pulling docker image from docker hub..."
check_docker_repo $3 10 1200


echo "Removing every gabage docker images..."
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

echo "done"