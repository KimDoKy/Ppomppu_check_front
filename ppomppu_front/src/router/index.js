import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

const Login = { template: '<div>Login Page</div>' }
const UserInfo = { template: '<div>User Info Page</div>' }
const ContentList = { template: '<div>Content List</div>' }
const NotFound = { template: '<div>Page not found</div>' }

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '/login', component: Login },
    { path: '/userinfo', component: UserInfo },
    { path: '/list', component: ContentList },
    { path: '*', component: NotFound }
  ]
})

export default router
