<template>
  <div class="div-1">
    <div class="div-2">
      <h2>Olá, {{ usuario }}<img src="https://raw.githubusercontent.com/kaueMarques/kaueMarques/master/hi.gif" height="30px"></h2>
      <p>{{ dataAtual }}</p>
      <button @click="logout" class="logout-button">Sair</button>
    </div>
  </div>
  <div class="div-3">
    <div class="div-4">
      <div class="div-5">
        <ViewDashboardOutline class="viewdashboardoutline-customize"/>
        <p>Dashboard</p>
      </div>
      <Magnify />
    </div>
  </div>
</template>
<script>

import ViewDashboardOutline from 'vue-material-design-icons/ViewDashboardOutline.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'
import { get, post } from '/src/api.js'

export default {
  data() {
    return {
      usuario: '',
      dataAtual: '',
    }
  },
  components: {
    ViewDashboardOutline,
    Magnify
  },
  methods: {
    async fetchData() {
      try {
        const usuarioResponse = await get(`/api/usuarios/${this.$route.params.usuarioId}/`)
        this.usuario = usuarioResponse.nome
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }
    },
    async logout() {
      try {
        await post('/api/logout/')
        localStorage.removeItem('authToken')
        this.$router.push('/login')
      } catch (error) {
        console.error('Erro ao sair:', error)
      } 
    },
    obterDataAtual() {
      const opcoes = { year: 'numeric', month: 'long', day: 'numeric' }
      this.dataAtual = new Date().toLocaleDateString('pt-BR', opcoes)
    }
  },
  mounted() {
    this.fetchData(),
    this.obterDataAtual()
  }
}
</script>
  
<style scoped>
.div-1 {
    height: 100px;
    display: flex;
    justify-content: center;
    box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.2);
}
.div-2 {
    width: 94%;
    display: flex;
    justify-content: space-between;
}
.div-2 h2 {
    display: flex;
    justify-content: center;
    align-items: center;
}
.div-2 p {
  font-size: 17px;
  color: #8D8E90;
  display: flex;
  justify-content: center;
  align-items: center;
}
.div-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-top: 20px;
  border-bottom: 2px solid #d8d2d2;
}
.div-4 {
  width: 94%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.div-5 {
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 120px;
  border-bottom: 2px solid #1C1D22;
  cursor: pointer;
}
.viewdashboardoutline-customize {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>