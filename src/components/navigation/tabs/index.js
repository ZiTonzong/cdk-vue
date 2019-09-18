import Tabs from './Tabs.vue'
import TabsTitle from './TabsTitle.vue'
import TabsPane from './TabsPane.vue'

Tabs.install = Vue => {
    Vue.component(Tabs.name, Tabs)
    Vue.component(TabsTitle.name, TabsTitle)
    Vue.component(TabsPane.name, TabsPane)
}

export default Tabs