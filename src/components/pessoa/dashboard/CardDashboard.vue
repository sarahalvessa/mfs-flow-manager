<template>
  <div class="div-1 d-flex align-items-center justify-content-center">
    <div class="div-2">
      <div class="div-3 d-flex align-items-center justify-content-between">
        <p>Para fazer(4)</p>
        <div class="div-4 d-flex align-items-center justify-content-center" style="cursor: pointer;">
          <PlusCircle />
          <p class="customized-color-p" @click="abrirModal">Adicionar nova tarefa</p>
        </div>
      </div>

      <div class="div-5">
        <div class="div-6" v-for="(tarefa, indice) in usuarioTarefas" :key="indice">
          <div class="div-7 d-flex align-items-center justify-content-between"> 
            <p class="customized-color-p bold-p">{{ tarefa.nome }}</p>
            <PlusCircle />
          </div>
          <span>{{ tarefa.descricao }}</span>

          <div class="div-8 d-flex align-items-center justify-content-center">
            <p>{{ tarefa.created_at }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalDashboard :modalAberto="modalAberto" @fechar="fecharModal" @salvar="capturarDados" />
</template>
<script>

import PlusCircle from 'vue-material-design-icons/PlusCircle.vue'
import ModalDashboard from '/src/components/pessoa/dashboard/modals/ModalDashboard.vue'
import { get } from '/src/api.js'

export default {
  data() {
    return {
      modalAberto: false,
      titulo: '',
      descricao: '',
      usuarioTarefas: '',
      dataCriacaoTarefa: '',
    }
  },
  methods: {
    async fetchData() {
      const usuarioResponse = await get(`/api/usuarios/1/`);
        this.usuarioTarefas = usuarioResponse.tarefas.map(tarefa => ({
          ...tarefa,
          created_at: new Date(tarefa.created_at).toLocaleDateString('pt-BR'),
        }))
    },
    obterDataAtual() {
      const opcoes = { year: 'numeric', month: 'long', day: 'numeric' }
      this.dataAtual = new Date().toLocaleDateString('pt-BR', opcoes)
    },
    abrirModal() {
      this.modalAberto = true
    },
    fecharModal() {
      this.modalAberto = false
    },
    capturarDados(dados) {
      this.titulo = dados.titulo
      this.descricao = dados.descricao
    }
  },
  components: {
    PlusCircle,
    ModalDashboard,
  },
  mounted() {
    this.fetchData()
  }
}
</script>
<style scoped>
p {
  color: #8D8E90;
  font-size: 14px;
}
.customized-color-p {
  color: black;
}
.bold-p {
  font-weight: bold;
}
.div-1 {
  margin-top: 20px;
  border: 2px dotted #dad5d5;
  width: 30%; 
  border-radius: 12px;
}
.div-2 {
  width: 95%;
  margin: 15px 0 15px 0;
}
.div-5 {
  width: 100%;
}
.div-6 {
  margin-top: 15px;
  border: 1px solid #dad5d5;
  width: 100%;
  border-radius: 12px;
  padding: 5px;
}
.div-6 span {
  font-size: 14px;
  color: #8D8E90;
}
.div-8 {
  width: 130px;
  height: 30px;
  border-radius: 12px;
  margin-top: 10px;
  background-color: #dbdbdf;
}
</style>