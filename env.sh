#!/bin/sh
for i in $(env | grep VITE_)
do
    key=$(echo $i | cut -d '=' -f 1 | cut -d "_" -f 2-)
    value=$(echo $i | cut -d '=' -f 2-)

    # sed JS and CSS only
    find /usr/share/nginx/html -type f \( -name '*.js' -o -name '*.css' \) -exec sed -i "s|${key}\s*=\s*.*;|${key}=\"${value}\";|g" '{}' +
done