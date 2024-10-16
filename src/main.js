import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .use(Toast)
  .mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
