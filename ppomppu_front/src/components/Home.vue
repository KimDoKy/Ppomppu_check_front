<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <KeywordList />
    </div>
    <div class="add-keyword">
      <button @click.prevent="SET_IS_ADD_KEY(true)">
        Add keyword
      </button>
    </div>
    <AddKeyword v-if="isAddKey" />
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import AddKeyword from './AddKeyword.vue'
import {contents} from '../api'
import KeywordList from './KeywordList.vue'

export default {
  data() {
    return {
      loading: false,
      keywords: []
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    ...mapState([
      'isAddKey'
    ])
  },
  components: {
    AddKeyword,
    KeywordList
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_KEY'
    ]),
    fetchData() {
      console.log('home loading')
      loading: true
      contents.fetch()
        .then(data => {
          this.keywords = data
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style>
table, th, tr, td {
  border: 1px solid;
}
form {
  border: 1px solid;
}
input {
  border: 1px solid;
}
</style>
