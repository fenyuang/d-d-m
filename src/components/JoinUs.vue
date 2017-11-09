<template>
	<div class="company">
		<div class="company_wrap">
			<div>
				<div class="img_content"><!-- <img src="./img/hand.png"> --></div>
				<div class="button"><a href="http://v7.rabbitpre.com/m/yyA7NrT?lc=3&sui=pEsWkTUY&from=timeline&isappinstalled=0#from=share">前往招聘页面</a></div>
			</div>
		</div>
	</div>

</template>

<script>
export default {
  name: 'company',
  mounted:function(){

    
  }
}
</script>



<style scoped>
.company_wrap .img_content{
	background: url(./img/hand.png) no-repeat;
	height: 2.933333rem;
	width: 10.013333rem;
	background-size: 10.013333rem;
	margin: 0 auto;
}
.company_wrap .button{
	width: 3.733333rem;
	height: 1.066667rem;
	background-color: #EA5413;
	line-height: 1.066667rem;
	text-align: center;
	margin: 0 auto;
	margin-top: 0.32rem;

   }
.company_wrap .button a{color: #fff;}
</style>

