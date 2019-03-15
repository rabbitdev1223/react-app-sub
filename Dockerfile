# base image
FROM node:11.2.0

ARG app_env
ENV NODE_ENV ${NODE_ENV}
ENV NODE_PATH ${NODE_PATH}
ENV REACT_APP_API_SERVER ${REACT_APP_API_SERVER}
ENV REACT_APP_API_URL ${REACT_APP_API_URL}
# add `/usr/src/shiptalent_frontend/node_modules/.bin` to $PATH
ENV PATH /usr/src/shiptalent_frontend/node_modules/.bin:$PATH

# set working directory
RUN mkdir /usr/src/shiptalent_frontend
WORKDIR /usr/src/shiptalent_frontend

# install and cache shiptalent_frontend dependencies
COPY package.json /usr/src/shiptalent_frontend/package.json
COPY production.env /usr/src/shiptalent_frontend/production.env

RUN yarn install
RUN yarn build

COPY . .
# npm install --save --save-exact react-scripts@1.1.2

# start app
CMD ["yarn", "start-production"]
