<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="autenticarUsuario">
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
<script>
import { post } from '/src/api.js'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async autenticarUsuario() {
      try {
        const payload = {
          'email': this.email,
          'password': this.password,
      }
      const response = await post(`/api/login/`, payload)
      console.log(response)
      localStorage.setItem('authToken', response.token)
      this.$router.push({ name: 'dashboard', params: { usuarioId: response.usuario_id } })
      } catch (error) {
        console.error('Erro ao efetuar login:', error)
      }
    },
  }
}
</script>
  
<style scoped>
  .login {
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
  