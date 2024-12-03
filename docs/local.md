## 本地运行(docker版本, 推荐)
此版本内置本地搜索引擎

### a.安装依赖
依赖： docker / docker desktop

### b.下载docker compose文件

https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives.github.io/refs/heads/master/docker-compose.yml

### c.在docker compose文件目录运行

```
docker compose up -d
// 初次运行会自动建立索引，使用docker logs root-app-1查看进度
// 使用浏览器访问 127.0.0.1:3000
```

### d.版本更新

```
// 先手动删除elastic-search的容器，再执行
docker compose up -d pull --always
```

## 本地运行(host版本)

### a.安装依赖
依赖： nodejs > 14

### b.安装 node_modules
```
npm install
```
### c.下载子仓库
```
npm run init-parsed
npm run init-config
```
### d.构建目录文件
```
npm run init-catelog
```
### e.构建辅助文件
```
npm run dev:nextjs-helper
```
### f.构建前端文件
```
npm run build
```
### g.运行前端服务器
```
npx serve@latest out
// 使用浏览器访问 127.0.0.1:3000
```
此版本需要额外步骤安装[本地搜索引擎](./local-search-engine.md)
