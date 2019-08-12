<template>
  <div class="container" style="border: 1px solid red">
    <!-- <c-icon name="github" class="c-icon-style"></c-icon>
    <c-icon name="user" class="c-icon-style"></c-icon>
    <c-icon name="arrow" class="c-icon-style"></c-icon>
    <c-icon name="setting" class="c-icon-style"></c-icon>
    <c-icon name="close" class="c-icon-style"></c-icon> -->
    <!-- <c-icon name="loading" class="c-icon-style"></c-icon> -->
    <hr/>
    <div class="btn-warpper">
      <c-button icon="setting" position="left" class="setting-btn">setting</c-button>
      <!-- <c-button icon="close" position="right">github</c-button> -->
      <c-button type="success" position="right">success</c-button>
      <c-button type="primary">primary</c-button>
      <c-button type="info">info</c-button>
      <c-button type="warning">warning</c-button>
      <c-button type="error">error</c-button>
    </div>
    <hr/>
    <div class="message-wrapper">
      <c-button type="info" @click="showInfoMessage">提示信息</c-button>
      <c-button type="success" @click="showSuccessMessage">成功信息</c-button>
      <c-button type="warning" @click="showWarningMessage">警告信息</c-button>
      <c-button type="error" @click="showErrorMessage">错误信息</c-button>
    </div>
    <hr/>
    <div class="confirm-wrapper">
      <c-button type="error" @click="showConfirm">点击打开Confirm弹窗</c-button>
    </div>
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
  },
  methods: {
    showInfoMessage () {
      this.$message({message: '这是一条提示消息', showClose: true})
    },
    showSuccessMessage () {
      this.$message({type: 'success', message: '这是一条成功消息', showClose: true})
    },
    showWarningMessage () {
      this.$message({type: 'warning', message: '这是一条警告消息'})
    },
    showErrorMessage () {
      this.$message({type: 'error', message: '这是一条错误消息'})
    },
    showConfirm () {
      this.$confirm({
        title: '请确认操作',
        confirmText: '确定删除',
        cancelText: '取消删除',
        message: '永久删除该文件，是否继续？'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功',
          duration: 1500
        })
      }).catch(() => {
        this.$message({
          message: '已取消删除',
          duration: 1500
        })
      })
    }
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
    .btn-warpper {
      // height: 100px;
      padding: 30px 0;

      .setting-btn {
        // margin-top: 10px;
        position: relative;
        top: 2.5px;
      }
    }

  }
</style>
