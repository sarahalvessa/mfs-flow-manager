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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

html, body {
  font-family: 'Roboto', sans-serif;
}
p {
  margin-bottom: 0 !important;
}
</style>
