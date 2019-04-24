<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div>
        <table striped hover>
          <tr>
            <th>Keyword</th>
            <th>Alarm</th>
            <th>Save</th>
            <th>Delete</th>           </tr>
          <tr v-for="key in keywords">
            <td><input class="key_input" type="text" name="" v-model="key.keyword" /></td>
            <td><input type="checkbox" v-model="key.alarm" /></td>
            <td><button class="btn" @click.prevent="chageOption(key)">save</button></td>
            <td><button class="btn" @click.prevent="deleteKeyword(key)">Delete</button></td>           </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import AddKeyword from './AddKeyword.vue'
import {contents} from '../api'

export default {
  data() {
    return {
      loading: false,
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    ...mapState([
      'keywords',
      'keywordLength'
    ]),
    keywordLength() {
      console.log('length fetch')
    }
  },
  methods: {
    ...mapActions([
      'FETCH_KEYWORD',
    ]),
    fetchData() {
      loading: true
      this.FETCH_KEYWORD()
        .finally(() => {
          this.loading = false
        })
    },
    chageOption(key) {
      contents.update(key.id, key.keyword, key.alarm)
    },
    deleteKeyword(key) {
      contents.destroy(key.id)
        .then(_=> this.FETCH_KEYWORD())
        .catch(error => console.log(error))
    }
  }
}
</script>

<style>
td {
  background-color: #b8f3f7;
  padding: 0px;
  margin: 0px;
  vertical-align: middle;
  border-collapse: collapse;
}
form {
  border: 0px solid;
}
input {
  border: 0px;
}
.key_input {
  background-color:#74f1fa;
  text-align: center;
}
</style>
