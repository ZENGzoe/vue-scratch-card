import Vue from 'vue'
import App from './App.vue'

import ScratchCard from './index.js'
Vue.use(ScratchCard)

new Vue({
  el: '#app',
  render: h => h(App)
})
