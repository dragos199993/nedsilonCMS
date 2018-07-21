import Vue from 'vue'
import Router from 'vue-router'
import Hello from './components/Hello'

Vue.use(Router)

const router = new Router({
  routes: [
    { name: 'hello', path: '/hello', component: Hello }
  ]
})

export default router
