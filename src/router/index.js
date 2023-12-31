import Vue from 'vue'
import VueRouter from 'vue-router'
import routeModules from './modules'

import { HOME_PATH } from './constants'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: HOME_PATH
  },
  ...routeModules
]

export const router = new VueRouter({
  base: process.env.NODE_ENV === 'production' ? '/projectTemplate/' : '.',
  mode: 'history',
  routes
})
