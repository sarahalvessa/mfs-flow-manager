<template>
  <div class="div-1">
    <div class="div-2">
      <h2>Olá, Sarah</h2>
      <p>19 May 2022</p>
    </div>
  </div>
  <div class="div-3">
    <div class="div-4">
      <div class="div-5">
        <ViewDashboardOutline class="viewdashboardoutline-customize"/>
        <p>Dashboard</p>
      </div>
      <Magnify />
    </div>
  </div>
</template>
<script>

import ViewDashboardOutline from 'vue-material-design-icons/ViewDashboardOutline.vue';
import Magnify from 'vue-material-design-icons/Magnify.vue';

export default {
  components: {
    ViewDashboardOutline,
    Magnify
  }
}
</script>
  
<style scoped>
.div-1 {
    height: 100px;
    display: flex;
    justify-content: center;
    box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.2);
}
.div-2 {
    width: 94%;
    display: flex;
    justify-content: space-between;
}
.div-2 h2 {
    display: flex;
    justify-content: center;
    align-items: center;
}
.div-2 p {
  font-size: 17px;
  color: #8D8E90;
  display: flex;
  justify-content: center;
  align-items: center;
}
.div-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-top: 20px;
  border-bottom: 2px solid #d8d2d2;
}
.div-4 {
  width: 94%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.div-5 {
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 120px;
  border-bottom: 2px solid #1C1D22;
  cursor: pointer;
}
.viewdashboardoutline-customize {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>