<template>
  <div ref="cutText">
    <div class="content" >
      <template v-if="!$slots['content']">
        {{content}}
      </template>
      <slot name="content"></slot>
    </div>
    <div class="btn-more" v-if="isShowMoreBtn && !isHiddenMoreBtn && initShowMoreBtn && !$slots['more-btn']" @click="handleMoreText">{{moreBtnText}}</div>
    <div class="btn-more" v-if="isShowHiddenBtn && isHiddenMoreBtn && !$slots['hidden-btn']" @click="handleHiddenText">{{hiddenBtnText}}</div>
    <div class="more-btn-slot-wrapper pointer" @click="handleMoreText">
      <slot name="more-btn"></slot>
    </div>
    <div class="hidden-btn-slot-wrapper pointer" @click="handleHiddenText">
      <slot name="hidden-btn"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cutText',
  props: {
    contentWidth: {
      type: String,
      default: 'auto'
    },
    // 需要展示的行数，默认为 1
    line: {
      type: Number,
      default: 1
    },
    // 一行字的行高，默认 16px
    lineHeight: {
      type: [String, Number],
      default: 16
    },
    content: {
      type: String,
      default: ''
    },
    isShowMoreBtn: {
      type: Boolean,
      default: true
    },
    moreBtnText: {
      type: String,
      default: '更多'
    },
    // 是否开启 更多 按钮插槽，可自定义 更多 按钮的样式、位置
    isOnBtnMoreSlot: {
      type: Boolean,
      default: false
    },
    // 是否显示收起按钮
    isShowHiddenBtn: {
      type: Boolean,
      default: false
    },
    hiddenBtnText: {
      type: String,
      default: '收起'
    },
    // 手动触发组件初始化，用以重新计算文本内容实际高度和截取后的高度
    displayFlagObj: {
      type: [Object, Array],
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      isHiddenMoreBtn: false,
      initShowMoreBtn: false
    }
  },
  methods: {
    initCutText () {
      const cutTextDom = this.$refs.cutText
      const scrollHeight = cutTextDom.firstChild.scrollHeight
      // const clientHeight = cutTextDom.firstChild.clientHeight
      cutTextDom.style.width = this.contentWidth
      cutTextDom.firstChild.style.lineHeight = this.lineHeight + 'px'
      const divHeight = this.lineHeight * this.line
      // console.log('scrollHeight', scrollHeight)
      // console.log('clientHeight', clientHeight)
      // console.log('divHeight', divHeight)
      if (scrollHeight > divHeight) {
        this.initShowMoreBtn = true
        this.isHiddenMoreBtn = false
        cutTextDom.firstChild.style.height = divHeight + 'px'
      }
    },
    handleMoreText () {
      this.isHiddenMoreBtn = true
      const cutTextDom = this.$refs.cutText
      cutTextDom.firstChild.style.height = 'auto'
    },
    handleHiddenText () {
      this.isHiddenMoreBtn = false
      this.initCutText()
      // const cutTextDom = this.$refs.cutText
    }
  },
  watch: {
    displayFlagObj: {
      handler () {
        this.initCutText()
      },
      deep: true
    }
  },
  mounted () {
    this.initCutText()
    // console.log('this', this.$slots, this.$slots['more-btn'])
    // const cutTextDom = this.$refs.cutText
    // console.log('cutTextDom.firstChild.style.height', cutTextDom.firstChild.scrollHeight)
    // console.log('cutTextDom.firstChild.style', cutTextDom.firstChild.clientHeight)
  }
}
</script>

<style scoped>
.content {
  word-wrap:break-word;
  overflow: hidden;
}
.btn-more {
  cursor: pointer;
  color: #00503C;
}
</style>
