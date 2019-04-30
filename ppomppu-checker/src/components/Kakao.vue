<template>
  <div id="Kakao">
    <KakaoLogin
      :api-key="kkApiKey"
      image="kakao_account_login_btn_medium_narrow"
      :on-success=onSuccess
      :on-failure=onFailure
      />
  </div>
</template>
 
<script>
import KakaoLogin from 'vue-kakao-login'
import {kkApiKey} from '../.secret/config'
import {auth} from '../api'
import {mapActions} from 'vuex'

export default {
  name: 'Kakao',
  data() {
    return {
      kkApiKey: kkApiKey,
      rPath: ''
    }
  },
  components: {
    KakaoLogin
  },
  created() {
    this.rPath = this.$route.query.rPath || '/'
  },
  methods: {
    ...mapActions([
      'SOCIAL_LOGIN'
    ]),
    onSuccess(data) {
      this.SOCIAL_LOGIN({access_token:data.access_token})
        .then(data =>
           this.$router.push(this.rPath))
    },
    onFailure(data) {
      console.log(data)
      console.log('failure')
    }
  }
}
</script>
 
<style>
</style>