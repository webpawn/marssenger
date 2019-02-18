import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Product from '@/pages/product/Product'
import Serve from '@/pages/serve/Serve'
import Register from '@/pages/register/Register'
import No404 from '@/pages/no404/No404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:'/home'
    },
    {
      path: '/home',
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
    {
      path: '**',   // 错误路由
      name:'No404',
      component:No404
    },
  ]
})
