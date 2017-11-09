<template>
  <div class="AboutPage">
  		<HeaderTag></HeaderTag>
        <div class="banner"></div>
		<div class="tab">
			<div class="tab_title">
				<ul class="cf">
					<li v-bind:class="[value===0&&'cur']" v-on:click="value=0"><a href="javascript:;">企业介绍</a></li>
					<li v-bind:class="[value===1&&'cur']" v-on:click="value=1"><a href="javascript:;">加入我们</a></li>
					<li v-bind:class="[value===2&&'cur']" v-on:click="value=2"><a href="javascript:;">联系我们</a></li>
					<li v-bind:class="[value===3&&'cur']" v-on:click="value=3"><a href="javascript:;">留言建议</a></li>
					<li v-bind:class="[value===4&&'cur']" v-on:click="value=4"><a href="javascript:;">常见问题</a></li>
				</ul>
			</div>
			<div class="tab_box">
				<div v-if="value === 0">
					<companyIntro></companyIntro>
				</div>
				<div v-if="value === 1">
					<JoinUs></JoinUs>
				</div>
				<div v-if="value === 2">
					<ContactUs></ContactUs>
				</div>
				<div v-if="value === 3">
					<Message></Message>
				</div>
				<div v-if="value === 4">
					<FQA></FQA>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import HeaderTag from './header.vue'
import companyIntro from './companyIntro.vue'
import ContactUs from './ContactUs.vue'
import JoinUs from './JoinUs.vue'
import FQA from './fqa.vue'
export default {
  name: 'AboutPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value:0
    }
  },
  components: {
  	HeaderTag,companyIntro,JoinUs,ContactUs,FQA
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
	width: 10rem;/* 750px */
	height:5.93333333rem/* 445px */;
	background:url(./img/recruit.png) no-repeat;
	background-position: center;
	background-size: 100%;
}
.tab .tab_title{
	border-bottom: 1px solid #fafafa;
}
.tab ul{
	width: 8.13333333rem/* 610px */;
	margin: 0 auto;
}
.tab .tab_title li{
	float: left;
	width: 1.62666667rem/* 122px */;
	height: 0.88rem/* 66px */;
	line-height: 0.88rem/* 66px */;
	color: #333;
	text-align: center;
}
.tab .tab_title a{
	font-family: 'Microsoft YaHei';
	font-size: 0.18666667rem/* 14px */;
	color: #333;
}
.tab .tab_title .cur a{
	color: #ea5413;
}
</style>
