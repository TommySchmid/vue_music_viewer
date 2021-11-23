import Vue from 'vue'
import Header from './Header.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Header),
}).$mount('#app')