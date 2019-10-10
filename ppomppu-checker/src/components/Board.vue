<template lang="html">
  <div class="">
    <h2>Board / 추가 개발중</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <table>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Create_at</th>
        </tr>
        <tr v-for="post in posts">
          <td>{{post.id}}</td>
          <td><router-link :to='`/board/${post.id}`'>{{ post.title }}</router-link></td>
          <td>{{post.author}}</td>
          <td>{{post.create_at | formatDate}}</td>
        </tr>
      </table>

    </div>

    </div>
  </div>

</template>

<script>
import {mapActions, mapState} from 'vuex'
import {boards} from '../api'

export default {
  data() {
    return {
      loading: false,
    }
  },
  created() {
    this.loading = true
    this.fetchData()
  },
  computed: {
    ...mapState([
      'posts'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_POSTS'
    ]),
    fetchData() {
      this.loading = true
      this.FETCH_POSTS()
        .finally(() => {
          this.loading = false
        })
      },
    }
  }
</script>

<style lang="css" scoped>
</style>
