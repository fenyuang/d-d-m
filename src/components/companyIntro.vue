<template>
	<div class="companyIntro">
	<div class="company_infor">
	    <div class="bg_pict"></div>
	    <div class="letter_wrap">
	        <div class="letter_list">
		    	<ul>
		    		<li>
		    			<h1>平台简介</h1>
		    			<p>叮叮快修是以互联网思维和商业模式，汇集中国城市居民日常维修服务需求，整合线下零散维修资源，为用户提供一站式上门维修服务，为师傅提供线上接单创造收益，为社区居民提供解决日常家居维修的信息服务平台.</p> 
		    		</li>
		    		<li>
		    			<h1>经营理念</h1>
		    			<p>送高品质服务上门，让便捷与安全同行，诚信负责，追求卓越</p>
		    		</li>
		    		<li>
		    			<h1>使命</h1>
		    			<p>标准的服务，合理的价格，专业的技能，诚恳的态度，为所有家庭提供上门安装维修一条龙服务</p>
		    		</li>
		    		<li>
		    			<h1>愿景</h1>
		    			<p>服务每个家庭，让生活更舒心。</p>
		    		</li>
		    		<li>
		    			<h1>价值观</h1>
		    			<p>至诚至信，客户为先，创新发展，合作共赢</p>
		    		</li>
		    		<li>
		    			<h1>我们的合作伙伴</h1>
		    			<div class="parter_list cf">
		    	<!-- 		    <span><img src="./img/vanke.png"></span>
		    				<span><img src="./img/super.png"></span>
		    				<span><img src="./img/town.png"></span>
		    				<span><img src="./img/vanke.png"></span> -->
		    			</div>
		    		</li>
		    	</ul>	
	    </div>
	    	
	   </div>

	</div>
	</div>

</template>

<script>
export default {
  name: 'companyIntro',
  mounted:function(){

    
  }
}
</script>

<style scoped>
.companyIntro .company_infor .bg_pict{
	background: url(./img/aboutus.png) no-repeat;
	width: 9.986667rem;
	height: 2.933333rem;
	background-size:9.986667rem; 
}
.companyIntro .company_infor .letter_list{margin-top: 0.1333rem;}
.companyIntro .company_infor .letter_list h1{
	font-weight: normal;
	font-size: 24px;
	font-family: "Microsoft Yahei";
	background:url(./img/line.png) no-repeat;
/*    width: 0.08rem;
    height: 0.44rem;
    background-size: 0.08rem;*/
    padding-left: 0.36667rem;

}
.companyIntro .company_infor .letter_list ul li{
	margin-left: 0.48rem;
	margin-top: 0.2rem;
	margin-right: 0.3rem;
}

.companyIntro .company_infor .letter_list p{
	padding-left: 0.5rem;
	line-height: 0.5rem;
}

</style>
