<template>
  <div ref="cutText">
    <p class="content">
      {{content}}
    </p>
    <div class="btn-more" v-if="isShowMoreBtn && !isHiddenMoreBtn && initShowMoreBtn" @click="handleMoreText">{{moreBtnText}}</div>
    <div class="btn-more" v-if="isShowHiddenBtn && isHiddenMoreBtn" @click="handleHiddenText">{{hiddenBtnText}}</div>
    <slot name="more-btn"></slot>
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
      const divWidth = this.lineHeight * this.line
      // console.log('scrollHeight', scrollHeight)
      // console.log('clientHeight', clientHeight)
      // console.log('divWidth', divWidth)
      if (scrollHeight > divWidth) {
        this.initShowMoreBtn = true
        cutTextDom.firstChild.style.height = divWidth + 'px'
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
  mounted () {
    this.initCutText()
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
  color: red;
}
</style>
