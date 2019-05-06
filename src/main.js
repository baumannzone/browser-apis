import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueHighlightJS from 'vue-highlight.js'

import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'highlight.js/styles/default.css'
import javascript from 'highlight.js/lib/languages/javascript'

Vue.use(BootstrapVue)
Vue.use(VueHighlightJS, {
  languages: {
    javascript
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
