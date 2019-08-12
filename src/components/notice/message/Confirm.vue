<template>
  <transition name="fade-confirm">
    <div class="c-confirm" v-show="visible">
      <div class="confirm-info">
        <div class="info-title">{{title}}</div>
        <div class="info-message">
          <c-icon name="warning" class="c-icon"></c-icon>
          <p class="text">
            {{message}}
          </p>
        </div>
        <div class="button-wrapper">
          <c-button @click="onClick('cancel')">{{cancelText}}</c-button>
          <c-button @click="onClick('confirm')" type="primary">{{confirmText}}</c-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import cIcon from '@/components/basic/icon/Icon.vue'
import cButton from '@/components/basic/button/Button.vue'

export default {
  name: 'cConfirm',
  components: {
    cButton,
    cIcon
  },
  props: {
    title: {
      type: String,
      default: '提示'
    },
    message: {
      type: String
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  data () {
    return {
      visible: false,
      promiseStatus: null
    }
  },
  methods: {
    onClick (type) {
      if (type === 'confirm') {
        this.promiseStatus.resolve()
      } else {
        this.promiseStatus.reject()
      }
      this.visible = false
      this.$el.addEventListener('transitioned', this.destroyEle())
    },
    confirm () {
      return new Promise((resolve, reject) => {
        this.promiseStatus = {resolve, reject}
      })
    },
    destroyEle () {
      this.$el.removeEventListener('transitioncancel', this.destoryEle)
      this.$destroy()
    }
  },
  beforeDestroy () {
    this.$el.remove()
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/baseColor.scss';

.c-confirm {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  > .confirm-info {
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 400px;
    height: 150px;
    background: #fff;
    padding: 10px;
    border-radius: 4px;
    box-shadow: $shadow;
    line-height: 1.8em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    > .info-title {
      font-size: 16px;
      font-weight: 600;
      color:$title;
    }
    > .info-message {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: $main;
      padding-left: 14px;
      height: 50px;
      > .c-icon {
        color: $warning;
        margin-right: 4px;
        width: 30px;
        height: 30px;
      }
    }
    > .button-wrapper {
      margin-top: 20px;
      text-align: right;
    }
  }
}
.fade-confirm-enter-active, .fade-confirm-leave-active {
  transition: opacity .3s ease-in-out;
}
.fade-confirm-enter-to, .fade-confirm-leave {
  opacity: 1;
}
.fade-confirm-enter, .fade-confirm-leave-to {
  opacity: 0;
}
</style>
