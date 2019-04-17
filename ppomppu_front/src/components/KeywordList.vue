<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div>
        <!-- <form @submit.prevent="chageOption"> -->
          <form>
            <table>
              <tr>
                <th>Keyword</th>
                <th>Alarm</th>
                <th>Save</th>
                <th>Delete</th>
              </tr>
              <tr v-for="key in keywords">
                <td><input type="text" name="" v-model="key.keyword" /></td>
                <td><input type="checkbox" v-model="key.alarm" /></td>
                <td><button @click.prevent="chageOption(key)">save</button></td>
                <td><button @click.prevent="deleteKeyword(key)">Delete</button></td>
              </tr>
            </table>
        </form>
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
table, th, tr, td {
  border: 1px solid;
  width: 100%;
}
form {
  border: 1px solid;
}
input {
  border: 1px solid;
}
</style>
