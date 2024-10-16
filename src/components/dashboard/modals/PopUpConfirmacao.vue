<template>
  <div class="modal d-flex align-items-center justify-content-center" tabindex="-1" role="dialog" v-if="isPopUp">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-between">
          <h5 class="modal-title">Confirmar Exclusão</h5>
          <Close @click="cancelDelete" style="cursor: pointer;"/>
        </div>
        <div class="modal-body d-flex justify-content-center align-items-center">
          <DeleteOutline  :size="66"/>
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
import Close from 'vue-material-design-icons/Close.vue'
import DeleteOutline from 'vue-material-design-icons/DeleteOutline.vue'

export default {
  components: {
    DeleteOutline,
    Close,
  },
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
  display: flex;
}
.modal-body {
  flex-direction: column;
  width: 500px;
  margin: 30px 0 30px 0;
}
</style>