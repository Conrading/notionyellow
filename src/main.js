import Vue from 'vue';
import App from './pursewalker.vue';

//import BootstrapVue from 'bootstrap-vue'
//Vue.use(BootstrapVue);
//import 'core-js' 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
