<template>
  <div class="container" style="border: 1px solid red">
    <c-icon name="github" class="c-icon-style"></c-icon>
    <c-icon name="user" class="c-icon-style"></c-icon>
    <c-icon name="arrow" class="c-icon-style"></c-icon>
    <c-icon name="setting" class="c-icon-style"></c-icon>
    <c-icon name="close" class="c-icon-style"></c-icon>
    <!-- <c-icon name="loading" class="c-icon-style"></c-icon> -->
  </div>
</template>

<script>
import cIcon from '@/components/basic/icon/Icon.vue'
export default {
  name: 'AllComponents',
  // data () {
  //   return {

  //   }
  // },
  components: {
    cIcon
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 500px;
    height: 500px;

    .c-icon-style {
      font-size: 60px;

      /deep/ .c-icon {
        fill: pink;
      }
    }
  }
</style>
