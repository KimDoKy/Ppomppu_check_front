<template>
    <div>로그인 중입니다.</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
   created() {
       this.token = document.cookie.substr(document.cookie.indexOf('=')+1)
       this.KAKAO_LOGIN({key:this.token})
       // window.location.href="https://app.pycon.shop/"
   },
   methods: {
       ...mapActions([
           'KAKAO_LOGIN'
       ]),
   }
}
</script>
