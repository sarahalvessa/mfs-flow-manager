<template>
  <div class="div-1">
    <NavBar />
  </div>
</template>
<script>
import NavBar from '/src/components/dashboard/NavBar.vue'

export default {
  data() {
    return {
      showModal: true
    }
  },
  components: {
    NavBar
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    saveChanges() {
      this.closeModal()
    }
  },
}
</script>

<style scoped>
</style>