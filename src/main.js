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
Vue.prototype.$utils = utils
Vue.prototype.$api = api

Vue.use(ElementUI)

Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
})