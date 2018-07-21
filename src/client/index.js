import Vue from 'vue'

import App from './App'
import router from './router'

Vue.config.debug = true

new Vue({
  el: '#app',
  router,
  render (createElement) {
    return createElement(App)
  }
})
