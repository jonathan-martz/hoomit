import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
 // @ts-ignore
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

const pinia = createPinia()

const app = createApp(App);
app.use(pinia)
app.component('fa', FontAwesomeIcon)
app.use(router)
app.mount('#app')
