FROM node:16.17.1

WORKDIR /nodejs-echo-server
COPY package.json package.json
RUN npm install
COPY . .
WORKDIR /nodejs-echo-server

CMD [ "./ server.js" ]
