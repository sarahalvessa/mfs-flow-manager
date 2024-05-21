<template>
  <nav>
    <router-link to="/dashboard" v-if="isDashboard">dashboard</router-link>
  </nav>
  <router-view/>
</template>
<script>
export default {
  data() {
    return {
      isDashboard: true
    }
  },
  watch: {
    '$route'(to) {
      if (to.path === '/dashboard') {
        this.isDashboard = false
      }
    }
  }
}
</script>
