<template>
  <div>
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

export default {
  data() {
    return {
    }
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
    ])
  }
}
</script>

<style>
</style>
