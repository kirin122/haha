import Vue from 'vue'

import ElementUI from 'element-ui'
import en from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(ElementUI, { locale: en })

Vue.prototype.$message = function(msg) {
  ElementUI.Message({ ...msg, duration: 2000, showClose: true })
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
