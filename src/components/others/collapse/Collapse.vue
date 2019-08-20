<template>
  <div class="c-collapse">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'cCollapse',
    props: {
      selected: {
        type: Array
      },
      accordion: {
        type: Boolean,
        default: false
      }
    },
    created () {
      this.$on('click-title', name => {
        if (this.accordion) {
          let arr = [...this.selected]
          if (arr.indexOf(name) === -1) {
            arr = [name]
          } else {
            arr = []
          }
          this.$emit('update:selected', arr)
        } else {
          let arr = [...this.selected]
          let index = arr.indexOf(name)
          if (index === -1) {
            arr.push(name)
          } else {
            arr.splice(index, 1)
          }
          this.$emit('update:selected', arr)
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
@import '@/scss/baseColor.scss';

.c-collapse {
  border: $borderbase;
  border-radius: 4px;
  cursor: pointer;
}
</style>