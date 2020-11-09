// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Message from './components/notice/message'
import Menu from './components/navigation/menu/index.js'
import Slides from './components/views/slides'
import Pager from './components/navigation/pager'
import Sticky from './components/navigation/sticky'
import Waterfall from './components/others/waterfall'

Vue.config.productionTip = false

Vue.use(Message)
Vue.use(Menu)
Vue.use(Slides)
Vue.use(Pager)
Vue.use(Sticky)
Vue.use(Waterfall)
console.log('sssssssssss', router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
