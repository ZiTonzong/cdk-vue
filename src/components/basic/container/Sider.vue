<template>
  <c-spread
  :visible="visible"
  horizontal
  style="flex-shrink: 0;"
  >
    <div class="c-sider" v-show="visible">
      <slot></slot>
      <c-icon name="close" class="c-icon" @click="visible=false" v-if="closeButton"></c-icon>
    </div>
  </c-spread>
</template>

<script>
import cIcon from '@/components/basic/icon/Icon.vue'
import cSpread from '@/components/others/spread/Spread.vue'

export default {
  name: 'cSider',
  props: {
    closeButton: {
      type: Boolean,
      default: false
    },
    components: {
      cIcon,
      cSpread
    },
    data () {
      return {
        visible: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/baseColor.scss';

.c-sider {
  position: relative;
  width: 100%;
  height: 100%;

  .c-icon {
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    color: $main;
    width: 12px;
    height: 12px;

    &:hover {
      color: $title;
    }
  }
}
</style>
