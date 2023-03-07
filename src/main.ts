import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// @ts-ignore
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faEdit } from '@fortawesome/free-solid-svg-icons'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


library.add(faBars, faEdit)

const pinia = createPinia()

const app = createApp(App);
app.use(pinia)
app.use(vuetify)
app.component('fa', FontAwesomeIcon)
app.use(router)
app.mount('#app')
