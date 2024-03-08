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

## Some information about config

### Database config

On database config to connect the app to database : 
- Not use setTimeout. This not allow to keep the connection. Because the promise() become undefined
- For the host name, we need to use the name of the service.

### Docker

About the .env file. It is better to create it in the same lavel of docker files.


the dockerfile, I can take off .yml

This line in mysqldb service allow to exect the file. We could read, entrypoint to intialize the database

```yml
volumes:
    - ./to_do_list.sql:/docker-entrypoint-initdb.d/1.sql
```