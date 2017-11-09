<template>
  <div class="RecruitPage">
	<div class="banner">
		
	</div>
	<div class="join_us same_top">
		<div class="">
			<div class="top">
				<h1>加入我们</h1>
				<p>O2O模式颠覆维修行业传统接单模式</p>
				<p>最新技术研发与海量订单支撑师傅收益</p>
			</div>
			<ul class="cf">
				<li>
					<img src="./img/pig.png">
					<h2>零成本高收入</h2>
					<p>科学合理的奖励体制让能者多得</p>
					<p>完善的福利待遇解决生活后顾无忧</p>
				</li>
				<li>
					<img src="./img/arrow.png">
					<h2>专业技术支持</h2>
					<p>智能定位，分区域离家近</p>
					<p>客户位置清晰明确</p>
				</li>
				<li>
					<img src="./img/hello.png">
					<h2>全方位团队协作</h2>
					<p>互联网+运营模式，客服系统支撑</p>
					<p>线上线下辅助配合家庭维修工作</p>
				</li>
				<li class="last">
					<img src="./img/puzzle.png">
					<h2>便捷信息管理</h2>
					<p>师傅个人信息、用户订单管理</p>
					<p>编辑操作易上手</p>
				</li>
			</ul>
		</div>
	</div> 
	<div class="flow same_top">
		<div class="">
			<div class="top">
				<h1>接单很简单</h1>
				<p>O2O模式颠覆维修行业传统接单模式</p>
			</div>
			<div class="qr">
				<div class="step"></div>
				<h1>扫一扫，下载师傅APP</h1>
				<p>（接单更简单）</p>
				<div class="qrpic"></div>
				<p>叮叮快修，期待与您一起服务更广大的客户群体！</p>
				<p>咨询热线：400-800-8820</p>
			</div>
		</div>
	</div> 
  </div>
</template>

<script>
export default {
	name: 'RecruitPage',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	mounted: function() {
		
	},
  	components: {

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
	.join_us{
		background-color: #f6f6f6;
	}
	.same_top .top h1{
		font-family: 'Microsoft YaHei';
		font-family: MicrosoftYaHei;
		font-size: 0.32rem/* 24px */;
		line-height: 0.32rem/* 24px */;
		padding-top: 0.26666667rem/* 20px */;
		padding-bottom: 0.13333333rem/* 10px */;
		color: #333;
		text-align: center;
	}
	.same_top .top p{
		font-family: 'Microsoft YaHei';
		font-size: 0.21333333rem/* 16px */;
		line-height: 0.46666667rem/* 35px */;
		color: #666;
		text-align: center;
	}
	.join_us ul{
		margin-top: 0.4rem/* 30px */;
		margin-left:0.26666667rem/* 20px */;
	}
	.join_us ul li{
		float: left;
		width: 4.6rem/* 345px */;
		height: 3.12rem/* 234px */;
		margin-right: 0.13333333rem/* 10px */;
		margin-bottom: 0.13333333rem/* 10px */;
		border: 1px solid #ddd;
		background-color: #fff;
	}
	.join_us ul li img{
		width: 1.6rem/* 120px */;
		height:1.6rem/* 120px */;
	}
	.join_us ul li.last{
		margin-right: 0;
	}
	.join_us ul li img{
		display: block;
		margin: 0.13333333rem auto;
	}
	.join_us ul li h2{
		font-family: 'Microsoft YaHei';
		font-size: 0.26666667rem/* 20px */;
		padding-bottom: 0.13333333rem/* 10px */;
		color: #333;
		text-align: center;
	}
	.join_us ul li p{
		font-family: 'Microsoft YaHei';
		font-size: 0.18666667rem/* 14px */;
		line-height: 0.26666667rem/* 20px */;
		color: #666;
		text-align: center;
	}
	.flow{
		margin-bottom: 0.53333333rem/* 40px */;
		background-color: #fff;
	}
	.flow .qr .step{
		width: 9.73333333rem/* 730px */;
		height: 0.4rem/* 30px */;
		margin:0.26666667rem/* 40px */ 0.13333333rem/* 10px */ 0.26666667rem/* 20px */ 0.13333333rem/* 10px */;
		background: url(img/flow.png) no-repeat;
		background-position: center;
	    background-size: 100% 100%;
	}
	.flow .qr h1{
		font-family: 'Microsoft YaHei';
		font-size: 0.32rem/* 24px */;
		padding-bottom: 0.13333333rem/* 10px */;
		color: #333;
		text-align: center;
	}
	.flow .qr p{
		font-family: 'Microsoft YaHei';
		font-size: 0.32rem/* 24px */;
		color: #333;
		text-align: center;
	}
	.flow .qr .qrpic{
		width: 2.66666667rem/* 200px */;
		height: 2.66666667rem/* 200px */;
		margin: 0.13333333rem/* 10px */ auto 0.13333333rem/* 10px */;
		background: url(img/qrpic.png) no-repeat;
		background-position: center;
	    background-size: 100% 100%;
	}
</style>
