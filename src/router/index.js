import Vue from 'vue'
import Router from 'vue-router'
import emptyPage from '@/views/app/empty-page'
import index from '@/views/index/index'

//列表
import tableList from '@/views/list/table-list'
import tableList2 from '@/views/list/table-list2'
import cardList from '@/views/list/card-list'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '*',
      component: emptyPage
    }
  ]
})
