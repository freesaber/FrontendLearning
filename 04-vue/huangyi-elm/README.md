# vue2.5高仿外卖饿了么APP
课程地址：[https://coding.imooc.com/class/74.html](https://coding.imooc.com/class/74.html)


以该视频1.0版本为基础，使用vue-cli3.9.3脚手架开发，没有按照视频代码进行编写。resource目录中的文件是视频课程原始资源文件，data.json是模拟数据结构。

1. mock目录和vue-sell目录下都没有包，需要分别进入/mock和vue-sell下面，通过yarn install 或者 npm install安装包。
2. 调试前，先进入/mokc/bin/，执行node www，开启数据模拟服务。然后在vue-sell目录下执行yarn serve或npm run serve运行项目。
3. 发布时，先到vue-sell中执行yarn build或npm run build,拷贝/vue-sell/dist目录下的所有文件到/mock/public下面，然后只需启动Express，就可以在 http://localhost:8080 查看结果。

发布地址：[http://huangyielm.freesaber.cn](http://huangyielm.freesaber.cn)
