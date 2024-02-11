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
  clientId: '[YOUR_GOOGLE_CLIENT_ID]'
})
app.use(pinia)
app.use(router)

app.mount('#app')
