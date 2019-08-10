<template>
  <button type="button"
    class="c-button"
    :class="{[`icon-${position}`]:true, wave, ...buttonType}" @click="onClick">
    <c-icon v-if="icon" :name="icon" class="c-icon"></c-icon>
    <c-icon name="loading" v-show="loading&&selfLoading" class="c-icon loading"> </c-icon>
    <span class="slot-content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import cIcon from '@/components/basic/icon/Icon.vue'
export default {
  name: 'cButton',
  components: {
    cIcon
  },
  data () {
    return {
      dotVisible: false,
      wave: false,
      selfLoading: false
    }
  },
  props: {
    icon: {
      type: String
    },
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return value === 'primary' || 'info' || 'success' || 'warning' || 'error'
      }
    },
    position: {
      type: String,
      default: 'left',
      validator (value) {
        return value === 'left' || value === 'right'
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonType: function () {
      // console.log(`this.type === 'success'`, this.type)
      return {
        primary: this.type === 'primary',
        info: this.type === 'info',
        success: this.type === 'success',
        warning: this.type === 'warning',
        error: this.type === 'error'
      }
      // return false
    }
  },
  methods: {
    onClick (e) {
      this.$emit('click', e)
      if (this.loading) {
        this.slefLoading = !this.slefLoading
      }
      this.wave = true
    },
    listenAnimation () {
      this.wave = false
    }
  },
  mounted () {
    this.$el.addEventListener('animationend', this.listenAnimation)
  },
  beforeDestroy () {
    this.$el.removeEventListener('animationend', this.listenAnimation)
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/baseColor.scss';

.c-button {
  cursor: pointer;
  font-size: 14px;
  color: $main;
  line-height: 22px;
  height: 32px;
  padding: 0 12px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  position: relative;

  > .c-icon {
    width: 1em;
    height: 1em;
    &.loading {
      animation: loading-spin 1.3s linear infinite;
    }
  }
  &:hover {
    color: $p;
    border-color: $p;
    /deep/ .c-icon {
      fill: #3399ff;
    }
  }
  &:focus {
    outline: none;
    border-color: $p;
    color: $p;
    /deep/ .c-icon {
      fill: #3399ff;
    }
  }
  &.icon-left {
    // margin-top: 10px;
    > .c-icon {
      order: 1;
      margin-right: 0.1em;
    }
    > .slot-content {
      order: 2;
    }
  }
  &.icon-right {
    > .c-icon {
      order: 2;
      margin-left: 0.1em;
    }
    > .slot-content {
      order: 1;
    }
  }
  &::after {
    display: none;
  }
  &.normal {
    background: $bg;
  }
  &.primary {
    background: $primary;
    color: #fff;
    border-color: $primary;

    &:hover {
      background-color: #57a3f3;
      border-color: #57a3f3;
    }
  }
  &.info {
    background: $link;
    color: #fff;
    border-color: $link;

    &:hover {
      background-color: #57c5f7;
      border-color: #57c5f7;
    }
  }
  &.success {
    background: $success;
    color: #fff;
    border-color: $success;

    &:hover {
      background-color: #47cb89;
      border-color: #47cb89;
    }
  }
  &.warning {
    background: $warning;
    color: #fff;
    border-color: $warning;

    &:hover {
      background-color: #ffad33;
      border-color: #ffad33;
    }
  }
  &.error {
    background: $error;
    color: #fff;
    border-color: $error;

    &:hover {
      background-color: #f16643;
      border-color: #f16643;
    }
  }
  &.wave {
    &::after {
      content: '';
      display: block;
      background: $habg;
      pointer-events: none;
      position: absolute;
      z-index: 1;
      top: -1px;
      left: -1px;
      bottom: -1px;
      right: -1px;
      border-radius: inherit;
      border: 0 solid $p;
      opacity: 0.4;
      animation: after-scale 0.5s linear forwards;
      flex-shrink: 0;
    }
  }
}
.icon-left {
  // margin-top: 10px;
}

@keyframes after-scale {
  to {
    top: -6px;
    left: -6px;
    bottom: -6px;
    right: -6px;
    border-width: 6px;
    opacity: 0;
  }
}
@keyframes loading-spin {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
