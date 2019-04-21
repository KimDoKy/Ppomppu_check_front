<template>
    <div>
    <form @submit.prevent="onRegistration">
        <div class="username">
          <label for="username">이름</label>
          <input class="form-control" type="text" v-model="username" autofocus placeholder="ex.tester"/>
        </div>
        <div class="email">
          <label for="email">Email</label>
          <input class="form-control" type="text" v-model="email" placeholder="test@test.com"/>
        </div>
        <div class="password">
          <label for="password">비밀번호</label>
          <input class="form-control" type="password" v-model="password1"/>
          <label for="password2">비밀번호 확인</label>
          <input class="form-control" type="password" v-model="password2"/>
        </div>
        <button type="submit" class="btn">가입하기</button>
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
            this.error = "가입 정보를 확인하세요."
        })
      }
  }
}
</script>


<style>

</style>
