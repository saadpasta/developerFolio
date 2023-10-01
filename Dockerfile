# Stage 1 - the build process
# FROM node:14-alpine as build

FROM node:14-alpine as build-stage

# set working directory
RUN mkdir /usr/app
#copy all files from current directory to docker
COPY . /usr/app

WORKDIR /usr/app

# Remove package-lock.json
RUN rm ./package-lock.json

# install and cache app dependencies
RUN npm install

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm run build

# Stage 2
# Copy the react app build above in nginx
FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build-stage /usr/app/build .
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]