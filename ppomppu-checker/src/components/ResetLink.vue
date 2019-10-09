<template lang="html">
  <div>
    <h2>Reset Password</h2>

    <form @submit.prevent="onSubmit">
      <div class="email">
        <label for="email">Email</label>
        <input class="form-control" type="text" v-model="email" autofocus placeholder="test@test.com" />
      </div>
      <button type="submit" class="btn">Submit</button>
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
      email: '',
      error: '',
      success: ''
    }
  },
  methods: {
    ...mapActions([
      'RESET_LINK'
    ]),
    onSubmit() {
      this.RESET_LINK({email:this.email})
        .then(data => {
          this.success = "비밀번호 재설정 이메일이 전송되었습니다.",
          this.error = ""
        })
        .catch(err => {
          this.error = "이메일 형식이 맞지 않습니다."
        })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
