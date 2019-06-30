<template lang="html">
  <div>
    <h2>password reset test page</h2>

    <form @submit.prevent="onSubmit">
      <div class="password1">
        <label for="password">Reset Password</label>
        <input class="form-control" type="password" v-model="password1" />
      </div>
      <div class="password2">
        <label for="password">Check Password</label>
        <input class="form-control" type="password" v-model="password2" />
      </div>
      <button type="submit" class="btn" :class="{'btn-success': !invalidForm}" :disabled="invalidForm">Login</button>
      <p class="error" v-if="error">{{error}}</p>
      <p class="success" v-if="success">{{success}}</p>
    </form>

  </div>

</template>

<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      uid:'',
      password1: '',
      password2: '',
      token: '',
      error: '',
      success: ''
    }
  },
  computed: {
    invalidForm() {
      return !this.password1 || !this.password2
    }
  },
  methods: {
    ...mapActions([
      'PASS_RESET'
    ]),
    onSubmit() {
      this.PASS_RESET({
        uid:this.$route.params.uid,
        token:this.$route.params.token,
        pw1:this.password1,
        pw2:this.password2})
        .then(data => {
          this.success = "패스워드 변경이 되었습니다.",
          this.$router.push('/')
        })
        .catch(err => {
          this.error = "입력하신 두 패스워드가 일치하지 않거나 8글자 이하입니다."
        })
    }
  }
}
</script>

<style>
</style>
