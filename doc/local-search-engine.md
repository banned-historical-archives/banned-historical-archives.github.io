### 初始化本地搜索引擎

1.  安装 docker 并使用 docker 运行 elasticsearch

```
docker pull docker.elastic.co/elasticsearch/elasticsearch:8.5.1

docker network create elastic

docker run --name es01 --net elastic -p 9200:9200 -p 9300:9300 -it docker.elastic.co/elasticsearch/elasticsearch:8.5.1
```

首次运行以上命令将会输出 elastic 的默认密码

如果报错，尝试运行 sudo sysctl -w vm.max_map_count=262144

2. 将密码复制到.env (如果不存在请创建)

// .env 文件

```
ES_PASSWORD=FNoGHMg3knsOViqDSaIn
```

3. 复制证书到本仓库 backend 目录

```
docker cp es01:/usr/share/elasticsearch/config/certs/http_ca.crt ./backend/es_http_ca.crt
```

4. 从 mysql 数据库中初始化 elasticsearch index

```
npm run init-es
```

5. 开启 es 代理

```
npm run dev:es-server
```
