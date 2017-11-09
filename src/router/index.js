import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import header from '@/components/header'
import recruit from '@/components/recruit'
import JoinUs from '@/components/JoinUs'
import companyIntro from '@/components/companyIntro'
import fqa from '@/components/fqa'
import ContactUs from '@/components/ContactUs'
import aboutUs from '@/components/aboutUs'
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
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: recruit
    },
    {
      path: '/companyIntro',
      name: 'companyIntro',
      component: companyIntro
    },
     {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/fqa',
      name: 'fqa',
      component: fqa
    }

  ]
})
