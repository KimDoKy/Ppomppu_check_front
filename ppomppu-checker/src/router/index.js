import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Registration from '../components/Registration.vue'
import Login from '../components/Login.vue'
import Oauth from '../components/Oauth.vue'
import UserInfo from '../components/UserInfo.vue'
import NotFound from '../components/NotFound.vue'
import store from '../store'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  store.getters.isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/registration', component: Registration },
    { path: '/login', component: Login },
    { path: '/userinfo', component: UserInfo, beforeEnter: requireAuth },
    { path: '/oauth', component: Oauth },
    { path: '*', component: NotFound }
  ]
})

export default router
