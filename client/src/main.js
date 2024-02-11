import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import App from './App.vue'
import router from './router'
const pinia = createPinia()
const app = createApp(App)
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
app.use(vue3GoogleLogin, {
  clientId: '87973030685-3mlll838f2nmrj2445nlidjo9v77btv2.apps.googleusercontent.com'
})
app.use(pinia)
app.use(router)

app.mount('#app')
