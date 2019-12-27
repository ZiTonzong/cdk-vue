import Vue from 'vue'
import Router from 'vue-router'
// import Icon from '@/components/basic/icon/Icon.vue'
import AllComponents from '@/components/AllComponents.vue'
import Welcome from '@/pages/Welcome.vue'
import Page404 from '@/pages/Page404.vue'
import Page500 from '@/pages/Page500.vue'
import SlidesDemo from '@/pages/viewsDemo/SlidesDemo.vue'
import PagerDemo from '@/pages/viewsDemo/PagerDemo.vue'
import StickyDemo from '@/pages/viewsDemo/StickyDemo.vue'
import WaterfallDemo from '@/pages/viewsDemo/WaterfallDemo.vue'

Vue.use(Router)

const publicPages = [
  {
    path: '404',
    name: 'Page404',
    component: Page404
  },
  {
    path: '500',
    name: 'Page500',
    component: Page500
  }
]

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllComponents',
      component: AllComponents
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/views',
      // redirect: '/money/transactionlog',
      name: 'views-demo',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '/slides',
          name: 'slides',
          component: SlidesDemo
        },
        {
          path: '/pager',
          name: 'pager',
          component: PagerDemo
        },
        {
          path: '/sticky',
          name: 'sticky',
          component: StickyDemo
        },
        {
          path: '/waterfall',
          name: 'waterfall',
          component: WaterfallDemo
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: publicPages
    },
    {
      path: '*',
      redirect: '/pages/404'
    }
  ]
})
