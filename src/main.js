import Vue from 'vue'
import App from './App.vue'
import '@/assets/svg.js'
Vue.config.productionTip = false
import http from '@/api/api.js'
Vue.prototype.$http = http
new Vue({
  render: h => h(App)
}).$mount('#app')
