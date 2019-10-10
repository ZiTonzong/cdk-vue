import Menu from './Menu.vue'
import MenuItem from './MenuItem.vue'
import SubMenu from './SubMenu.vue'

Menu.install = Vue => {
    Vue.component(Menu.name, Menu)
    Vue.component(SubMenu.name, SubMenu)
    Vue.component(MenuItem.name, MenuItem)
}

export default Menu