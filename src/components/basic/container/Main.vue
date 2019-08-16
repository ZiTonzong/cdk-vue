<template>
  <div class="c-main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cMain'
}
</script>

<style lang="scss" scoped>
  .c-main {
    flex-grow: 1;
  }
</style>
