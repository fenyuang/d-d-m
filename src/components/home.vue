<template>
  <div class="home">
    <HeaderTag></HeaderTag>
    <div class="banner">
      <div class="section sec1">
        <h1 class="first desc animated" v-bind:class="[index==0&&'bounceInLeft']">全品类家庭维修互联网服务平台</h1>
        <h1 class="desc animated" v-bind:class="[index==0&&'bounceInRight']">一键享受专业维修上门服务</h1>
      </div>
      <div class="section sec2">
        <h1 class="first desc animated" v-bind:class="[index==1&&'zoomIn']">用专业的技术解决家庭维修疑难杂症</h1>
      </div>
      <div class="section sec3">
        <h1 class="first desc animated" v-bind:class="[index==2&&'zoomIn']">三个月内无限次免费为您提供售后服务</h1>
      </div>
      <div class="section sec4">
        <h1 class="first desc animated" v-bind:class="[index==3&&'bounceIn']">每一位师傅都采用严格的五星标准评级</h1>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTag from './header.vue'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      index:0
    }
  },
  mounted: function() {
    document.title="首页 | 叮叮快修 全品类家庭维修互联网服务平台"
    var _this = this;
    PageSlider.case({
      loop: true,
      callback: {
        1: function() {
          _this.index = 0
        },
        2: function() {
          _this.index = 1
        },
        3: function() {
          _this.index = 2
        },
        4: function() {
          _this.index = 3
        }
      }
    });
  },
  components: {
    HeaderTag
  }
}
</script>

<style scoped>
  html,body{ height:100%;}
  .home{height: 100%}
  .section{ display: none; position:absolute; top:0; left:0; width:100%; height:100%; background-color:#FCC; }
  .section.current{ display:inline-block;}
  .section.next{ display:inline-block; z-index: 2;}
  .section.prev{ display:inline-block; z-index: 2;}
  /*img*/
  .section{background-size: 100% 100%;}
  .section h1{
    font-family: MicrosoftYaHei;
    font-size: 0.4rem;/* 30px */
    color: #333252;
    letter-spacing: 0;
    text-align: center;
  }
  .section .first{
    margin-top: 2.66666667rem;/* 350px */
  }
  .sec1{background-image: url(./img/y.png);}
  .sec2{background-image: url(./img/yang.png);}
  .sec3{background-image: url(./img/z.png);}
  .sec4{background-image: url(./img/banner4.png);}
</style>
