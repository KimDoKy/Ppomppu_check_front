import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import moment from 'moment'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('YY/MM/DD')
  }
})
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
