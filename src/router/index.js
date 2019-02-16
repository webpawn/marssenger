import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Product from '@/pages/product/Product'
import Serve from '@/pages/serve/Serve'
import Register from '@/pages/register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/product',
      name:'Product',
      component:Product
    },
    {
      path:'/serve',
      name:'Serve',
      component:Serve
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
  ]
})
