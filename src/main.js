import './assets/main.css'

import { createApp } from 'vue'
//import { createPinia } from 'pinia'



import App from './App.vue'
import router from './router/index.js'
import AppLink from './components/AppLink.vue' 
const app = createApp(App)

.component('AppLink', AppLink) 
//app.use(createPinia())
app.use(router)

app.mount('#app')
