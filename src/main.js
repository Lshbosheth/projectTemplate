import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { setupGuard } from './router/guard'
import { store } from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'
import './mock'
setupGuard(router)
Vue.use(ElementUI)
new Vue({
  router,
  pinia: store,
  render: h => h(App)
}).$mount('#app')
