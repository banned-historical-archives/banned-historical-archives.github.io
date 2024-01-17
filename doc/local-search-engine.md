### 初始化本地搜索引擎

1.  安装 docker 并使用 docker 运行 elasticsearch

```
docker pull docker.elastic.co/elasticsearch/elasticsearch:8.5.1

docker run -d --name es01 -p 9200:9200 -p 9300:9300 -e "http.cors.enabled=true" -e 'http.cors.allow-origin="*"' -e "xpack.security.authc.anonymous.username=anonymous_user" -e "xpack.security.authc.anonymous.authz_exception=true" -e "xpack.security.authc.anonymous.roles=superuser" -e ELASTIC_USERNAME=elastic -e "xpack.security.http.ssl.enabled=false" -e ELASTIC_PASSWORD=password -e "discovery.type=single-node" -it docker.elastic.co/elasticsearch/elasticsearch:8.5.1
```

如果报错，尝试运行 sudo sysctl -w vm.max_map_count=262144

2. 初始化 elasticsearch 索引

```
npm run init-es
```

3. 开启 es 代理

```
npm run dev:es-server
```
