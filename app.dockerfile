# base image
FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY client/package.json /usr/src/app/package.json
RUN npm install --silent

EXPOSE 3000
EXPOSE 35729

# start app
CMD ["npm", "start"]