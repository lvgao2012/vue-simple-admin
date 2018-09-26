import Vue from 'vue'
import Router from 'vue-router'
import emptyPage from '@/views/app/empty-page'
import index from '@/views/index/index'

//列表
import tableList from '@/views/list/table-list'
import tableList2 from '@/views/list/table-list2'
import cardList from '@/views/list/card-list'
//文章
import articleList from '@/views/article/article-list'
import articleInfo from '@/views/article/article-info'
import articleEdit from '@/views/article/article-edit'

//地图
import vueamap from '@/views/map/amap.vue'

Vue.use(Router)
    //github-pages 无法使用history模式，开发可使用
export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            base: __dirname,
            component: index
        },
        {
            path: '/index',
            component: index
        },
        {
            path: '/list/table',
            component: tableList
        },
        {
            path: '/list/table2',
            component: tableList2
        },
        {
            path: '/list/card',
            component: cardList
        },
        {
            path: '/article/list',
            component: articleList
        },
        {
            path: '/article/edit/:id',
            component: articleEdit
        },
        {
            path: '/article/info/:id',
            component: articleInfo
        },
        {
            path: '/map/amap',
            component: vueamap
        },
        {
            path: '*',
            component: emptyPage
        }
    ]
})