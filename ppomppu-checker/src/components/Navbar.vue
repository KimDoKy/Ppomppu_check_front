<template>
  <div>
  <b-navbar class="nav" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">뽐뿌 uPDATE cHECKER</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-nav-item-dropdown v-if="isAuth" right>
        <template class="slot" slot="button-content"><em>User</em></template>
          <b-dropdown-item to="/UserInfo">Profile</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-navbar-nav>
        <b-nav-item v-if="isAuth" @click.prevent="logout">Logout</b-nav-item>
        <b-nav-item v-else to="/login">login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import {setAuthInHeader, auth} from '../api'
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
      auth.logout(localStorage.token)
      this.LOGOUT()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
em {
  color: #fff
}
</style>
