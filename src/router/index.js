import Vue from 'vue'
import Router from 'vue-router'
import  tophome from '@/components/tophome'
import  page from '@/components/page'
import  list from '@/components/list'
import  about from '@/components/about'
import  api from '@/components/api'
import  info from '@/components/info'
import  getstart from '@/components/getstart'
import  signin from '@/components/signin'
import  signup from '@/components/signup'
import  wdxx from '@/components/wdxx'
import  username from '@/components/username'
import  theme from '@/components/theme'
import  bjzt from '@/components/bjzt'
import  collections from '@/components/collections'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: tophome
    },
    {
      path: '/info:id?',
      name: 'info',
      component: info
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/wdxx',
      name:'wdxx',
      component: wdxx
    },
    {
      path: '/username:xm?',
      name:'username',
      component: username
    },
    {
      path: '/api',
      component: api
    },
    {
      path: '/collections',
      name:'collections',
      component: collections
    },
    {
      path: '/getstart',
      component: getstart
    },
    {
      path: '/signin',
      component: signin
    },
    {
      path: '/signup',
      component: signup
    },
    {
      path: '/theme',
      component: theme
    },
    {
      path: '/topic/:id?/bjzt',
      component: bjzt
    },
    {
      path: '/:list',
      component: list
    },
    {
      path:"/page/:id?",
      name:'page',
      component:page
    },

  ]
})
