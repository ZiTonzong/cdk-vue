<template>
  <div class="container" style="border: 1px solid red">
    <c-icon name="github" class="c-icon-style"></c-icon>
    <c-icon name="user" class="c-icon-style"></c-icon>
    <c-icon name="arrow" class="c-icon-style"></c-icon>
    <c-icon name="setting" class="c-icon-style"></c-icon>
    <c-icon name="close" class="c-icon-style"></c-icon>
    <!-- <c-icon name="loading" class="c-icon-style"></c-icon> -->
    <hr/>
    <c-button icon="github" position="left">github</c-button>
    <c-button icon="success" position="right">success</c-button>
    <c-button type="primary">primary</c-button>
    <c-button type="info">info</c-button>
    <c-button type="warning">warning</c-button>
    <c-button type="error">error</c-button>
  </div>
</template>

<script>
import cIcon from '@/components/basic/icon/Icon.vue'
import cButton from '@/components/basic/button/Button.vue'
export default {
  name: 'AllComponents',
  // data () {
  //   return {

  //   }
  // },
  components: {
    cIcon,
    cButton
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 500px;
    height: 500px;
    margin: 0 auto;

    .c-icon-style {
      font-size: 60px;

      /deep/ .c-icon {
        fill: pink;
      }
    }
  }
</style>
