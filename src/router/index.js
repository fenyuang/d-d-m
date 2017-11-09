import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import header from '@/components/header'
import JoinUs from '@/components/JoinUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/JoinUs',
      name: 'JoinUs',
      component: JoinUs
    }
  ]
})
