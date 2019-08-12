import Vue from 'vue'
import messageComponent from '@/components/notice/message/Message.vue'
import confirmComponent from '@/components/notice/message/Confirm.vue'

const MessageDiv = document.createElement('div')
MessageDiv.className = 'message'
// let t = document.createTextNode('CLICK ME')
// MessageDiv.appendChild(t)
document.body.appendChild(MessageDiv)

const Message = {
  install (Vue, options) {
    Vue.prototype.$message = function ({
      type,
      message,
      duration = 2000,
      showClose
    }) {
      const MessageContructor = Vue.extend(messageComponent)
      const Div = document.createElement('div')
      MessageDiv.appendChild(Div)
      const vm = new MessageContructor({
        propsData: {
          options: {
            type: type || 'info',
            message,
            duration,
            showClose
          }
        }
      }).$mount(Div)
      vm.visible = true
    }

    Vue.prototype.$confirm = function (options) {
      const ConfirmConstructor = Vue.extend(confirmComponent)
      const div = document.createElement('div')
      document.body.appendChild(div)
      const vm = new ConfirmConstructor({
        propsData: options
      }).$mount(div)
      vm.visible = true
      return vm.confirm()
    }
  },

  message ({ message, duration = 2000, showClose = false }) {
    const MessageContructor = Vue.extend(messageComponent)
    const Div = document.createElement('div')
    MessageDiv.appendChild(Div)
    const vm = new MessageContructor({
      propsData: {
        options: {
          type: 'info',
          message,
          duration,
          showClose
        }
      }
    }).$mount(Div)
    vm.visible = true
  },

  confirm (options) {
    const ConfirmConstructor = Vue.extend(confirmComponent)
    const Div = document.createElement('div')
    document.body.appendChild(Div)
    const vm = new ConfirmConstructor({
      propsData: options
    }).$mount(Div)
    vm.visible = true
    return vm.confirm()
  }
}

export default Message
