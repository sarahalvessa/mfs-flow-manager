<template>
  <div class="div-2 d-flex justify-content-center align-items-center">
    <div class="div-3 d-flex align-items-center justify-content-between">
      <p>Em progresso(4)</p>
      <Plus @click="abrirModal" style="cursor: pointer;"/>
    </div>

    <div class="div-5">
      <div class="div-6" v-for="(tarefa, indice) in usuarioTarefasParaFazer" :key="indice">
        <div class="div-7 d-flex align-items-center justify-content-between"> 
          <p class="customized-color-p bold-p">{{ tarefa.nome }}</p>
          <div>
            <DotsHorizontal @click="deletarTarefa(tarefa.tarefa_id)" style="cursor: pointer;"/>
            <Delete @click="abrirPopUp(tarefa.tarefa_id)" style="cursor: pointer;"/>
          </div>
        </div>
        <span>{{ tarefa.descricao }}</span>
      </div>
    </div>
  </div>

<Loading :isLoading="isLoading" />
<CadastrarTarefa :modalAberto="modalAberto" @fechar="fecharModal" @salvar="inserirTarefa" />
<PopUpConfirmacao :isPopUp="isPopUp" @cancel="cancelarExclusao" @confirm="excluirTarefa" />
</template>
<script>

import Plus from 'vue-material-design-icons/Plus.vue'
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue'
import Delete from 'vue-material-design-icons/Delete.vue'
import CadastrarTarefa from '/src/components/dashboard/modals/CadastrarTarefa.vue'
import PopUpConfirmacao from '/src/components/dashboard/modals/PopUpConfirmacao.vue'
import Loading from '/src/components/dashboard/Loading.vue'
import { get, post, del } from '/src/api.js'

export default {
  data() {
    return {
      modalAberto: false,
      isLoading: false,
      isPopUp: false,
      titulo: '',
      descricao: '',
      usuarioTarefasParaFazer: '',
      usuarioTarefaId: null,
    }
  },
  methods: {
    async fetchData() {
      try {
        const usuarioResponse = await get(`/api/usuarios/1/`)
        this.usuarioTarefasParaFazer = usuarioResponse.tarefas
          .filter(tarefa => tarefa.status_id === 2)
          .map(tarefa => ({
            ...tarefa, 
        }))
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error)
      }
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
    async inserirTarefa(dados) {
      this.isLoading = true
      try {
        const payload = {
          'nome': dados.titulo,
          'descricao': dados.descricao,
          'usuario_id': 1,
          'status_id': 2,
        }
      await post(`/api/tarefas/`, payload)
      } catch (error) {
        console.error('Erro ao salvar tarefa:', error)
      } finally {
        this.isLoading = false      
        this.modalAberto = false
        this.fetchData()
      }
    },
    abrirPopUp(id) {
      this.usuarioTarefaId = id
      this.isPopUp = true
    },
    cancelarExclusao() {
      this.isPopUp = false
    },
    async excluirTarefa() {
      this.isLoading = true
      try {
        await del(`/api/tarefas/${this.usuarioTarefaId}`)
      } catch (error) {
        console.error('Erro ao excluir tarefa:', error)
      } finally {
        this.isPopUp = false
        this.isLoading = false
        this.fetchData()
      }

    }
  },
  components: {
    Plus,
    DotsHorizontal,
    Delete,
    CadastrarTarefa,
    PopUpConfirmacao,
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
<style scoped src="./Index.css"></style>