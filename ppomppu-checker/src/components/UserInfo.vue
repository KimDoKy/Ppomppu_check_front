<template>
  <div>
    <h2>User Info</h2>
    <table>
      <tr>
        <th>username</th>
        <th>email</th>
      </tr>
      <tr>
        <td><input type="text" v-model="userInfo.username" /></td>
        <td>{{userInfo.email}}</td>
        <button class="btn" @click.prevent="changeUsername(userInfo.username)">change user name</button>
      </tr>
    </table>
      <router-link class="btn" to="/change_pw">Change PW</router-link>
      <router-link class="btn" to="/membership-withdrawal">Membership Withdrawal</router-link>
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
    },
    changeUsername(userInfo) {
      auth.changeUsername(userInfo)
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.table {
  border: 1px solid;
}
</style>
