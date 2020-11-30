import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import AOS from 'aos'
import App from './App.vue'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import VueScrollTo from 'vue-scrollto'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(BootstrapVue)
Vue.use(CoolLightBox)
Vue.use(VueScrollTo)

new Vue({
  render: h => h(App)
}).$mount('#app')

AOS.init({
  duration: 700,
  once: true,
  disable: 'mobile'
})
