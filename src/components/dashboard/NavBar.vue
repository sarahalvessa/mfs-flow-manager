<template>
  <div class="div-1">
    <div class="div-2">
      <div class="div-3">
        <img :src="logoFlow" alt="logo">
      </div>
    </div>
    <nav class="div-4">
      <router-link to="/dashboard" class="div-5" active-class="active">
        <ViewDashboardOutline/>
        Dashboard
      </router-link>
      <router-link to="/projects" class="div-5" active-class="active">
        <Package/>
        Projects
      </router-link>
      <router-link to="/tasks" class="div-5" active-class="active">
        <FormatListChecks/>
        Tasks
      </router-link>
      <router-link to="/calendar" class="div-5" active-class="active">
        <CalendarMonth/>
        Calendar
      </router-link>
    </nav>
    <div class="div-6">
      <span @click="logout" class="div-7">
        <Logout/> 
        Log out
      </span>
    </div>
  </div>
</template>
<script>
import { post } from '/src/api.js'
import ViewDashboardOutline from 'vue-material-design-icons/ViewDashboardOutline.vue'
import Package from 'vue-material-design-icons/Package.vue'
import FormatListChecks from 'vue-material-design-icons/FormatListChecks.vue'
import CalendarMonth from 'vue-material-design-icons/CalendarMonth.vue'
import Logout from 'vue-material-design-icons/Logout.vue'

export default {
  components: {
    ViewDashboardOutline,
    Package,
    FormatListChecks,
    CalendarMonth,
    Logout,
  },
  data() {
    return {
      logoFlow: require('/src/assets/logoFlow.png')
    }
  },
  methods: {
    async logout() {
      try {
        await post('/api/logout/')
        localStorage.removeItem('authToken')
        this.$router.push('/login')
      } catch (error) {
        console.error('Erro ao sair:', error)
      } 
    },
  }
}
</script>
<style scoped>
.div-1 {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 200px;
  background-color: #f8f9fe;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}
.div-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.div-3 img {
  max-width: 140px;
}
.div-4 {
  flex-grow: 1;
  margin-top: 50px;
}
.div-5 {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: #4a4a4a;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 15px;
}
.div-5:hover {
  background-color: #b2dbf7;
}
.div-6 {
  margin-top: auto;
}
.div-7 {
  display: flex;
  align-items: center;
  color: #ff6b6b;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}
.div-7:hover {
  background-color: #ffe5e5;
}
</style>
