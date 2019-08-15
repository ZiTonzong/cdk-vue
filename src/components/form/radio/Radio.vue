<template>
  <div class="c-radio" :class="{vertical}">
    <c-option v-for="(option,index) in options" :key="option.value" :option="option" :index="index" :current.sync="current"></c-option>
  </div>
</template>
<script>
import cOption from './Option.vue'
export default {
  name: 'cRadio',
  components: {
    cOption
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    },
    defaultIndex: Number
  },
  data () {
    return {
      current: -1
    }
  },
  watch: {
    current (val) {
      if (val > -1) {
        this.$emit('value-change', this.options[val].value)
      }
    }
  },
  created () {
    if (this.defaultIndex || this.defaultIndex === 0) {
      this.current = this.defaultIndex
    } else {
      this.current = 0
    }
  }
}
</script>
<style lang="scss" scoped>
.c-radio {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.vertical {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
