### 本地搜索引擎(docker compose版本，推荐)

[参考本地运行web服务器](./local.md)

### 本地搜索引擎(host版本)
0. [本地运行web服务器](./local.md)
1. 安装 docker 并使用 docker 运行 elasticsearch

```
docker pull docker.elastic.co/elasticsearch/elasticsearch:8.5.1

# 在本项目的根目录执行
docker run -d --name es01 -p 9200:9200 -p 9300:9300 --env-file "./backend/es_docker_container_env" -it docker.elastic.co/elasticsearch/elasticsearch:8.5.1
```

如果报错，尝试运行 sudo sysctl -w vm.max_map_count=262144

2. 初始化 elasticsearch 索引

```
npm run init-es
```
如果需要重置并初始化执行
```
npm run init-es reset
```
