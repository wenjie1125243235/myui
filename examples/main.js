import Vue from 'vue'
import App from './App.vue'
import MyUi from '../packages'
Vue.config.productionTip = false
Vue.use(MyUi)
new Vue({
  render: h => h(App)
}).$mount('#app')
