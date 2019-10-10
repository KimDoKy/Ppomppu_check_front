<template lang="html">
  <div>
    <h2>Membership Withdrawal</h2>
    <p>정말로 탈퇴 하시겠습니까?</p>
    <br>
    <p>패스워드를 입력해주세요.</p>

    <form @submit.prevent="onSubmit">
      <div class="password">
        <label for="password">Check Password</label>
        <input class="form-control" type="password" v-model="password" />
      </div>
      <button type="submit" class="btn">submit</button>
      <p class="error" v-if="error">{{error}}</p>
    </form>
  </div>

</template>

<script>
import {auth} from '../api'
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      error: "",
      success: "",
      password: ""
    }
  },
  methods: {
    ...mapMutations([
      'LOGOUT'
    ]),
    onSubmit() {
      auth.MembershipWithdrawal(this.password)
        .then(data => {
          this.$router.push('/')
        })
        .catch(err => {
          this.error = "패스워드를 확인하세요."
        })
      this.LOGOUT()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
