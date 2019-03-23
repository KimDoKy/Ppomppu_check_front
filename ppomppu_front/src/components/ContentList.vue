<template>
  <div>
    Content List
    <div v-if='loading'>Loading ...</div>
    <div v-else>
      <div v-for='key in keywords'>
        <li>Keyword: {{key.keyword}} | 알람: {{key.alarm}} | link: {{key.update_link}}</li>
      </div>
    </div>
  </div>
</template>

<script>
import { contents } from '../api'

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
  methods: {
    fetchData() {
      loading: true,
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
