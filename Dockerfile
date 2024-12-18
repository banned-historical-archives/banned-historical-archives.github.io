FROM node:18

# 设置工作目录
WORKDIR /app

# 将项目文件复制到容器中
COPY package*.json ./
RUN npm install

RUN cp -r ./node_modules/pdfjs-dist ./public/
COPY . .

RUN npm run init-parsed
RUN npm run init-config
RUN npm run build-indexes
RUN npm run build-article-json
ENV LOCAL_SEARCH_ENGINE = 1
ENV LOCAL_INDEXES = 1
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]