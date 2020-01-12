import Vue from 'vue'
import App from './internotion.vue'
//import BootstrapVue from 'bootstrap-vue'
//Vue.use(BootstrapVue)
//import VueYoutube from 'vue-youtube'
//Vue.use(VueYoutube)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
