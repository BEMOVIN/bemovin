import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import AOS from 'aos'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount('#app')

AOS.init()
