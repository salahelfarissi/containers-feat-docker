# Containers (Feat. Docker) 🐳

```bash
# Get docker version
docker -v
docker-compose -v


# List
docker ps # Only running containers
docker ps -a # Shutted containers as well
docker ps --format "{{.Names}}" # Names only
docker images -a # List images, including intermediary

# Remove
docker rm -f <container> # -f will kill then rm
docker rmi -f <image>
docker rmi $(docker images -q) # --quiet: display ids only
docker rmi $(docker images -f "dangling=true" -q) # Delete images that are tagged <none>
docker images | grep 'evalytics' | awk '{print $3}' | 
\ xargs docker rmi # Delete images that starts with evalytics
docker container prune -f # -f skip confirmation
docker image prune -a # rm unused images

# Kill running container
docker kill <container>
docker kill $(docker ps -q)

# Run a new container from an image
docker run -it --name <container_name> --rm <image> <command>
docker run --init --rm <container> ls # --init for shutting down server
docker run --init --rm -p <host_port>:<container_port> <container>
docker run --init --rm -d -P <container> # -P publish all exposed ports
docker run -d --network=<network> -p <host_port>:<container_port> \
> --name=<container> --rm <image>

# Copy files between a container and the local file system
docker cp container:/home .

# Run ps aux command in container
docker exec <container> ps aux
docker compose exec <container> psql -U <username>

# Build container from Dockerfile
docker build -t <container_name> -f Dockerfile . # --tag

# Networking
docker network ls
docker network inspect <network> # Display detailed information
# It's recommended to create a seperate bridge network
docker network create --driver=bridge <network>

# Compose
# docker-compose is V1, now deprecated
docker compose build
docker compose up -d
docker compose up -d --build

docker compose up --build
docker compose up --scale

docker compose ps
docker compose logs <service>
docker compose logs -f
# Remove volumes too
docker compose down -v
# Env expansion
docker compose config

# Convert a compose.yaml file
kompose convert
```
