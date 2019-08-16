import Container from './Container.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Main from './Main.vue'
import Sider from './Sider.vue'

Container.install = Vue => {
  Vue.component(Container.name, Container)
  Vue.component(Header.name, Header)
  Vue.component(Footer.name, Footer)
  Vue.component(Main.name, Main)
  Vue.component(Sider.name, Sider)
}

export default Container