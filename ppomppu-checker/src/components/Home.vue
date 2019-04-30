<template>
  <div>
    <div>
      <KeywordList />
    </div>
    <br>
    <div class="add-keyword">
      <button class="btn" @click.prevent="SET_IS_ADD_KEY(true)">
        Add keyword
      </button>
    </div>
    <AddKeyword v-if="isAddKey" />
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import AddKeyword from './AddKeyword.vue'
import KeywordList from './KeywordList.vue'

export default {
  computed: {
    ...mapState([
      'isAddKey',
    ]),
  },
  components: {
    AddKeyword,
    KeywordList
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_KEY'
    ]),
  }
}
</script>

<style>
table, th, tr, td {
  width: 80%;
  border: 1px solid #ffffff;
  padding: 0px;
  margin: auto;
  position: 50% 50%;
}
input {
  border: 1px solid;
}
</style>
