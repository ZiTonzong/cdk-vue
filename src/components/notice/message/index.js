import Vue from 'vue'
import messageComponent from '@/components/notice/message/Message.vue'
import confirmComponent from '@/components/notice/message/Confirm.vue'

const Message = {
  install (Vue, options) {
    Vue.prototype.$message = function ({
      type,
      message,
      duration = 2000,
      showClose
    }) {
      const MessageContructor = Vue.extend(messageComponent)
      const div = document.createElement('div')
      document.body.appendChild(div)
      const vm = new MessageContructor({
        propsData: {
          options: {
            type: type || 'info',
            message,
            duration,
            showClose
          }
        }
      }).$mount(div)
      vm.visible = true
    }

    Vue.prototype.$confirm = function (options) {
      const ConfirmConstructor = Vue.extend(confirmComponent)
      const div = document.createElement('div')
      document.body.appendChild(div)
      const vm = new ConfirmConstructor({
        propsData: options
      }).$mounnt(div)
      vm.visible = true
      return vm.confirm()
    }
  },

  message ({ message, duration = 2000, showClose = false }) {
    const MessageContructor = Vue.extend(messageComponent)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new MessageContructor({
      propsData: {
        options: {
          type: 'info',
          message,
          duration,
          showClose
        }
      }
    }).$mount(div)
    vm.visible = true
  },

  confirm (options) {
    const ConfirmConstructor = Vue.extend(confirmComponent)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new ConfirmConstructor({
      propsData: options
    }).$mount(div)
    vm.visible = true
    return vm.confirm()
  }
}

export default Message
