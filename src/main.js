import Vue from 'vue'
import App from './App.vue'

import VueEmailInput from '@/plugin'
import './plugin'

Vue.config.productionTip = false

Vue.use(VueEmailInput)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
