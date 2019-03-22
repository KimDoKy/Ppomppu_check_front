<template>
  <Modal>
    <div slot="header">
      <h2>
        Add New Keyword
        <a href="" class="modal-default-button"
          @click.prevent="close">&times;</a>
      </h2>
    </div>
    <div slot="body">
      <form id="add-keyword-form"
        @submit.prevent="addKeyword">
        <input type="text" v-model="input" ref="input">
      </form>
    </div>
    <div slot="footer">
      <button type="submit" class="btn" :class="{'btn-success': valid}"
        form="add-keyword-form" :disabled="!valid">
        Add Keyword
      </button>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      valid: false,
      input: ''
    }
  },
  watch: {
    input(v) {
      this.valid = v.trim().length > 0
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    close() {
      this.$emit('close')
    },
    addKeyword() {
      this.$emit('close')
      this.$emit('submit', this.input)
    }
  }
}
</script>

<style>
</style>
