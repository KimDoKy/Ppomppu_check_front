<template>
  <div>
    <h2>User Info</h2>
    <table>
      <tr>
        <th>username</th>
        <th>email</th>
      </tr>
      <tr>
        <td>{{userInfo.username}}</td>
        <td>{{userInfo.email}}</td>
      </tr>
    </table>
      <router-link class="btn" to="/change_pw">Change PW</router-link>
  </div>
</template>

<script>
import {auth} from '../api'
import {mapState, mapActions} from 'vuex'

export default {
  data() {
    return {
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  methods: {
    ...mapActions([
      'ADD_UESRINFO'
    ]),
    fetchData() {
      this.ADD_UESRINFO()
    }
  }
}
</script>

<style>
.table {
  border: 1px solid;
}
</style>
