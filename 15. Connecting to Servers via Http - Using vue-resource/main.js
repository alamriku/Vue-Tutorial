import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

Vue.http.options.root = 'https://vue-http-92ccc.firebaseio.com/data.json'
Vue.http.interceptors.push((request, next) => {
  // in firebase put method override the exiting data
  // if (request.method === 'POST') {
  //   request.method = 'PUT'
  // }
  next(response => {
    let count = Object.keys(response.body).length

    if (count > 1) {
      console.log()
    } else {
      response.json = () => {
        return {
          messages: response.body

        }
      }
    }
  })
})
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
})
