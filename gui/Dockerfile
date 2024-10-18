FROM nginx:stable-alpine

COPY  src/  /usr/share/nginx/html/src
COPY  index.html /usr/share/nginx/html
COPY  server/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD [ "nginx", "-g", "daemon off;" ]