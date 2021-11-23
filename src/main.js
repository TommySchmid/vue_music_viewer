import Vue from 'vue'
import Main_CC from './pages/Main_CC.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Main_CC),
}).$mount('#app')