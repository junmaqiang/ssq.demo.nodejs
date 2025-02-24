ARG NODE_VERSION=22.13.1
FROM node:${NODE_VERSION}-alpine

# 设置工作目录
WORKDIR /usr/src/app

USER node

# 复制package.json和package-lock.json到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 暴露应用程序运行的端口
EXPOSE 3000

# 启动应用程序
CMD [ "npm", "start" ]
