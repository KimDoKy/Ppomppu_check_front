<template>
  <div>
    <h2>Log in</h2>
    <hr>
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
    <a id="custom-login-btn" @click.prevent="loginWithKakao()">
    </a>

    <hr>

    <div><br><Kakao /></div>
    
    <hr>

    <router-link class="btn" to="/registration">Registration</router-link>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Kakao from './Kakao.vue'
import Registration from './Registration.vue'

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
    ...mapActions([
      'LOGIN'
    ]),
    onSubmit() {
      this.LOGIN({email:this.email, password:this.password})
        .then(data =>
          this.$router.push(this.rPath)
        )
        .catch(err => {
          this.error = "로그인 정보가 일치하지 않습니다."
        })
      }
  },
  components: { Kakao, Registration }
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
