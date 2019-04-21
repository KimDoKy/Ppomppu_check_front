<template>
  <div id="app">
    <Navbar />
    <img src="./assets/logo.png">
    <div>
      뽐뿌 업데이트 체커!!
      <br />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from './components/Navbar.vue'
import { mapActions } from 'vuex';

Vue.use(BootstrapVue)

export default {
  name: 'app',
  components: { Navbar }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
html, body, #app {
  height: 100%;
  margin: 0px;
}
#app {
  flex-direction: column;
}
.container {
  flex-grow: 1;
  position: relative;
}
.btn {
  border-radius: 3px;
  padding: 6px 8px;
  background-color: #17a2b8;
  border: none;
  display: inline-block;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  cursor: pointer;
}
.btn-success {
  background-color: #5aac44;
  box-shadow: 0 1px 0 #519839;
}
.form-control {
  width: 75%;
  box-sizing: border-box;
  background-color: #e2e4e6;
  border: 1px solid #cdd2d4;
  border-radius: 3px;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 6px 8px;
  transition: background-color .3s;
}
input[type=text].form-control,
input[type=password].form-control,
textarea.form-control {
  font-size: 14px;
}
.form-control:focus {
  background-color: #fff;
}
</style>
