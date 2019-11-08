<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="header">
      <div class="logo" @click="onLogoClick">
        <img src="../src/assets/icons/logo.jpg">
        <span class="logo-name"><span class="main-txt">CDK</span>-Vue</span>
      </div>
      <ul class="link">
        <li class="english">github</li>
        <li>博客</li>
        <li>知乎</li>
        <li>微博</li>
        <li>个人主页</li>
      </ul>
    </div>
    <div class="navbar">
      <c-menu :selected-index="selectedIndex" @update:selected-index="val => selected1 = val" :router="true" vertical>
        <c-menu-item name="welcome" index="1">首页</c-menu-item>
        <c-sub-menu name="views" index="2" >
          <template slot="title">视图</template>
          <c-menu-item name="slides" index="2-1">走马灯</c-menu-item>
          <c-menu-item name="developers" index="2-2">开发团队</c-menu-item>
          <c-menu-item name="contacts" index="2-3">联系方式</c-menu-item>
        </c-sub-menu>
        <c-sub-menu name="hire" index="3">
          <template slot="title">招聘</template>
          <c-menu-item name="front" index="3-1">前端开发</c-menu-item>
          <c-menu-item name="back" index="3-2">后端维护</c-menu-item>
          <c-menu-item name="sale" index="3-3">销售团队</c-menu-item>
        </c-sub-menu>
      </c-menu>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selectedIndex: ''
    }
  },
  methods: {
    onLogoClick () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/baseColor.scss';
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
  .outer-container {
    display: flex;
    margin: 0 auto;
    width: 1050px;
    padding: 65px 0 0 250px;
  }
  .header {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);
    padding: 0 20px;
    z-index: 15;

    .logo {
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      .logo-name {
        font-family: Akzidenz Grotesk BQ Light,Helvetica,Arial !important;
        font-size: 30px;
        font-weight: 600;

        .main-txt {
          color: $primary;
        }
      }
    }
    .link {
      display: flex;
      list-style: none;
      margin-right: 40px;

      li {
        cursor: pointer;
        margin-right: 20px;

        &:hover {
          color: $hover;
        }
      }
      .english {
        position: relative;
        top: 2px;
      }
    }
  }

  .navbar {
    width: 250px;
    min-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 60px;
    box-shadow: 1px 0 1px 1px rgba(0, 0, 0, 0.05);
  }
}
</style>
