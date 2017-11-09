<template>
	<div class="ContactUs">
		<div class="contact_cnt">
			<div class="contact_img"></div>
			<div>
		       <div class="com_infor">
		  	    	<ul>
		  	    		<li>
		  	    			<h1 class="one">公司地址</h1>
		  	    			<p>深圳市南山区科技南十二路28号康佳研发大厦B座7楼</p>
		  	    		</li>
		  	    		<li>
		  	    			<h1 class="two">联系电话</h1>
		  	    			<p>0755-36529881</p>
		  	    		</li>
		  	    		<li class="special_infor">
		  	    			<h1 class="three">合作联系</h1>
		  	    			<div class="infor_one">
		  	    				<ul>
		  	    				    <li>企业合作</li>
		  	    					<li>联系电话：4009991891</li>
		  	    					<li>E-mail：yunying@177dd.cn</li>
		  	    				</ul>
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
  name: 'ContactUs',
  mounted:function(){

    
  }
}
</script>


<style scoped>
.ContactUs .contact_cnt .contact_img{
	width:10rem;
	height: 4rem;
	border-top: 1px solid #EA5413;
	border-bottom: 1px solid #EA5413;
	background: url(./img/mp.png) no-repeat;
	background-size: 10rem;
	margin: 0 auto;
}
.ContactUs .contact_cnt .com_infor h1{
	font-size: 18px;
	color: #333333;
	font-weight: normal;
	padding-left:  0.266667rem;

}
.ContactUs .contact_cnt .com_infor .one{
	background: url(./img/place.png) no-repeat;
/*	height: 0.266667rem;
	width: 0.266667rem;
	background-size: 0.266667rem;*/
	margin-left:  0.266667rem;
	padding-left:  0.666667rem;
}
.ContactUs .contact_cnt .com_infor{
	margin-top: 0.306667rem;
	margin-bottom: 0.4rem/* 30px */;
}

.ContactUs .contact_cnt .com_infor .two{
	background: url(./img/phone_one.png) no-repeat;
	margin-left:  0.266667rem;
	padding-left:  0.666667rem;
}

.ContactUs .contact_cnt .com_infor .three{
	background: url(./img/team.png) no-repeat;
	margin-left:  0.266667rem;
	padding-left:  0.666667rem;
}
.ContactUs .contact_cnt .com_infor p{
	padding-left:  0.966667rem;
	margin-top:  0.16rem;margin-bottom: 0.16rem;
}
.ContactUs .contact_cnt .com_infor .infor_one li{
	padding-left:  0.866667rem;
	/*line-height: 0.2rem;*/
	margin-top:  0.16rem;


}
</style>
