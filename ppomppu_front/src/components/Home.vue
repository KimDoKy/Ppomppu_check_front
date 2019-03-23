<template>
  <div>
    <div class="add-keyword">
      <a href="" @click.prevent="addKeyword">
        Add keyword
      </a>
    </div>
    <AddKeyword v-if="isAddKey" @close="isAddKey=false"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
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
    addKeyword() {
      this.isAddKey = true
    }
  }
}
</script>

<style>
</style>
