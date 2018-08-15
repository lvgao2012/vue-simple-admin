# vue-simple-admin

## 简介
  vue-simple-admin，如其名，做一个简单易上手的后台管理系统。将结合各种组件模拟各种实战场景页面，如登录、富文本、地图、图表、列表展示、详情展示、滚动条、无限加载、轮播、弹窗等等。

  从简单到复杂，后期将会逐渐提升难度，体验真实战，自己造组件、复杂场景实现、权限控制等等

  mockjs拦截api请求，真实模拟api返回值
  
  项目为自由发挥，想到哪做到哪，界面也是随意出比较粗糙，莫嫌丑，从无到有，从有到优，希望小伙伴一起玩耍

  项目预览：https://lvgao2012.github.io/vue-simple-admin/

## 开发
  个人使用vscode进行开发，配置 editorconfig、prettierrc.json 美化代码缩进、stylus样式、以及js格式，保证风格统一
<p>
<img style="width:100%" src="https://lvgao2012.github.io/vue-simple-admin/static/image/screen/login.png">
</p>
<p>
<img style="width:100%" src="https://lvgao2012.github.io/vue-simple-admin/static/image/screen/index.png">
</p>
<p>
<img style="width:100%" src="https://lvgao2012.github.io/vue-simple-admin/static/image/screen/article-list.png">
</p>
<p>
<img style="width:100%" src="https://lvgao2012.github.io/vue-simple-admin/static/image/screen/article-edit.png">
</p>
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8088
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 文档目录划分
```
    ├── build       // 构建配置  Vue-cli      *** 开发忽略 ***
    ├── config      // 构建配置  Vue-cli      *** 开发忽略 ***
    ├── dist        // 构建命令生成静态资源     *** 开发忽略 ***
    ├── node_modules    // node 包           *** 开发忽略 *** 
    ├── index.html  // App 首页
    ├─src
    │  ├── App.vue     // 入口组件
    |  ├── main.js     // 入口配置文件
    │  ├─assets   //文件资源  样式、图片、iconfont图标
    │  ├─components // 非View级别组件存放
    │  ├─filters  // Vue filter 过滤
    │  ├─mixins   // Vue mixin 混合
    │  ├─libs
    │  │      api    //接口请求
    │  │      url.js   //api请求地址
    │  │      mockdata.js   //mock数据构造
    │  │      http.js   //http请求封装
    │  │      toaster.js  //弹窗信息
    │  │      utils.js  //数据验证、公共函数封装
    │  ├─store  //vuex 后期再用
    │  │  └─modules
    │  │          user.js //登录信息
    │  └─views  // App views 路由页面  对应导航 页面级组件
    │      ├─app  //修改密码、左导航、登录页、顶部条 页面全局使用
    │      ├─other //各种页面
    └─static  //静态资源 不会被编辑
        │  update.html  //IE浏览器升级提醒
        └─image //其他静态资源图片
```
