# 初衷
验证前端能不能实现类似，同一个网站，多个tab一起退出时登出的需求

浏览器离开事件:
onbeforeunload: 发生在 onunload 之前，可以阻塞后续的
onunload: 发生在页面关闭的最后阶段
这这两个周期中，异步操作均不可靠

理想来说，在这两个周期调后台接口处理会比较容易

如果需要纯前端实现
可以考虑操作 localStorage 标记
比如: 页面进入 storage +1
      离开 storage -1 同时 记录时间

下次进入: 如果 storage 为 0 且 时间间隔长于一定时间 则登出

如果一定需要在离开时登出，则需要考虑刷新时提供快速登陆的手段

于是想验证下页面关闭后是否还有办法执行代码，遂尝试验证 webWorker 相关
只说结论：均可以在 onbeforeunload 中正常触发，但后续的运行比如定时器在页面关闭同时会清理
只依赖 storage 多tab下会遇到并发问题，storage在当前页面是同步的，但不同页面间是异步的
(!在实际操作中如果只是简单操作很少见，几乎只有正好在临近的几毫秒中执行时才会发生，取决于取值到赋值中间操作的执行时间)
sharedWorker 在刷新时会关闭再打开
结合 sharedWorker 和 storage 可以在一定程度上解决 storage 的并发问题
参考:<https://blog.icehoney.me/posts/2019-02-28-localstorage-mutex/> 
跨页面通信:<https://juejin.cn/post/6844903811232825357> 


需求的简易实现:<https://www.cnblogs.com/miam/p/11387779.html>

其它相关:
<https://developer.mozilla.org/en-US/docs/Web/API/Web_Locks_API> 
<https://github.com/bitovi/web-locks-polyfill>
<https://github.com/chieffancypants/fast-mutex>

localStorage 的竞争锁 原理设计
```js
// 设置 x y 两个变量结合 key 作为锁
// 1、 设置 x
// 2、 获取 y 存在 y 则 重新竞争锁
// 3、 不存在 y 设置 y 并获取 x
// 4、 x 与 自己设置的相等 则 确定获取锁成功
// 5、 不相等则 等待 一个时间 再获取 y判断相等，相等则 获取成功，不等则重新竞争锁
```
根据 fast-mutex 的 issuse 在chrome下多tab 似乎不可靠，chrome localStorage 
web-locks-polyfill 可以实现类似的功能

chrome localStorage tab两边同时设置，在宏任务执行的情况下，数据同步会有间隔
多 tab 之间执行 storage 数据同步需要 至少 5ms
推测 如果放在微任务中，storage 执行环境或者顺序会在多tab中按一定规则统一
上述操作不能保证在 onbeforeunload 中正确执行，因为退出后定时器是不可靠的

# worker 的作用

webworker 独立于页面的进程适合处理一些耗时操作
console.log 可以用于调试

```js
// worker
onmessage = function(e) {
    console.log('Worker: Message received from main script');
    const result = e.data[0] * e.data[1];
    if (isNaN(result)) {
        postMessage('Please write two numbers');
    } else {
        const workerResult = 'Result: ' + result;
        console.log('Worker: Posting message back to main script');
        postMessage(workerResult);
    }
};

// main
// 这里可以是地址，也可以是 blob
const myWorker = new Worker('./worker.js');

first.onchange = function() {
    myWorker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
};

myWorker.onmessage = function(e) {
    result.textContent = e.data;
    console.log('Message received from worker');
};
```

worker 简单不依赖打包工具的一种写法,不适用于 sharedWorker 因为每次加载的 blob 都不一样

```js
const worker = () => {
    self.onmessage = function(e) {
        console.log('Worker: Message received from main script');
        const result = e.data[0] * e.data[1];
        if (isNaN(result)) {
            postMessage('Please write two numbers');
        } else {
            const workerResult = 'Result: ' + result;
            console.log('Worker: Posting message back to main script');
            self.postMessage(workerResult);
        }
    };
};

const code = worker.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

const blob = new Blob([code], { type: 'application/javascript' });
const worker_script = URL.createObjectURL(blob);

export default worker_script;
```

sharedWorker 可以多页面共享的进程，适合做一些并发操作或者跨页面通信

相对标准的加载方式，也适用 webworker

```js
const workerObj = new SharedWorker('/src/pages/Study/shader.js?worker_file', {
    type: 'module'
});
```

```js
// worker
onconnect = e => {
    const port = e.ports[0];
    console.log('check:', e.ports, port);
    port.addEventListener('message', e => {
        console.log('check:', e.data);
        if (e.data === 'add') {
            add();
        }
        if (e.data === 'remove') {
            remove();
        }
        port.postMessage(num);
    });
    port.start();
};

// main
workerObj.port.start();
workerObj.port.onmessage = function(e) {
    let num = e.data;
    navigator.sendBeacon(
        '/api/log',
        JSON.stringify({
            some: num
        })
    );
    localStorage.setItem('__test_num', String(num));
};
workerObj.port.postMessage('add');
```

# Tip

sharedWorker chrome 下的调试方法
chrome://inspect/#workers
