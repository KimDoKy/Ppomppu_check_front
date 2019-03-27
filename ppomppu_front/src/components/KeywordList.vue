<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div>
        <form @submit.prevent="ChageOption">
            <table>
              <tr>
                <th>Keyword</th>
                <th>Alarm</th>
                <th>Delete</th>
                <th>Save</th>
              </tr>
              <tr v-for="key in keywords">
                <td><input type="text" name="" v-bind:value="key.keyword" /></td>
                <td><input type="checkbox" v-model="key.alarm" /></td>
                <td><button>Delete</button></td>
                <td><input type="submit" value="save"></td>
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
      'keywords'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_KEYWORD'
    ]),
    fetchData() {
      loading: true
      this.FETCH_KEYWORD()
        .finally(() => {
          this.loading = false
        })
    },
    ChageOption() {
      console.log(this.keywords)
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
