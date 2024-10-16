<template>
    <div class="register">
      <h1>Cadastro</h1>
      <form @submit.prevent="cadastrarUsuario">
        <div>
          <label for="nome">Nome</label>
          <input type="text" id="nome" v-model="nome" required />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </template>
  
<script>
  import { post } from '/src/api.js'
  
  export default {
    data() {
      return {
        nome: '',
        email: '',
        password: ''
      }
    },
    methods: {
      async cadastrarUsuario() {
        try {
          const payload = {
            nome: this.nome,
            email: this.email,
            password: this.password,
          }
          await post(`/api/register/`, payload)
          this.$router.push({ name: 'login'})
        } catch (error) {
          console.error('Erro ao efetuar cadastro:', error)
        }
      },
    }
  }
  </script>
  
  <style scoped>
  .register {
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  h1 {
    text-align: center;
  }
  
  form div {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 0.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  