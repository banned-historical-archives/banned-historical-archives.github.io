FROM node:18

# 设置工作目录
WORKDIR /app

# 将项目文件复制到容器中
COPY package*.json ./
RUN npm install

RUN cp -r ./node_modules/pdfjs-dist ./public/
COPY . .

RUN node_options="--max-old-space-size=8192" npm run init-parsed
RUN node_options="--max-old-space-size=8192" npm run init-config
RUN node_options="--max-old-space-size=8192" npm run build-catelog
RUN node_options="--max-old-space-size=8192" npm run dev:nextjs-helper && npm run build
RUN node_options="--max-old-space-size=8192" npm run init-es

EXPOSE 3000

CMD ["npm", "start"]

