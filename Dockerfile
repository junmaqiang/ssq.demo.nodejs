ARG NODE_VERSION=22.13.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

USER node

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# 启动应用程序
CMD [ "npm", "start" ]
