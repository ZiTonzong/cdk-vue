<template>
  <div class="c-collapse-item">
    <div class="title" @click="onClick" :class="{selected: selected.indexOf(name)>=0}">
      <c-icon name="right" class="c-icon"></c-icon>
      <slot name="title"></slot>
    </div>
    <c-spread :visible="selected.indexOf(name)>=0">
      <div class="collapse-content">
        <slot></slot>
      </div>
    </c-spread>
  </div>
</template>

<script>
import cIcon from '@/components/basic/icon/Icon.vue'
import cSpread from '@/components/others/spread/Spread.vue'

export default {
  name: 'cCollapseItem',
  components: {
    cSpread,
    cIcon
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    selected () {
      return this.$parent.selected
    }
  },
  methods: {
    onClick () {
      this.$parent.$emit('click-title', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/baseColor.scss';

.c-collapse-item {
  &:first-child {
    > .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom: none;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  > .title {
    border: $borderbase;
    border-bottom: none;
    margin: -1px -1px 0;
    padding: 4px 0 4px 8px;
    background: $bg;
    color: $title;
    font-size: 14px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
    > .c-icon {
      margin-right: 15px;
      width: 10px;
      height: 10px;
      transition: transform 0.3s;
    }
    &.selected {
      > .c-icon {
        transform: rotateZ(90deg);
      }
    }
  }
  .collapse-content {
    font-size: 14px;
    padding: 4px 0 4px 8px;
    text-indent: 2em;
    color: $main;
  }
}
</style>
