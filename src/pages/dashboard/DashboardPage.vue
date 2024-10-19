<template>
  <div class="div-1">
    <div class="div-2">
      <NavBar />
    </div>
    <div class="div-3">
      <div class="div-4">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search">
          <button class="btn btn-outline-secondary" type="button">
            <Magnify/>
          </button>
        </div>
        <div class="div-5">
          <span>{{ firstLetterName }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '/src/components/dashboard/NavBar.vue'
import Magnify from 'vue-material-design-icons/Magnify.vue'

export default {
  data() {
    return {
      showModal: true
    }
  },
  components: {
    NavBar,
    Magnify,
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
  computed: {
    firstLetterName() {
      const name = this.$store.state.user.name
      console.log(localStorage);
      return name ? name.charAt(0).toUpperCase() : ''
    }
  },
}
</script>

<style scoped>
.div-1 {
  display: flex;
}
.div-3 {
  width: 90%;
}
.div-4 {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  border-bottom: 1px solid #ebecf0;
}
.input-group {
  width: 85%;
}
.div-5 {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
}
span {
  font-size: 17px;
}
</style>
