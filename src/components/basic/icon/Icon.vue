<template>
  <span class="c-icon-wrapper" @click="bindClick">
    <svg class="c-icon" aria-hidden="true">
      <use v-bind:xlink:href="`#icon-${name}`"></use>
    </svg>
  </span>
</template>

<script>
import './svg'
export default {
  name: 'cIcon',
  props: {
    name: {
      type: String
    }
  },
  methods: {
    bindClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-icon-wrapper {
    width: 1em;
    height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    .c-icon {
      fill: black;
      width: 100%;
      height: 100%;
      vertical-align: top;
      overflow: hidden;

      &:hover {
        fill: #3399ff;
      }
    }
  }
</style>
