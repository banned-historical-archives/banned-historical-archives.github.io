## 开发者如何贡献代码
0. fork 本仓库，本地 clone 自己的仓库
1. 初始化数据库
### a.安装依赖并创建数据库
依赖： docker, nodejs, mysql

数据库 charset 需要设为 utf8_general_ci
创建数据库时可以参考以下默认配置，当然也可以通过环境变量修改这些参数
```
  host: process.env.CI ? 'mysql' : 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root_password',
  database: process.env.DB_NAME || 'banned_history',
```

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