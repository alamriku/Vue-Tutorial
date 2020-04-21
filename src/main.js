import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import {routes} from './route'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {
      x: 0, y: 0
    }
  }
})
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,

  render: h => h(App)
})
