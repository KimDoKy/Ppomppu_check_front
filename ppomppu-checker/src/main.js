import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
