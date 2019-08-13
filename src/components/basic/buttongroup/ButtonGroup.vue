<template>
  <div class="c-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cButtonGroup',
  mounted () {
    for (let node of this.$el.children) {
      let name = node.tagName.toLowerCase()
      if (name !== 'button') {
        console.log(`c-button-group的子元素只能是c-button, 当前为${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/baseColor.scss';

.c-button-group {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  > .c-button {
    border-radius: 0;
    border-top: 1px solid $title;
    // border-bottom: 1px solid $title;
    border-left: none;
    border-right: none;
    position: relative;

    &::before {
      content: '';
      display: none;
      position: absolute;
      top: -1px;
      left: 0;
      right: 0;
      bottom: -1px;
      border-left: 1px solid $p;
      border-right: 1px solid $p;
      border-radius: inherit;
      pointer-events: none;
      z-index: 1;
    }

    &:hover {
      &::before {
        display: block;
      }
    }
    &:focus {
      &::before {
        display: block;
      }
    }
    &:first-child {
      border-left: 1px solid $title;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;

      &:hover {
        border-left-color: $p;
      }
      &::before {
        left: -1px;
      }
    }
    &:last-child {
      border-right: 1px solid $title;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      &:hover {
        border-right-color: $p;
      }
      &::before {
        right: -1px;
      }
    }
  }
}
</style>
