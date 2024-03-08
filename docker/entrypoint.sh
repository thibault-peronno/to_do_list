#!/bin/bash

# Check if the Nginx configuration file exists
if [ ! -f "/backend/config/nginx/nginx.config" ]; then
    echo "Nginx configuration file does not exist."
    exit 1
fi

envsubst < /backend/config/nginx/nginx.config > /etc/nginx/conf.d/default.conf

# Start Nginx
exec nginx -g 'daemon off;'
# exec "$@"

#use chmod +x entrypoint.sh to make this file like exec file
