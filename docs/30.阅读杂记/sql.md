https://juejin.cn/post/7025971097401032734
https://www.sqlite.org/eqp.html

sqlite 查看操作
```sh
.tables
pragma table_info(imgStorage);
.schema imgStorage 
.headers on
.mode column
.timer on
```

PostgreSQL
# 速查表 https://github.com/Tarhyru/reference/blob/main/docs/postgres.md
```sh
psql -U postgres -h 192.168.1.5 -p 2506 -d mydb
\l # 列出数据库
\c # 连接数据库
\d # 列出数据表
\d table # 列出数据表详细
```



