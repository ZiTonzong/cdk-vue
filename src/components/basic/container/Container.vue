<template>
  <div class="c-container" :class="cClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cContainer',
  data () {
    return {
      hasSider: false
    }
  },
  computed: {
    cClass () {
      return {
        'has-sider': this.hasSider
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$children.forEach(vm => {
        if (vm.$options.name === 'cSider') {
          this.hasSider = true
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.c-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &.has-sider {
    flex-direction: row;
  }
}
</style>
