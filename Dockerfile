FROM nginx:stable-alpine

COPY nginx_def_dev.conf /etc/nginx/templates/default.conf.template

CMD [ "nginx", "-g", "daemon off;" ]
