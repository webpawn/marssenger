// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './component/header/Header.vue'
import Footer from './component/footer/Footer.vue'

Vue.config.productionTip = false
Vue.component('mar-header',Header)
Vue.component('mar-footer',Footer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})
