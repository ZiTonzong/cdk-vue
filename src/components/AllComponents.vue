<template>
  <div class="outer-container">
    <div class="container-1" style="border: 1px solid red">
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
      <hr/>
      <div class="popover-div">
        <c-popover position="top" trigger="click">
          <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
          <c-button>click top 激活</c-button>
        </c-popover>
        <c-popover position="left" trigger="click">
          <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
          <c-button>click left 激活</c-button>
        </c-popover>
        <c-popover position="bottom" trigger="click">
          <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
          <c-button>click bottom 激活</c-button>
        </c-popover>
        <c-popover position="right" trigger="hover">
          <template slot="content">这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template>
          <c-button>hover 激活</c-button>
        </c-popover>
      </div>
      <hr/>
      <div class="button-group-div" style="margin-left: 20px;">
        <c-button-group>
          <c-button>选项一</c-button>
          <c-button>选项二</c-button>
          <c-button>选项三</c-button>
          <c-button>选项四</c-button>
          <c-button>选项五</c-button>
        </c-button-group>
      </div>
      <hr/>
      <div class="input-div">
        <c-input placeholder="请输入内容" :value="input" @input="onInput"></c-input>
        <c-input icon="user" placeholder="请输入内容" v-model="input"></c-input>
        <!-- <input v-model="input"> -->
        <!-- {{input}} -->
        <c-input disabled></c-input>
        <c-input error></c-input>
        <c-input type="textarea"></c-input>
      </div>
      <hr/>
      <div class="switch-div">
        <div>
          <c-switch v-model="switch1"></c-switch>
        </div>
        <div><c-switch v-model="switch2" disabled></c-switch></div>
        <div><c-switch v-model="switch3" true-color="orange" false-color="gray"></c-switch></div>
        <div><c-switch v-model="switch4" true-text="开" false-text="关"></c-switch></div>
      </div>
      <hr/>
      <div class="radio-div">
        <c-radio :options="options" :defaultIndex="2"></c-radio>
      </div>
      <hr/>
    </div>
    <div class="container-2" style="border: 1px solid red">
      <c-row>
        <c-col :mobile="{8:0}"></c-col>
        <c-col :mobile="{8:0}"></c-col>
        <c-col :mobile="{8:0}"></c-col>
      </c-row>
      <c-row>
        <c-col :mobile="{4:0}"></c-col>
        <c-col :mobile="{4:0}"></c-col>
        <c-col :mobile="{4:0}"></c-col>
        <c-col :mobile="{4:0}"></c-col>
        <c-col :mobile="{4:0}"></c-col>
        <c-col :mobile="{4:0}"></c-col>
      </c-row>
    </div>
  </div>

</template>

<script>
import cIcon from '@/components/basic/icon/Icon.vue'
import cButton from '@/components/basic/button/Button.vue'
import cButtonGroup from '@/components/basic/buttongroup/ButtonGroup.vue'
import cPopover from '@/components/notice/popover/Popover.vue'
import cInput from '@/components/form/input/Input.vue'
import cSwitch from '@/components/form/switch/Switch.vue'
import cRadio from '@/components/form/radio/Radio.vue'
import cRow from '@/components/basic/grid/Row.vue'
import cCol from '@/components/basic/grid/Col.vue'

export default {
  name: 'AllComponents',
  components: {
    cIcon,
    cButton,
    cPopover,
    cButtonGroup,
    cInput,
    cSwitch,
    cRadio,
    cRow,
    cCol
  },
  data () {
    return {
      input: '',
      switch1: false,
      switch2: false,
      switch3: false,
      switch4: false,
      options: [
        {label: '香港', value: 'HongKong'},
        {label: '澳门', value: 'Macau'},
        {label: '台湾', value: 'Taiwan'}
      ]
    }
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
    },
    onInput () {
      this.input = arguments[0]
      // console.log(arguments[0])
    }
  }
}
</script>

<style lang="scss" scoped>
  .outer-container {
    display: flex;
    margin: 0 auto;
    width: 1350px;
  }
  .container-1 {
    width: 500px;
    // height: 500px;
    // margin: 0 auto;

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
    .input-div {
      .c-input {
        margin-bottom: 10px;
        width: 250px;
      }
      .c-textarea-wrapper {
        width: 300px;
      }
    }
    .switch-div {
      > div {
        margin-left: 20px;
        margin-top: 10px;
      }
    }
    .radio-div {
      padding: 10px 0;
    }
  }
  .container-2 {
    width: 800px;
    height: 500px;
    margin-left: 30px;

    > .c-row {
      height: 50px;

      > .c-col {
        border: 1px solid gray;
      }
    }
  }
</style>
