import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase()
})
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
})
