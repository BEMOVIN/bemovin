import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import AOS from 'aos'
import App from './App.vue'

import './main.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount('#app')

AOS.init({
  duration: 700,
  once: true,
  disable: 'mobile'
})
