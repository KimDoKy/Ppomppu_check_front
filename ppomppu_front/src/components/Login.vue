<template>
  <div>
    <h2>Log in</h2>
    <form @submit.prevent="onSubmit">
      <div class="email">
        <label for="email">Email</label>
        <input class="form-control" type="text" v-model="email" autofocus placeholder="test@test.com" />
      </div>
      <div class="password">
        <label for="password">Password</label>
        <input class="form-control" type="password" v-model="password" />
      </div>
      <button type="submit" class="btn" :class="{'btn-success': !invalidForm}" :disabled="invalidForm">Login</button>
      <p class="error" v-if="error">{{error}}</p>
    </form>
    </div>
</template>

<script>
import {auth, setAuthInHeader} from '../api'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      rPath: ''
    }
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password
    }
  },
  created() {
    this.rPath = this.$route.query.rPath || '/'
  },
  methods: {
    onSubmit() {
      auth.login(this.email, this.password)
        .then(data => {
          localStorage.setItem('token', data.key)
          setAuthInHeader(data.key)
          this.$router.push(this.rPath)
        })
        .catch(err => {
          this.error = "로그인 정보가 일치하지 않습니다."
        })
      }
    }
}
</script>

<style>
.login {
  width: 400px;
  margin: 0 auto;
}
.error {
  color: #f00;
}
</style>
