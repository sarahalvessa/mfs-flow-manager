<template>
  <div class="div-2">
    <HeaderDashboard />
    <div class="div-3">
      <Concluido/>
      <EmProgresso/>
      <ParaFazer/>
    </div>
  </div>
</template>
<script>
import HeaderDashboard from '/src/components/pessoa/dashboard/HeaderDashboard.vue'
import Concluido from '/src/components/pessoa/dashboard/cards/Concluido.vue';
import EmProgresso from '/src/components/pessoa/dashboard/cards/EmProgresso.vue';
import ParaFazer from '/src/components/pessoa/dashboard/cards/ParaFazer.vue';

export default {
  data() {
    return {
      showModal: true
    }
  },
  components: {
    HeaderDashboard,
    Concluido,
    EmProgresso,
    ParaFazer
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
.div-3 {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>