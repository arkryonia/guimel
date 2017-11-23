// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import BlockUI from 'vue-blockui'
import VAnimateCss from 'v-animate-css'

import App from './App'
import router from './router/index'
import store from './store/store'

sync(store, router)
Vue.config.productionTip = false
Vue.component('icon', Icon)
Vue.use(VAnimateCss)
Vue.use(BlockUI)
Vue.use(Vuex)
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})

router.beforeEach((to, from, next) => {
  if (to.name === null) {
    // eslint-disable-next-line
    const err = new Error('erreur')
    next({ name: 'Error' })
  }
  next()
})
router.onError((err) => {
  // eslint-disable-next-line
  console.log('Handling this error', err)
})