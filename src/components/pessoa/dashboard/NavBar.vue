<template>
  <div class="div-1">
    <div class="div-2">
      <div class="div-3">
        <h4>Projetos</h4>
        <PlusCircle class="pluscircle-customize" style="cursor: pointer"/>
      </div>

      <div class="div-4">
        <div class="div-5">
          <p>Projetos</p>
          <ChevronDown class="chevrondown-customize" @click="abrirLista('projetos')" style="cursor: pointer"/>
        </div>
        <div class="div-6" v-show="projectDropdownOpen">
          <ul>
            <li>Todos os projetos(1)</li>
            <li>Projeto 1</li>
            <li>Projeto 2</li>
            <li>Projeto 3</li>
            <li>Projeto 4</li>
          </ul>
        </div>
      </div>

      <div class="div-4">
        <div class="div-5">
          <p>Tarefas</p>
          <ChevronDown class="chevrondown-customize" @click="abrirLista('tarefas')" style="cursor: pointer"/>
        </div>
        <div class="div-6" v-if="taskDropdownOpen">
          <ul>
            <li>Todas as tarefas(1)</li>
            <li>Tarefa 1</li>
            <li>Tarefa 2</li>
            <li>Tarefa 3</li>
            <li>Concluídas(1)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import PlusCircle from 'vue-material-design-icons/PlusCircle.vue';

export default {
  data() {
    return {
      projectDropdownOpen: false,
      taskDropdownOpen: false
    };
  },
  components: {
    ChevronDown,
    PlusCircle,
  },
  methods:{
    abrirLista(tipo) {
      if(tipo === 'projetos') {
        this.projectDropdownOpen = !this.projectDropdownOpen
      }
      if(tipo === 'tarefas') {
        this.taskDropdownOpen = !this.taskDropdownOpen
      }
    }
  }
}
</script>

<style scoped>
.div-1 {
    width: 270px;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.div-2{
  height: 93%;
  width: 90%;
}
.div-3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pluscircle-customize {
  color: #9e9d9d;
  display: flex;
}
.div-3 h4{
  font-size: 25px;
}
.div-4 {
  margin-top: 50px;
}
.div-4 p{
  font-size: 18px;
  font-weight: bold;
}
.div-5 {
  display: flex;
  justify-content: space-between;
}
.div-6 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.div-6 ul {
  list-style: none;
  width: 90%;
}
.div-6 ul li {
  margin-top: 10px;
  font-size: 17px;
  color: #8D8E90;
}
</style>