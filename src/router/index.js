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
import aboutUs from '@/components/aboutUs'

=======
import fqa from '@/components/fqa'
import ContactUs from '@/components/ContactUs'
import aboutUs from '@/components/aboutUs'
>>>>>>> f6b83c7ead298ba22f702474c79967671a71ec0a
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
<<<<<<< HEAD
    {
      path: '/FQA',
      name: 'FQA',
      component: FQA
    },
=======
>>>>>>> f6b83c7ead298ba22f702474c79967671a71ec0a
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
<<<<<<< HEAD
=======
    },
    {
      path: '/fqa',
      name: 'fqa',
      component: fqa
>>>>>>> f6b83c7ead298ba22f702474c79967671a71ec0a
    }

  ]
})
