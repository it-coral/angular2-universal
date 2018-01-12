FROM busybox

ADD temp.html /www/index.html

ARG CIRCLE_BUILD_NUM
ARG GIT_SHA
ENV CIRCLE_BUILD_NUM=$CIRCLE_BUILD_NUM
ENV GIT_SHA=$GIT_SHA


EXPOSE 8000

# Create a basic webserver and sleep forever
CMD httpd -p 8000 -h /www; tail -f /dev/null
