<template>
  <div class="container-dashboardpage">
    <NavBar />
    <div class="div-2">
      <HeaderDashboard />
      <div class="div-3">
        <CardDashboard />
        <CardDashboard />
        <CardDashboard />
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '/src/components/pessoa/dashboard/NavBar.vue'
import HeaderDashboard from '/src/components/pessoa/dashboard/HeaderDashboard.vue'
import CardDashboard from '/src/components/pessoa/dashboard/CardDashboard.vue'

export default {
  data() {
    return {
      showModal: true
    }
  },
  components: {
    NavBar,
    HeaderDashboard,
    CardDashboard
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
.container-dashboardpage {
  height: 100vh;
  width: 100%;
  background-color: #eeeeee;
  display: flex;
}
.div-2 {
  width: 100%;
}
.div-3 {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>