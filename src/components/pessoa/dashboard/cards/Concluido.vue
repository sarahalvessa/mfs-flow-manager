<template>
  <div class="div-2 d-flex justify-content-center align-items-center">
    <div class="div-3 d-flex align-items-center justify-content-between">
      <p>Concluído(4)</p>
      <Plus @click="abrirModal" style="cursor: pointer;"/>
    </div>

    <div class="div-5">
      <div class="div-6" v-for="(tarefa, indice) in usuarioTarefasParaFazer" :key="indice">
        <div class="div-7 d-flex align-items-center justify-content-between"> 
          <p class="customized-color-p bold-p">{{ tarefa.nome }}</p>
          <div>
            <DotsHorizontal @click="capturarIdTarefa(tarefa.tarefa_id)" style="cursor: pointer;"/>
            <Delete @click="capturarIdTarefa(tarefa.tarefa_id)" style="cursor: pointer;"/>
          </div>
        </div>
        <span>{{ tarefa.descricao }}</span>
      </div>
    </div>
  </div>
<Loading :isLoading="isLoading" />
<ModalDashboard :modalAberto="modalAberto" @fechar="fecharModal" @salvar="capturarDados" />
</template>
<script>

import Plus from 'vue-material-design-icons/Plus.vue'
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue'
import Delete from 'vue-material-design-icons/Delete.vue'
import ModalDashboard from '/src/components/pessoa/dashboard/modals/ModalDashboard.vue'
import Loading from '/src/components/pessoa/dashboard/Loading.vue'
import { get, post } from '/src/api.js'

export default {
  data() {
    return {
      modalAberto: false,
      isLoading: false,
      titulo: '',
      descricao: '',
      usuarioTarefasParaFazer: '',
      dataCriacaoTarefa: '',
    }
  },
  methods: {
    async fetchData() {
      const usuarioResponse = await get(`/api/usuarios/1/`);
      this.usuarioTarefasParaFazer = usuarioResponse.tarefas
        .filter(tarefa => tarefa.status_id === 3)
        .map(tarefa => ({
          ...tarefa,
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
    async capturarDados(dados) {
      this.isLoading = true
      try {
        const payload = {
          'nome': dados.titulo,
          'descricao': dados.descricao,
          'usuario_id': 1,
          'status_id': 3,
        }
      await post(`/api/tarefas/`, payload)
      } catch (error) {
        console.error('Erro ao salvar tarefa:', error)
      } finally {
        this.isLoading = false      
        this.modalAberto = false
      }
    },
    capturarIdTarefa(id) {
      console.log("ID da tarefa clicada:", id);
    }
  },
  components: {
    Plus,
    DotsHorizontal,
    Delete,
    ModalDashboard,
    Loading,
  },
  props: {
    tipoCard: {
      type: String,
      required: true
    }
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
.div-2 {
  width: 95%;
  margin: 15px 0 15px 0;
  flex-direction: column;
}
.div-3 {
  width: 100%;
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
  background-color: #ffffff;
}
.div-6 span {
  font-size: 14px;
  color: #8D8E90;
}
</style>