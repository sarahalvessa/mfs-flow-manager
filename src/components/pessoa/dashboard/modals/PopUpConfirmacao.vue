<template>
  <div class="modal" tabindex="-1" role="dialog" v-if="isPopUp">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirmar Exclusão</h5>
          <button type="button" class="close" @click="cancelDelete">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Tem certeza que deseja excluir esta tarefa?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="cancelDelete">Cancelar</button>
          <button type="button" class="btn btn-danger" @click="confirmDelete">Confirmar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isPopUp: Boolean,
  },
  methods: {
    cancelDelete() {
      this.$emit('cancel')
    },
    confirmDelete() {
      this.$emit('confirm')
    }
  }
}
</script>
<style scoped>
.modal {
    display: block;
}
</style>