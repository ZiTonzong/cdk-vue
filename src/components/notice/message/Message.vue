<template>
  <transition name="slide-message">
    <div
      class="c-message"
      :class="{[`${options.type}`]: true}"
      v-if="visible">
      <c-icon :name="options.type" class="c-icon"></c-icon>
      {{options.message}}
      <c-icon name="close" class="c-icon close" v-if="options.showClose" @click.native="closeMessage" style="width: 12px; height: 12px;"></c-icon>
    </div>
  </transition>
</template>

<script>
import cIcon from '@/components/basic/icon/Icon.vue'

export default {
  name: 'cMessage',
  components: {
    cIcon
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          type: 'info',
          message: '',
          duration: 2000,
          showClose: false
        }
      }
    }
  },
  data () {
    return {
      visible: false,
      timer: null
    }
  },
  computed: {

  },
  methods: {
    closeMessage () {
      // console.log('触发了closeMessage事件')
      this.close()
    },
    autoClose () {
      // console.log('执行了这里2222')
      this.timer = setTimeout(() => {
        this.close()
        // console.log('执行了这里！！！')
      }, this.options.duration)
    },
    close () {
      this.visible = false
      this.$el.addEventListener('transitionend', this.destroyEle)
    },
    destroyEle () {
      this.$el.addEventListener('transitionend', this.destroyEle)
      this.$destroy()
    }
  },
  mounted () {
    // const div = document.createElement('div')
    // div.className = 'cdkName'
    // let t = document.createTextNode('CLICK ME')
    // div.appendChild(t)
    // document.body.appendChild(div)
    if (!this.options.showClose) {
      this.autoClose()
    }
  },
  beforeDestroy () {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.$el.remove()
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/baseColor.scss';
@import '@/scss/basicStyles.scss';

.c-message {
  // position: fixed;
  // z-index: 30;
  // top: 50px;
  // left: 50%;
  // transform: translateX(-50%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  background: #fff;
  padding: 0.5em 1.2em;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: $shadow;

  > .c-icon {
    margin-right: 0.4em;
    width: 25px;
    height: 25px;

    &.close {
      cursor: pointer;
      margin-left: 3em;
      margin-right: -0.5em;
      color: $sub;
      &:hover {
        color: $hover;
      }
    }
  }
}
@keyframes slide-down {
  from {
    transform: translateY(-100%) translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0) translateX(-50%);
    opacity: 1;
  }
}
.slide-message-enter-active, .slide-message-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.5s ease-in-out;
}
.slide-message-enter-to, .slide-message-leave {
  transform: translateY(0);
  opacity: 1;
}
.slide-message-enter, .slide-message-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
