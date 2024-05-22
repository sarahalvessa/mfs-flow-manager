<template>
  <div class="container-dashboardpage">
    <NavBar />
    <div class="div-2">
      <HeaderDashboard />
    </div>
  </div>
</template>
<script>
import NavBar from '/src/components/pessoa/dashboard/NavBar.vue'
import HeaderDashboard from '/src/components/pessoa/dashboard/HeaderDashboard.vue'

export default {
  components: {
    NavBar,
    HeaderDashboard,
  }
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
</style>