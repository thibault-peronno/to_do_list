## To build docker

```
docker compose --env-file ./backend/.env build
```

## To launch docker

```
docker compose --env-file ./backend/.env up
```

## clean cache and more

```
docker system prune -a --volumes
```