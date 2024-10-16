<template>
  <div class="div-1">
    <div class="div-2">
      <img :src="pessoa" alt="imagem de pessoa">
    </div>
    <div class="div-3">
      <div class="div-4">
        <img :src="logoFlow" alt="imagem de pessoa">
      
        <div class="div-5">
          <form @submit.prevent="registerUser" class="div-6">
            <h4 class="div-margin-top">Create an account</h4>
            <p class="div-margin">Setup a new account in a minute.</p>
            <Input v-model="name" type="text" placeholder="Name" class="div-margin"/>
            <Input v-model="email" type="email" placeholder="Email" class="div-margin"/>
            <Input v-model="password" type="password" placeholder="Password" class="div-margin"/>
            <Button>Sign Up</Button>
            <p class="div-margin div-margin-top">Already have an account?<router-link to="/login">Sign In</router-link></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post } from '/src/api.js'
import { useToast } from 'vue-toastification'
import Input from '/src/components/Auth/Input.vue'
import Button from '/src/components/Auth/Button.vue'

export default {
  components: {
    Input,
    Button
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      pessoa: require('/src/assets/pessoa.png'),
      logoFlow: require('/src/assets/logoFlow.png')
    }
  },
  methods: {
    async registerUser() {
      const toast = useToast()
      if(this.name === '' || this.email === '' || this.password === '') {
        return toast.error('Invalid Credentials')
      }
      try {
        const payload = {
          nome: this.name,
          email: this.email,
          password: this.password,
        }
        await post(`/api/register/`, payload)
        toast.success('Success')
        this.$router.push({ name: 'login'})
      } catch (error) {
        return toast.error('Invalid Credentials')
      }
    },
  }
}
</script>
<style scoped>
.div-margin-top {
  margin-top: 30px;
}
.div-margin {
  margin-bottom: 30px;
}
.div-1 {
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.div-2 {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.div-2 img {
  max-width: 100%;
  height: auto;
}
.div-3 {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.div-4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.div-4 img {
  max-width: 30%;
}
.div-5 {
  border-radius: 20px;
  border: 2px solid #cccccca8;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
.div-6 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>