import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import UserInfo from '../components/UserInfo.vue'
import ContentList from '../components/ContentList.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/userinfo', component: UserInfo, beforeEnter: requireAuth },
    { path: '/list', component: ContentList, beforeEnter: requireAuth },
    { path: '*', component: NotFound }
  ]
})

export default router
