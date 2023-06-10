import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as bootstrap from 'bootstrap'
import '../src/scss/styles.scss'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import "@progress/kendo-theme-default/dist/all.css"
import "../src/styles/colors.css";
import "../src/styles/variables.css";
import "../src/styles/reset.css";
import "../src/styles/utilities.css";
import store from "../src/stores/setup";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi',
  }
})



const app = createApp(App)


app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router)
app.use(vuetify)
app.use(store).mount('#app')
