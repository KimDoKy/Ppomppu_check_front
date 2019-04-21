<template>
    <div>
        <h2>가입하기</h2>
    <form @submit.prevent="onRegistration">
        <div class="username">
          <label for="username">User Name</label>
          <input class="form-control" type="text" v-model="username" autofocus placeholder="ex.tester"/>
        </div>
        <div class="email">
          <label for="email">Email</label>
          <input class="form-control" type="text" v-model="email" placeholder="test@test.com"/>
        </div>
        <div class="password">
          <label for="password">Password</label>
          <input class="form-control" type="password" v-model="password1"/>
          <input class="form-control" type="password" v-model="password2">비밀번호 확인</input>
        </div>
        <button type="submit" class="btn">Registration</button>
        <p class="error" v-if="error">{{error}}</p>
    </form>    
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      username: '',
      email: '',
      password1: '',
      password2: '',
      rPath: '',
      error: ''
    }
  },
  created() {
      this.rPath = this.$route.query.rPath || '/'
  },
  methods: {
    ...mapActions([
      'REGISTRATION'
    ]),
    onRegistration() {
      this.REGISTRATION({username:this.username,
                         email:this.email,
                         password1:this.password1,
                         password2:this.password2})
        .then(data => 
          this.$router.push(this.rPath)
        )
        .catch(err => {
            this.error = "가입 정보를 확인해주세요."
        })
      }
  }
}
</script>


<style>

</style>
