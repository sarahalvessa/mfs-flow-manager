<template>
  <div class="container-dashboardpage">
    <div class="div-2">
      <HeaderDashboard />
      <div class="div-3">
        <CardDashboard tipoCard="para fazer"/>
        <CardDashboard tipoCard="em progresso"/>
        <CardDashboard tipoCard="concluido"/>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderDashboard from '/src/components/pessoa/dashboard/HeaderDashboard.vue'
import CardDashboard from '/src/components/pessoa/dashboard/cards/CardDashboard.vue'

export default {
  data() {
    return {
      showModal: true
    }
  },
  components: {
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
  background-color: #ffffff;
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