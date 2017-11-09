<template>
  <div class="FQAPage">
	<div class="fqa_content">
		<h1>问叮叮？</h1>
		<div class="question_content">
			<ul>
				<li>
					<div class="one_wrap"><p  class="one_p active">维修后的电脑有保障吗？</p></div>
					<div class="two_wrap">
						<p style="display:block">答：叮叮维修对维修设备均有质保承诺，即维修之日起三个月内，叮叮维修对所修设备都将提供免费维修。</p>  
					</div>
				</li>
				<li>
					<div class="one_wrap"><p class="one_p">下完单又不想修了要收费吗？</p></div>
					<div class="two_wrap">
						<p>答：师傅上门前一小时，您随时可取消订单；师傅上门后，非师傅
                        技能原因用户取消订单的，则需收取30元的上门费。</p>  
					</div>
				</li>
				<li>
					<div class="one_wrap"><p class="one_p">微信支付余额不足时，如何进行支付？</p></div>
					<div  class="two_wrap">
						<p>答：目前平台不支持微信支付+第三方组合支付的方式支付，如当
                        零钱余额不足时，请您先进行余额充值后再进行下一步支付。</p>  
					</div>
				</li>
				<li>
					<div class="one_wrap"><p class="one_p">高空作业费如何收取？</p></div>
					<div class="two_wrap">
						<p>答：四层及以上楼层，高空作业时需要在墙外吊人、吊车时悬空操作
                        的，需要收取高空费100元/台；施工点在阳台、平台上，安全条件好、
                        施工难度较小的情况下无需收费；</p>  
					</div>
				</li>
				<li>
					<div class="one_wrap"><p class="one_p">下单后师傅多久会与我取得联系？</p></div>
					<div class="two_wrap">
						<p>答：下单后师傅会在接收订单后半个小时以内与您联系，并确认
                        订单信息。</p>  
					</div>
				</li>
			</ul>
			<div class="bottom"><a href="">下单流程体验不佳？反馈给我们&gt;&gt;&gt;</a></div>	
		</div>
		
	</div>
  </div>
</template>

<script>
export default {
  name: 'FQAPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:function(){
  	// $(".question_content li").unbind();
  	$(".question_content li").click(function(){
  		$(this).find(".one_p").addClass("active")
  	    $(this).find(".two_wrap p").show();
  	    $(this).siblings().find(".two_wrap p").hide();
  	    $(this).siblings().find(".one_p").removeClass("active");
  	});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.FQAPage{
	background-color: #fafafa;
}
.FQAPage .fqa_content{
	padding: 0 0.4rem/* 30px */;
}
.FQAPage .fqa_content h1{
	text-align: center;
	font-weight: normal;
	font-size: 0.32rem/* 24px */;
	line-height: 0.32rem/* 24px */;
	padding:0.29333333rem/* 22px */ 0;
    color: #ea5413;
}
.FQAPage .fqa_content .question_content .one_p{
	font-size: 0.18666667rem/* 14px */;
	color: #333333;
	background:url(./img/blue.png) no-repeat;
	background-size: 0.30666667rem/* 23px */ 0.30666667rem/* 23px */;
	height: 0.53333333rem/* 40px */;
	line-height: 0.53333333rem/* 40px */;
	padding-left: 0.45333333rem/* 34px */;
    background-position: 0.02666667rem/* 2px */;
    cursor: pointer;
}
.FQAPage .fqa_content .question_content .one_p.active{
	background:url(./img/orange.png) no-repeat;
	background-size: 0.30666667rem/* 23px */ 0.30666667rem/* 23px */;
    background-position-y: 0.06666667rem/* 5px */;
}
.FQAPage .fqa_content .question_content .one_wrap{
	background-color: #dddddd;
	margin-bottom: 0.13333333rem/* 10px */;
}
.FQAPage .fqa_content .question_content .two_wrap p{
	display: none;
    line-height: 0.4rem/* 30px */;
    font-size: 0.21333333rem/* 16px */; 
    color:#333;
    margin: 0.16rem/* 12px */ 0;
    padding-left: 0.29333333rem/* 22px */;

}
.FQAPage .fqa_content .question_content {
	padding-bottom: 0.53333333rem/* 40px */;
}
.FQAPage .fqa_content .question_content .bottom a{
	color: #5db8d8;
	font-size: 0.18666667rem/* 14px */;
	text-align: right;
    display: block;
}

</style>
