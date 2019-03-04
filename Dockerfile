# base image
FROM node:11.2.0

# set working directory
RUN mkdir /usr/src/shiptalent_frontend
WORKDIR /usr/src/shiptalent_frontend

# add `/usr/src/shiptalent_frontend/node_modules/.bin` to $PATH
ENV PATH /usr/src/shiptalent_frontend/node_modules/.bin:$PATH

# install and cache shiptalent_frontend dependencies
COPY package.json /usr/src/shiptalent_frontend/package.json
RUN yarn install
COPY . .
# npm install --save --save-exact react-scripts@1.1.2
# RUN yarn build

# start app
CMD ["yarn", "start"]
