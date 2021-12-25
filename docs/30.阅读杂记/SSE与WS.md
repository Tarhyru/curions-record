# 服务器推送

SSE:Server-sent events,服务器推送
单向（服务器->客户端），基于 http（受限于浏览器请求个数）
本质是长链接规范
兼容性不好，但可以处理:<https://github.com/Yaffle/EventSource>
简单，但相对扩展性较弱

```js
// node 下的服务器推送
import { PassThrough, Transform } from 'stream';

// 原理说明
// koa router
router.get('/ping', async function(ctx) {
    // 超时时间设置
    // ctx.request.socket.setTimeout(0);
    // 优化吞吐量
    // ctx.req.socket.setNoDelay(true);
    // 设置保持连接探测
    // ctx.req.socket.setKeepAlive(true);

    ctx.set({
        'Content-Type': 'text/event-stream',
        // 不加no-transform的话可能会在转发时被压缩
        'Cache-Control': 'no-cache, no-transform',
        // 不走反向代理的缓存
        'X-Accel-Buffering': 'no',
        Connection: 'keep-alive'
    });

    const stream = new PassThrough();
    const interval = setInterval(() => {
        // \n 单条信息换行 \n\n 单条信息结束
        // 指定信息的id
        stream.write(`id: 1\n`);
        // 指定信息的类型（type）
        stream.write(`event: message\n`);
        // 实际响应的数据
        stream.write(`data: {"time":"${new Date().getTime()}"}\n\n`);
    }, 1000);
    stream.on('close', () => {
        clearInterval(interval);
    });

    ctx.status = 200;
    ctx.body = stream;
});

// 简易封装
class SSEStream extends Transform {
    id = 1;
    constructor() {
        super({
            writableObjectMode: true
        });
    }

    _transform({ data, type = 'message', id, ...other }, _encoding, done) {
        if (!id) {
            id = this.id++;
        }
        data = data ? { ...data, ...other } : { ...other };
        this.push(`id: ${id}\n`);
        this.push(`event: ${type}\n`);
        this.push(`data: ${JSON.stringify(data)}\n\n`);
        done();
    }
}

main.get('/ping', async function(ctx) {
    ctx.set({
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        'X-Accel-Buffering': 'no',
        Connection: 'keep-alive'
    });

    const stream = new SSEStream();
    const interval = setInterval(() => {
        stream.write({
            time: new Date().getTime()
        });

        stream.write({
            type: 'other',
            data: {
                a: 1,
                b: 2,
                c: 3
            }
        });
    }, 1000);
    stream.on('close', () => {
        clearInterval(interval);
    });

    ctx.status = 200;
    ctx.body = stream;
});
```

客户端监听:

```js
const source = new EventSource('/api/ping');
source.onopen = () => console.log('Connected');
source.onerror = console.error;
// 对应type 为 message（默认，不带type都为message）
source.onmessage = console.log;

source.addEventListener('other', function(event) {
    var payload = JSON.parse(event.data);
    console.log(payload);
    console.log(event.type); // other
    console.log(event.lastEventId); // id
});
```

WS:webSocket
双向，基于 ws
全双工通信
兼容性好
功能复杂可扩展性好
