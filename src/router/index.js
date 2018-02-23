import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import cart from '@/components/cart'
import kinds from '@/components/kinds'
import me from '@/components/me'
import product from '@/components/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'he',
      component: layout
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/kinds',
      name: 'kinds',
      component: kinds
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
     path:'/product/:id',
     name: 'product',
     component:product
    }
  ]
})
