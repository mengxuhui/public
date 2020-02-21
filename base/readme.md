# 目录说明
- cdn 

    对外使用 cdn => lvshi.sogoucdn.com => 55.88
    或者测试使用  cdn => dev.kf.sogou.com => 166
- osscdn

    对内使用 osscdn => img.oc.sogou-inc.com => 180,208
# 发布命令
在 166 上面的 /data/deploy/nodeapp/base 上面推送
或者本地也行
```bash
// 推送dev环境的cdn
npm run devcdn 
// or
sh push_to_cdn_dev.sh  

// 推送对外online环境的cdn
npm run cdn
// or
sh push_to_cdn.sh 

// 推送对内oss环境的cdn
npm run osscdn
// or
sh push_to_osscdn.sh 

```

# 项目使用
## cdn路径

- dev环境

http://dev.kf.sogou.com/cdn/base

- online环境

http://lvshi.sogoucdn.com/base

- oss环境

http://img.oc.sogou-inc.com/cdn/base

## 项目开发

由于cdn不能匹配端口号URI，需要在本地开发的时候将启动端口代理到80端口上，注意本地开发配置的 API 的端口去掉。 

mac代理80端口方法

- 随便进入一个可写的路径，执行这两行命令。  80端口的请求就被代理代理到19999了，19999是本地server.js 监听的端口
```bash
mkfifo 2way
sudo nc -l 80 0<2way | nc 127.0.0.1 19999 1>2way
```

- https://www.jianshu.com/p/26ae3c5b7155 

# 静态文件预处理

后面有需要可以在下面的方法中加处理逻辑

preCommonJS

preLibJS

preCSS