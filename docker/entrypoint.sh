export NGINX_PORT=80
export NGINX_HOST=thibaultperonno.io
#!/bin/bash
envsubst < /etc/nginx/conf.d/nginx.conf > /etc/nginx/conf.d/default.conf
exec "$@"

#use chmod +x entrypoint.sh to make this file like exec file
