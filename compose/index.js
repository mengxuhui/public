/*
 * @@Description: 服务端代码
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-06-08 18:19:08
 * @LastEditTime: 2020-06-08 18:30:39
 * @LastEditors: i.mengxh@gmail.com
 */

const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log('hello world');
    const a = await next();
    console.log(a);
});

// 第二个中间件不会被执行
app.use(async (ctx, next) => {
    console.log('hello javascript');
    await next();
    console.log(2);
    return "0000";

});


// 第二个中间件不会被执行
app.use(() => {
    console.log('hello HTML');
    return "00000999";
});

app.listen(9999);