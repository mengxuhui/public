/*
 * @@Description: koa服务
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-09-09 11:28:37
 * @LastEditTime: 2020-09-09 11:29:51
 * @LastEditors: i.mengxh@gmail.com
 */
const Koa = require('koa');
const webpack = require('webpack'); // webpack模块

const config = require('./webpack.config'); // 开发环境模块
// 中间件容器，把webpack处理后的文件传递给一个服务器
const devMiddleware = require('./devMiddleware');
// 在内存中编译的插件，不写入磁盘来提高性能
const hotMiddleware = require('./hotMiddleware');
const compiler = webpack(config);

const app = new Koa();

app.use(devMiddleware(compiler, {
    publicPath: config.output.publicPath // '/'
}));

app.use(hotMiddleware(compiler));

app.listen(3000);

console.log('lostening on port 3000');