<template>
  <div>
    <router-link to="/">Home</router-link>
    <a href="" v-if="isAuth" @click.prevent="logout">Logout</a>
    <router-link v-else to="/login">Login</router-link>
    <router-link to="/UserInfo">UserInfo</router-link>
  </div>
</template>

<script>
import {setAuthInHeader} from '../api'
import {mapGetters, mapMutations} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isAuth'
    ]),
  },
  methods: {
    ...mapMutations([
      'LOGOUT'
    ]),
    logout() {
      this.LOGOUT()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
