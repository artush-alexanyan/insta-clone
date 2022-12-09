import { createApp } from 'vue'
import { createAuth0 } from "@auth0/auth0-vue"
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

createApp(App)
.use(store)
.use(router)
.use(
    createAuth0({
      domain: 'dev-rcs1mcf4aweaouik.us.auth0.com',
      client_id: 'CqxGWZEuWmfJQxjsKlqAAbQgEOIAuVFI',
      redirect_uri: 'http://localhost:8080/user/profile'
    })
  )
.mount('#app')
