<template>
  <div>
    <div class="outer-container">
      <div class="container-1" style="border: 1px solid red">
        <c-icon name="github"></c-icon>
        <c-icon name="user" class="c-icon-style"></c-icon>
        <c-icon name="arrow" class="c-icon-style"></c-icon>
        <c-icon name="setting" class="c-icon-style"></c-icon>
        <c-icon name="close" class="c-icon-style"></c-icon>
        <!-- <c-icon name="loading" class="c-icon-style"></c-icon> -->
        <hr />
        <div class="btn-warpper">
          <c-button icon="setting" position="left" class="setting-btn">setting</c-button>
          <!-- <c-button icon="close" position="right">github</c-button> -->
          <c-button type="success" position="right">success</c-button>
          <c-button type="primary">primary</c-button>
          <c-button type="info">info</c-button>
          <c-button type="warning">warning</c-button>
          <c-button type="error">error</c-button>
        </div>
        <hr />
        <div class="message-wrapper">
          <c-button type="info" @click="showInfoMessage">提示信息</c-button>
          <c-button type="success" @click="showSuccessMessage">成功信息</c-button>
          <c-button type="warning" @click="showWarningMessage">警告信息</c-button>
          <c-button type="error" @click="showErrorMessage">错误信息</c-button>
        </div>
        <hr />
        <div class="confirm-wrapper">
          <c-button type="error" @click="showConfirm">点击打开Confirm弹窗</c-button>
        </div>
        <hr />
        <div class="popover-div">
          <c-popover position="top" trigger="click">
            <template slot="content">
              这是一段内容,这是一段内容,这是一段内容,这是一段内容。
            </template>
            <c-button>click top 激活</c-button>
          </c-popover>
          <c-popover position="left" trigger="click">
            <template slot="content">
              这是一段内容,这是一段内容,这是一段内容,这是一段内容。
            </template>
            <c-button>click left 激活</c-button>
          </c-popover>
          <c-popover position="bottom" trigger="click">
            <template slot="content">
              这是一段内容,这是一段内容,这是一段内容,这是一段内容。
            </template>
            <c-button>click bottom 激活</c-button>
          </c-popover>
          <c-popover position="right" trigger="hover">
            <template slot="content">
              这是一段内容,这是一段内容,这是一段内容,这是一段内容。
            </template>
            <c-button>hover 激活</c-button>
          </c-popover>
        </div>
        <hr />
        <div class="button-group-div" style="margin-left: 20px;">
          <c-button-group>
            <c-button>选项一</c-button>
            <c-button>选项二</c-button>
            <c-button>选项三</c-button>
            <c-button>选项四</c-button>
            <c-button>选项五</c-button>
          </c-button-group>
        </div>
        <hr />
        <div class="input-div">
          <c-input placeholder="请输入内容" :value="input" @input="onInput"></c-input>
          <c-input icon="user" placeholder="请输入内容" v-model="input"></c-input>
          <!-- <input v-model="input"> -->
          <!-- {{input}} -->
          <c-input disabled></c-input>
          <c-input error></c-input>
          <c-input type="textarea"></c-input>
        </div>
        <hr />
        <div class="switch-div">
          <div>
            <c-switch v-model="switch1"></c-switch>
          </div>
          <div><c-switch v-model="switch2" disabled></c-switch></div>
          <div><c-switch v-model="switch3" true-color="orange" false-color="gray"></c-switch></div>
          <div><c-switch v-model="switch4" true-text="开" false-text="关"></c-switch></div>
        </div>
        <hr />
        <div class="radio-div">
          <c-radio :options="options" :defaultIndex="2"></c-radio>
        </div>
        <hr />
      </div>
      <div class="container-2" style="border: 1px solid red">
        <c-row>
          <c-col :mobile="{ 8: 0 }"></c-col>
          <c-col :mobile="{ 8: 0 }"></c-col>
          <c-col :mobile="{ 8: 0 }"></c-col>
        </c-row>
        <c-row>
          <c-col :mobile="{ 4: 0 }"></c-col>
          <c-col :mobile="{ 4: 0 }"></c-col>
          <c-col :mobile="{ 4: 0 }"></c-col>
          <c-col :mobile="{ 4: 0 }"></c-col>
          <c-col :mobile="{ 4: 0 }"></c-col>
          <c-col :mobile="{ 4: 0 }"></c-col>
        </c-row>
        <hr />
        <div class="spread-div">
          <div class="vertical-wrapper">
            <c-button @click="visible1 = !visible1">纵向动画</c-button>
            <c-spread :visible="visible1" :duration="1000">
              <div class="content"></div>
            </c-spread>
          </div>
          <div class="horizontal-wrapper">
            <c-button @click="visible2 = !visible2">横向动画</c-button>
            <c-spread :visible="visible2" :duration="1000" horizontal>
              <div class="content"></div>
            </c-spread>
          </div>
        </div>
      </div>
    </div>
    <div class="container-3" style="border: 0px solid red">
      <!-- <c-container>
        <c-header>
          <h1>这里是header</h1>
        </c-header>
        <c-main>
          <h1>main</h1>
        </c-main>
        <c-footer>
          <h1>这里是footer</h1>
        </c-footer>
      </c-container> -->
      <c-container>
        <c-header>
          <h1>这里是header</h1>
        </c-header>
        <c-container>
          <c-sider>
            <h3>这里是sider</h3>
          </c-sider>
          <c-main>
            <h1>这里是main</h1>
          </c-main>
        </c-container>
        <c-footer>
          <h1>这里是footer</h1>
        </c-footer>
      </c-container>
    </div>
    <div class="container-4" style="border: 0px solid red">
      <c-container>
        <c-sider close-button><h3>这里是sider</h3></c-sider>
        <c-container>
          <c-header><h1>这里是header</h1></c-header>
          <c-main><h1>这里是main</h1></c-main>
          <c-footer><h1>这里是footer</h1></c-footer>
        </c-container>
      </c-container>
    </div>
    <div class="container-5">
      <c-collapse :selected.sync="activeNames" :accordion="true">
        <c-collapse-item name="sports">
          <template slot="title">
            体育
          </template>
          据俄罗斯卫星通讯社报道称，日前埃尔多安在土耳其中部城市锡瓦斯表示道，拥核国家禁止土耳其拥有自己的核武器是不可接受的。其称，有些国家拥有带核弹头的导弹，还不止一枚两枚，但这些国家却告诉土耳其不能拥有核武器，这令土方无法接受。accordionaccordion
        </c-collapse-item>
        <c-collapse-item name="entertainment">
          <template slot="title">
            娱乐
          </template>
          据俄罗斯卫星通讯社报道称，日前埃尔多安在土耳其中部城市锡瓦斯表示道，拥核国家禁止土耳其拥有自己的核武器是不可接受的。其称，有些国家拥有带核弹头的导弹，还不止一枚两枚，但这些国家却告诉土耳其不能拥有核武器，这令土方无法接受。
        </c-collapse-item>
        <c-collapse-item name="military">
          <template slot="title">
            军事
          </template>
          据俄罗斯卫星通讯社报道称，日前埃尔多安在土耳其中部城市锡瓦斯表示道，拥核国家禁止土耳其拥有自己的核武器是不可接受的。其称，有些国家拥有带核弹头的导弹，还不止一枚两枚，但这些国家却告诉土耳其不能拥有核武器，这令土方无法接受。
        </c-collapse-item>
        <c-collapse-item name="people's livelihood">
          <template slot="title">
            民生
          </template>
          据俄罗斯卫星通讯社报道称，日前埃尔多安在土耳其中部城市锡瓦斯表示道，拥核国家禁止土耳其拥有自己的核武器是不可接受的。其称，有些国家拥有带核弹头的导弹，还不止一枚两枚，但这些国家却告诉土耳其不能拥有核武器，这令土方无法接受。
        </c-collapse-item>
        <c-collapse-item name="social">
          <template slot="title">
            社会
          </template>
          据俄罗斯卫星通讯社报道称，日前埃尔多安在土耳其中部城市锡瓦斯表示道，拥核国家禁止土耳其拥有自己的核武器是不可接受的。其称，有些国家拥有带核弹头的导弹，还不止一枚两枚，但这些国家却告诉土耳其不能拥有核武器，这令土方无法接受。
        </c-collapse-item>
      </c-collapse>
    </div>
    <div class="container-5">
      <c-tabs :selected.sync="selectTab">
        <template slot="title">
          <c-tabs-title name="shaolin">少林</c-tabs-title>
          <c-tabs-title name="wudang">武当</c-tabs-title>
          <c-tabs-title name="xiaoyao">逍遥</c-tabs-title>
          <c-tabs-title name="tianlongjiao" disabled>天龙教</c-tabs-title>
          <c-tabs-title name="mingjiao">明教</c-tabs-title>
        </template>
        <c-tabs-pane name="shaolin">
          <p>
            少林寺号称“天下第一名刹”，一直引领武林正道。少林寺下设罗汉堂、达摩堂、般若院皆有一位首座高僧，加上十八铜人，少林可谓高手云集。据传其藏经阁中不仅有闻名天下的少林七十二绝技，更有在这之上的易筋、洗髓二经，得之任一便可独步武林。
          </p>
        </c-tabs-pane>
        <c-tabs-pane name="wudang">
          <p>
            百年前，张三丰张真人创立了武当派。武当武学讲究以静制动，以柔克刚，以短胜长，以慢击快。武当作为武林大派，尽管外表光鲜，实则门派内部已经矛盾重重。掌门卓人清似乎为弟子中下一任的掌门人选伤透了脑筋。
          </p>
        </c-tabs-pane>
        <c-tabs-pane name="xiaoyao">
          <p>
            逍遥派是武林中最神秘的门派，择徒要求甚严，往往整个门派只有寥寥数人，但凡其门下弟子个个皆是人中龙凤。逍遥派不仅在武学一途上甚是了得，医卜星相，琴棋书画，机械杂工，贸迁种植，斗酒唱曲，行令猜谜，逍遥弟子无所不通，无所不精，更有杰出者能兼奇门遁甲之术。
          </p>
        </c-tabs-pane>
        <c-tabs-pane name="tianlongjiao">
          <p>
            天龙教崛起自西域，两位教主天王，龙王皆是天下一等一的高手。天龙教以“止戈为武”作为自身的理念，扶危济困，其教众迅速增长，声势日隆，令中原武林无不侧目。
          </p>
        </c-tabs-pane>
        <c-tabs-pane name="mingjiao">
          <p>
            明教正式名称为摩尼教，又作牟尼教，发源于古代波斯萨珊王朝，为公元3世纪中叶波斯人摩尼（Mānī）所创立，受基督教与伊朗祆教马兹达教义所影响，是一种带有诺斯底主义色彩的二元论宗教。主要教义为"二宗三际论"，崇尚光明。
          </p>
          <p>
            摩尼教约于六至七世纪传入我国新疆地区，复由新疆传入漠北之回纥，而盛行于该地。唐代宗大历三年（768），应回纥之请，于江淮等地建立摩尼寺。唐武宗会昌五年（845）灭佛时，摩尼教亦遭严重打击，转而成为秘密宗教，并吸收道教及民间信仰，从而改称明教。明教因相信黑暗就要过去，光明即将来临，故敢于造反，屡有反政府之举。自北宋末年起，浙江、江西、安徽等地，皆曾发生明教造反之事。其后明教又与弥勒教、白莲社相结合，而演变成明代末年之白莲教。明教一词至清代虽已不复见于文献，但“明王”出世之说，犹流传于民间。
          </p>
        </c-tabs-pane>
      </c-tabs>
    </div>
    <div class="container-6">
      <c-menu :selected-index="selected1" @update:selected-index="val => (selected1 = val)" :router="true" vertical accordion>
        <c-menu-item name="welcome" index="1">首页</c-menu-item>
        <c-sub-menu name="about" index="2">
          <template slot="title">
            关于
          </template>
          <c-menu-item name="culture" index="2-1">企业文化</c-menu-item>
          <c-menu-item name="developers" index="2-2">开发团队</c-menu-item>
          <c-menu-item name="contacts" index="2-3">联系方式</c-menu-item>
        </c-sub-menu>
        <c-sub-menu name="hire" index="3">
          <template slot="title">
            招聘
          </template>
          <c-menu-item name="front" index="3-1">前端开发</c-menu-item>
          <c-menu-item name="back" index="3-2">后端维护</c-menu-item>
          <c-menu-item name="sale" index="3-3">销售团队</c-menu-item>
        </c-sub-menu>
      </c-menu>
    </div>
    <div class="container-7">
      <c-date-picker v-model="date" :default-value="today"></c-date-picker>
    </div>
    <div class="container-7">
      <c-time-picker v-model="time" default-value="12:00:00"></c-time-picker>
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
import cSpread from '@/components/others/spread/Spread.vue'
import cContainer from '@/components/basic/container/Container.vue'
import cHeader from '@/components/basic/container/Header.vue'
import cFooter from '@/components/basic/container/Footer.vue'
import cMain from '@/components/basic/container/Main.vue'
import cSider from '@/components/basic/container/Sider.vue'
import cCollapse from '@/components/others/collapse/Collapse.vue'
import cCollapseItem from '@/components/others/collapse/CollapseItem.vue'
import cTabs from '@/components/navigation/tabs/Tabs.vue'
import cTabsTitle from '@/components/navigation/tabs/TabsTitle.vue'
import cTabsPane from '@/components/navigation/tabs/TabsPane.vue'
import cDatePicker from '@/components/form/datePicker/DatePicker.vue'
import cTimePicker from '@/components/form/timePicker/TimePicker.vue'
// import router from '@/router'

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
    cCol,
    cSpread,
    cContainer,
    cHeader,
    cFooter,
    cMain,
    cSider,
    cCollapse,
    cCollapseItem,
    cTabs,
    cTabsTitle,
    cTabsPane,
    cDatePicker,
    cTimePicker
  },
  data() {
    return {
      input: '',
      switch1: false,
      switch2: false,
      switch3: false,
      switch4: false,
      options: [{ label: '香港', value: 'HongKong' }, { label: '澳门', value: 'Macau' }, { label: '台湾', value: 'Taiwan' }],
      visible1: true,
      visible2: true,
      activeNames: [],
      selectTab: 'shaolin',
      selected1: '2-1',
      date: '',
      today: '2020-12-11',
      time: '12:22:33'
    }
  },
  methods: {
    showInfoMessage() {
      this.$message({ message: '这是一条提示消息', showClose: true })
    },
    showSuccessMessage() {
      this.$message({ type: 'success', message: '这是一条成功消息', showClose: true })
    },
    showWarningMessage() {
      this.$message({ type: 'warning', message: '这是一条警告消息' })
    },
    showErrorMessage() {
      this.$message({ type: 'error', message: '这是一条错误消息' })
    },
    showConfirm() {
      this.$confirm({
        title: '请确认操作',
        confirmText: '确定删除',
        cancelText: '取消删除',
        message: '永久删除该文件，是否继续？'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功',
            duration: 1500
          })
        })
        .catch(() => {
          this.$message({
            message: '已取消删除',
            duration: 1500
          })
        })
    },
    onInput() {
      this.input = arguments[0]
      // console.log(arguments[0])
    }
  },
  mounted() {
    console.log('this.$router', this.$router)
    // setTimeout(() => {
    //   router.push({name: 'waterfall'})
    // }, 5000)
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/baseColor.scss';
div > .container-3,
.container-4,
.container-5 {
  margin: 0 auto;
  padding: 65px 0 0 250px;
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
  // height: 500px;
  margin-left: 30px;

  > .c-row {
    height: 50px;

    > .c-col {
      border: 1px solid gray;
    }
  }
  .spread-div {
    .content {
      margin-top: 20px;
      margin-bottom: 20px;
      width: 300px;
      height: 300px;
      background: $primary;
    }
  }
}
.container-3 {
  width: 800px;
  height: 600px;
  text-align: center;
  // padding: 65px 0 0 250px;
  margin-right: 250px;
  // overflow: hidden;

  .c-header,
  .c-footer {
    background: #b3c0d1;
  }
  .c-spread {
    background: gray;
  }
  .c-main {
    // margin: 0 auto;
    line-height: 401px;
    background: #e9eef3;
  }
}
.container-4 {
  margin-top: 70px;
  width: 800px;
  height: 600px;
  text-align: center;

  .c-spread {
    background: gray;
    width: 100px;
  }
  .c-container {
    flex: 1;

    .c-header,
    .c-footer {
      background: #b3c0d1;
    }
    .c-main {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.container-5 {
  margin-top: 70px;
  width: 800px;
  height: 200px;
  text-align: center;
}
.container-6 {
  margin: 70px auto 0;
  // margin-top: 70px;
  width: 800px;
  height: 400px;
}
.container-7 {
  @extend .container-6;
  height: 200px;
}
</style>
