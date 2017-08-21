import Vue from 'vue'
import Router from 'vue-router'
import MyRank from '@/components/MyRank/MyRank'
import MyRecommend from '@/components/MyRecommend/MyRecommend'
import MySearch from '@/components/MySearch/MySearch'
import MySinger from '@/components/MySinger/MySinger'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      component: MyRank
    },
    {
      path: '/recommend',
      component: MyRecommend
    },
    {
      path: '/search',
      component: MySearch
    },
    {
      path: '/singer',
      component: MySinger
    }
  ]
})
