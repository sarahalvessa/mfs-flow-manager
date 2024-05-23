<template>
  <div class="modal" role="dialog" v-if="modalAberto">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Cadastrar Nova Tarefa</h5>
          <button type="button" class="close" @click="fecharModal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="titulo">Título da Tarefa</label>
            <input type="text" class="form-control" id="titulo" v-model="titulo">
          </div>
          <div class="form-group">
            <label for="descricao">Descrição</label>
            <textarea class="form-control" id="descricao" v-model="descricao"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="saveChanges">Salvar</button>
          <button type="button" class="btn btn-secondary" @click="fecharModal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    modalAberto: Boolean,
  },
  data() {
    return {
      titulo: '',
      descricao: '',
    }
  },
  methods: {
    fecharModal() {
      this.$emit('fechar')
    },
    saveChanges() {
      this.$emit('salvar', {
        titulo: this.titulo,
        descricao: this.descricao,
      })
    },
  },
}
</script>
<style scoped>
.modal {
  display: block;
}
</style>