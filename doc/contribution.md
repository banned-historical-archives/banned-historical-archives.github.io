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

如需运行OCR，依赖: python3.x, cnocr 2.2

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
### f.调试 OCR
```
$ npm run dev
// 如果是 windows 使用 npx next dev

$ npm run dev:ocr-server
```
打开 localhost:3000/ocr 并输入图片地址和页码范围，等待几秒钟就能看到 OCR 识别结果。

### OCR参数
在parser中调用OCR时可以修改如下参数，
默认参数为：
```
  rec_model = 'ch_ppocr_mobile_v2.0',
  rec_backend = 'onnx',
  det_model = 'ch_PP-OCRv3_det',
  det_backend = 'onnx',
  resized_shape = 1496,
  box_score_thresh = 0.3,
  min_box_size = 10,
  cache = true,
```
也可以使用cnocr的在线页面调试
https://huggingface.co/spaces/breezedeus/cnocr
