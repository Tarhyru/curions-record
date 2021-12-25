# 文件状态

fs.stat

```js
var Stats =  {
  dev: 2064,
  mode: 33188,
  nlink: 1,
  uid: 1000,
  gid: 1000,
  rdev: 0,
  blksize: 4096,
  ino: 694554,
  size: 44386,
  blocks: 88,
  atimeMs: 1654741571773,
  mtimeMs: 1649995461522,
  ctimeMs: 1654741571760,
  birthtimeMs: 1649995461411.5613,
  atime: 2022-06-09T02:26:11.773Z,
  mtime: 2022-04-15T04:04:21.522Z,
  ctime: 2022-06-09T02:26:11.760Z,
  birthtime: 2022-04-15T04:04:21.412Z
}

// atime: access time 文件读取或执行时间，大多数情况下不会触发（具体看操作系统）
// ctime: change time 文件状态改变时间
// mtime: modify time 文件内容修改时间
// birthtime: 文件创建时间

// 手动更改文件状态
fs.utimes(path,atime,mtime,calbcak)
// 这个会触发ctime修改
```
