import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.scss'
import './styles/reset.scss'
import './styles/variables.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
