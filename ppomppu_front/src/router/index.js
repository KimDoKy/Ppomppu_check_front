import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import UserInfo from '../components/UserInfo.vue'
import ContentList from '../components/ContentList.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/userinfo', component: UserInfo },
    { path: '/list', component: ContentList },
    { path: '*', component: NotFound }
  ]
})

export default router
