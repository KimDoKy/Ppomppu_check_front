<template>
  <div>
    <div>
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
    ])
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
