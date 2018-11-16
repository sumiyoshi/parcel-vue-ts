import Vue from 'vue'
import Router from 'vue-router'
import Home from 'Presenter/Home.vue'
import Counter from 'Presenter/Counter.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    }
  ]
})
