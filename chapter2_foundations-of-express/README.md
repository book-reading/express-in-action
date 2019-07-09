# Express 基础

Express 提供了 4 个主要特性：

- 中间件
- 路由
- 对 request 与 response 对象的扩展
- 视图
  
## 中间件

中间件并不是 Express 框架中特有的，比如：Python 的 Django，PHP 的 Laravel，Ruby 的 Rack，等等。

**注意**：`app.listen(3000)` 等同于 `http.createServer(app).listen(3000)`。

![中间件栈](../assets/fig_3-2.png)

![中间件中的请求](../assets/fig_3-3.png)

中间件放置顺序，大致为：

1. 日志
2. 静态文件（配置哪些静态文件扩展名、文件名，等信息直接返回）
3. 认证授权
4. ...

### 实用第三方中间件

- [connect-ratelimit](https://github.com/dharmafly/connect-ratelimit)：连接请求压制
- [helmet](https://github.com/helmetjs/helmet)：帮助我们添加 HTTP 报文头以协助抵制某些类型的攻击
- [cookie-parser](https://github.com/expressjs/cookie-parser)：解析浏览器 cookie
- [response-time](https://github.com/expressjs/response-time)：发送 X-Response-Time 报文头供应用性能调试
