import Vue from 'vue'
import Router from 'vue-router'
// import Icon from '@/components/basic/icon/Icon.vue'
import AllComponents from '@/components/AllComponents.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllComponents',
      component: AllComponents
    }
  ]
})
