<template>
  <div class="c-textarea-wrapper" v-if="type==='textarea'">
    <textarea :style="xStyle" :value="value" @change="$emit('change', $event)" @input="onInput" @focus="$emit('focus', $event)" @blur="$emit('blur', $event)" ref="cTextarea">
    </textarea>
  </div>
  <div class="c-input" :class="{error, disabled}" v-else>
    <c-icon v-if="icon" :name="icon" class="icon" :class="{focus: focus || value}"></c-icon>
    <c-icon name="error" class="error"></c-icon>
    <input :value="value" :type="type" @focus="onFocus" @blur="onBlur"  @input="onInput" @change="onChange" :class="{['no-icon']: !icon}" ref="cInput"/>
    <label v-if="placeholder" :class="{focus: focus || value, ['no-icon']: !icon}">{{placeholder}}</label>
  </div>
</template>

<script>
import cIcon from '@/components/basic/icon/Icon.vue'

export default {
  name: 'cInput',
  components: {
    cIcon
  },
  props: {
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    icon: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    resize: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      focus: false
    }
  },
  computed: {
    xStyle () {
      if (this.resize) {
        return {
          resize: 'auto'
        }
      } else {
        return {
          resize: 'none'
        }
      }
    }
  },
  methods: {
    onFocus (e) {
      this.focus = true
      this.$emit('focus', e)
      if (this.disabled) {
        this.$refs.cInput.blur()
      }
    },
    onBlur (e) {
      if (this.disabled) {
        return
      }
      this.focus = false
      this.$emit('blur', e)
    },
    onInput (e) {
      this.$emit('input', e.target.value)
    },
    onChange (e) {
      this.$emit('change', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/baseColor.scss';

.c-input {
  width: 100%;
  display: inline-flex;
  height: 32px;
  position: relative;
  color: $main;
  font-size: 14px;

  > .icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    pointer-events: none;
    color: $sub;

    &.focus {
      color: $main;
    }
  }
  > .error {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    color: $error;
    pointer-events: none;
    display: none;

    /deep/ .c-icon {
      fill: $error;
    }
  }
  > input {
    width: 100%;
    height: 100%;
    display: block;
    border: 1px solid $border;
    border-radius: 2px;
    box-shadow: none;
    padding: 0 5px 0 30px;
    color: $main;
    &.no-icon {
        padding: 0 5px;
    }
    &:focus {
        outline: none;
        border-color: $p;
    }
    &:hover {
        border-color: $p;
    }
  }
  > label {
    display: block;
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    color: $sub;
    pointer-events: none;
    &.focus {
      display: none;
    }
    &.no-icon {
      left: 5px;
    }
  }
  &.error {
    >.error {
        display: inline-flex;
    }
    >input {
        border-color: $error;
    }
  }
  &.disabled {
    > input {
      cursor: not-allowed;
      user-select: none;
      &:focus {
        outline: none;
        border-color: $border;
      }
      &:hover {
        border-color: $border;
      }
    }
  }
}
.c-textarea-wrapper {
  width: 100%;

  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    padding: .5em .5em;
    border: 1px solid $border;
    border-radius: 4px;
    color: $main;
    font-size: 14px;
    &:hover {
      border-color: $p;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 0 1px $disabled;
    }
  }
}
</style>
