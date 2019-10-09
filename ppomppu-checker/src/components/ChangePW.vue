<template lang="html">
  <div>
    <h2>Change Password</h2>

    <form @submit.prevent="onSubmit">
      <div class="password1">
        <label for="password">Change Password</label>
        <input class="form-control" type="password" v-model="password1" />
      </div>
      <div class="password2">
        <label for="password">Check Password</label>
        <input class="form-control" type="password" v-model="password2" />
      </div>
      <button type="submit" class="btn" :class="{'btn-success': !invalidForm}" :disabled="invalidForm">Submit</button>
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
      password1: '',
      password2: '',
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
      'CHANGE_PASSWORD'
    ]),
    onSubmit() {
      this.CHANGE_PASSWORD({
        pw1:this.password1,
        pw2:this.password2})
        .then(data => {
          this.success = "패스워드가 변경 되었습니다.",
          this.error = ""
        })
        .catch(err => {
          this.error = "입력하신 두 패스워드가 일치하지 않거나 8글자 이하입니다."
        })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
