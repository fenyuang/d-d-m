<template>
	<div class="head">
		<div class="header_wrap">
			<ul class="pict_list">
				<li class="pict_one"><a href=""></a></li>
				<li class="pict_two"><a href=""></a></li>
				<li class="pict_three"><a href=""></a></li>	
			</ul>
			<div class="content_list">
				<ul >
					<li><a href="">首页</a></li>
					<li><a href="">预约维修</a></li>
					<li><a href="">师傅招募</a></li>
					<li><a href="">关于叮叮</a></li>
				</ul>
			</div>
		</div>
	</div>

</template>

<script>
export default {
  name: 'head',
  mounted:function(){

    
  }
}
</script>


<style scoped>
.head .header_wrap{
	height:1.173rem;
	width: 100%;
	line-height: 1.173rem;
/*	background-color: red;*/
}
.head .pict_list li{
	display: inline-block;
}
.head .header_wrap .pict_list {position: relative;}
.head .header_wrap ul .pict_one{
	width: 1.84rem;
	height: 0.4rem;
	background:url(./img/logo.png) no-repeat;
	background-size: 1.84rem;
	margin-left: 0.267rem;

}
.head .header_wrap ul .pict_two{
    width: 1.44rem;
    height: 0.213rem;
	background:url(./img/font.png) no-repeat;
	background-size: 1.44rem;
}
.head .header_wrap ul .pict_three{
    width: 0.533rem;
    height: 0.533rem;
	background:url(./img/a.png) no-repeat;
	background-size: 0.533rem;
	position:absolute;
    right: 0.533rem;top: 0.22rem;
}
.head .header_wrap .content_list{
	height: 100%;
	position: absolute;
	right: 0;
	top: 0;
   background-color: rgba(215,213,206,0.5);
 }
.head .header_wrap .content_list li{
	text-align: center;
	width: 4rem;
	font-family: "Microsof Yahei";
/*	background-color: orange;*/
}

</style>

