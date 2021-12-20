import Vue from 'vue'
import Header from './Header.vue'
import router from './router/index'
import store from './store/Store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Header),
}).$mount('#app')