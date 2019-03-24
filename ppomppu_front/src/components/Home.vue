<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="key in keywords">
        <li>Keyword: {{key.keyword}} | 알람: {{key.alarm}} | Link: {{key.update_link}}</li>
      </div>
    </div>
    <div class="add-keyword">
      <a href="" @click.prevent="SET_IS_ADD_KEY(true)">
        Add keyword
      </a>
    </div>
    <AddKeyword v-if="isAddKey" @close="isAddKey=false"/>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import AddKeyword from './AddKeyword.vue'
import {contents} from '../api'

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
    AddKeyword
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_KEY'
    ]),
    fetchData() {
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
</style>
