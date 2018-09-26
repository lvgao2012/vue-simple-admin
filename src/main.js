import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'reset-css'
import '@/assets/css/global.styl'
import '@/assets/css/common.styl'


import '@/libs/mockdata.js'
import utils from '@/libs/utils.js'
import api from '@/libs/api/index.js'
import toaster from '@/libs/toaster'
Vue.prototype.$utils = utils
Vue.prototype.$api = api
Vue.prototype.$toaster = toaster

Vue.use(ElementUI)


// 引入vue-amap
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 高德的key
    key: '7b7631ed1ef64991f5f49156f73a7daf',
    // 插件集合
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor',
        'AMap.Geocoder',
        'AMap.Geolocation'
    ],
    // 高德 sdk 版本，默认为 1.4.4
    v: '1.4.4'
});



Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
})