<template>
  <div>
    <h2>User Info</h2>
    <table>
      <tr>
        <th>username</th>
        <th>email</th>
      </tr>
      <tr>
        <td>{{userData.username}}</td>
        <td>{{userData.email}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import {auth} from '../api'

export default {
  data() {
    return {
      userData: {}
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      auth.userInfo()
        .then(result => this.userData = result)
    }
  }
}
</script>

<style>
.table {
  border: 1px solid;
}
</style>
