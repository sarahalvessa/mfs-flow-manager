<template>
    <div class="div-1 d-flex align-items-center justify-content-center" v-if="tipoCard === 'para fazer'">
      <ParaFazer />
    </div>

    <div class="div-1 d-flex align-items-center justify-content-center" v-if="tipoCard === 'em progresso'">
      <EmProgresso />
    </div>

    <div class="div-1 d-flex align-items-center justify-content-center" v-if="tipoCard === 'concluido'">
      <Concluido />
    </div>
</template>
<script>
  
import ParaFazer from '/src/components/pessoa/dashboard/cards/ParaFazer.vue'
import EmProgresso from '/src/components/pessoa/dashboard/cards/EmProgresso.vue'
import Concluido from '/src/components/pessoa/dashboard/cards/Concluido.vue';

export default {
  components: {
    ParaFazer,
    EmProgresso,
    Concluido
  },
  props: {
    tipoCard: {
      type: String,
      required: true
    }
  },
}
</script>
<style scoped>
.div-1 {
  margin-top: 20px;
  width: 30%; 
  border-radius: 12px;
  height: 100%;
  background-color: #EEF2F5;
}
</style>