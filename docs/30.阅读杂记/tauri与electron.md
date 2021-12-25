# 使用 web 技术作为展示层的桌面端跨平台框架

electron:<https://github.com/electron/electron>.  
tauri:<https://github.com/tauri-apps/tauri>.
教程:<https://www.zhihu.com/column/c_1519079232848785408>.

electron: 基于 Nodejs + chromium 使用 chromium 作为展示层，优点在于相对成熟上手简单，同时页面展示的兼容性比较好，缺点在于打包大，启动慢，占用比较高。
tauri: 基于 Rust + webview（使用 javascript 作为中间层） 优点在于打包小，启动快，占用低，缺点在于可能会有的兼容性问题，以及如果提供的 Native 能力不满足需求需要基于 Rust 的原生开发。

有很多将前端技术应用于桌面端的项目，electron 的成功在于，使用 chromium 将各端的兼容性磨平同时提高了开发效率，代价则是运行的资源消耗。
而 tauri 相对于 electron 的优势则是性能方面的，同时丰富了 Rust 桌面端的开发生态，代价是一定的兼容性和开发成本。

历史的螺旋上升.jpg

### 关于 tauri 的代价

-   基于 webview:
    1. windows webview 基于 IE 之后基 Edge（edge-html），新版 webview2 基于新版 Edge（chromium）.
    2. MacOs webview 基于 webkit framework（chromium）

tauri windows 基于 webview2 兼容到 windows 7,虽然大规模推送过，但如果应用于生产估计还是需要附带 webview2 的安装包（大概 100 多 mb）

-   Native 能力：基于 Rust 提供，可以使用 javascript 调用（bridge 等模式）扩展的话需要基于 Rust 做原生开发。个人感觉这点，两家半斤八两，但 electron 相关的生态目前可能更为成熟（2021）

当前 tauri 可能更适合用来做小工具和战未来，而 electron 更适合大型项目以及快速出货。
