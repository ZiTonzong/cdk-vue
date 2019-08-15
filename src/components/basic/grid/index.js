import Col from './Col.vue'
import Row from './Row.vue'

const Grid = {}

Grid.install = Vue => {
  Vue.component(Col.name, Col)
  Vue.component(Row.name, Row)
}

export default Grid