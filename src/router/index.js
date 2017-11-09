import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import header from '@/components/header'
import recruit from '@/components/recruit'
import JoinUs from '@/components/JoinUs'
import companyIntro from '@/components/companyIntro'
<<<<<<< HEAD
import ContactUs from '@/components/ContactUs'
import FQA from '@/components/FQA'

=======
import aboutUs from '@/components/aboutUs'
>>>>>>> e8c25adae1e924d03fa41c9ddb9674590969b59f
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
<<<<<<< HEAD
     {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
     {
      path: '/FQA',
      name: 'FQA',
      component: FQA
=======
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
>>>>>>> e8c25adae1e924d03fa41c9ddb9674590969b59f
    }

  ]
})
