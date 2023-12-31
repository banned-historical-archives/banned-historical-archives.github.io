## 开发者如何贡献代码
0. fork 本仓库，本地 clone 自己的仓库
1. 初始化数据库
### a.安装依赖并创建数据库
依赖： docker, nodejs, mysql

docker run --name bha -e MYSQL_ROOT_PASSWORD=bha -e MYSQL_DATABASE=bha -p3307:3306 -d mysql:8 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

### b.安装 node_modules
```
npm install
```
### c.下载子仓库
```
git submodule update --init
```
### d.解析原始文件并写入数据库
```
npm run init-db
```
可选环境变量：DB_NAME，DB_PORT，DB_USER，DB_PASSWORD
### e.本地预览
```
npm run dev
```