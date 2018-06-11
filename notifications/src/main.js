import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


// bio je prov za app pa axios




import BootstrapVue from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false
Vue.prototype.axios = axios 
new Vue({
  render: h => h(App)
}).$mount('#app')
