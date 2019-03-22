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
import AddKeyword from './AddKeyword.vue'

export default {
  data() {
    return {
      isAddKey : false,
    }
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
