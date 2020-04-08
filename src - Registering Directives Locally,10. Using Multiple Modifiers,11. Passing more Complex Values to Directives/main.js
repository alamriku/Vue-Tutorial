import Vue from 'vue'
import App from './App'

Vue.directive('highlight', {
  bind (el, binding, vnode) {
    // a custom directive have
    // argument
    // value
    // modifier

    // el.style.backgroundColor = 'green'
    // el.style.backgroundColor = binding.value
    // binding.arg the arg is coming form v-highlight:background(arg)

    let delay = 0
    if (binding.modifiers['delayed']) {
      delay = 3000
    }
    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay)
  }
})
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
})
