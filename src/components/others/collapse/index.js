import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'

Collapse.install = Vue => {
    Vue.component(Collapse.name, Collapse)
    Vue.component(CollapseItem.name, CollapseItem)
}

export default Collapse