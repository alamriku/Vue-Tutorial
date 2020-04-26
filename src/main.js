import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import axios from 'axios'

axios.defaults.baseURL = 'https://vue-axios-8138f.firebaseio.com'

axios.interceptors.request.use(config => {
  console.log(config)

  return config
})

axios.interceptors.response.use(res => {
  console.log(res)

  return res
})
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
