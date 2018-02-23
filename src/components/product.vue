<template>
<div class="wrap">
	<div> {{$route.params.id}}</div>
	<div class="banner"></div>
	<div class="shop_title">
		<div class="price"><strong><em>￥15</em></strong><span>{{msg}}</span></div>
		<div class="title">水果干蜜饯
			<a href="">收藏</a>
		</div>
	</div>
<!-- 	<div class="buy">已选“粉色”</div>
	<div class="comments">买家口碑</div>
	<div class="shop_data">老友粉</div>
	<div class="shop_recommend">
		<h3>店铺推荐</h3>
	</div>
	<div class="product_recommend">
		<h3>商品推荐</h3>
	</div> -->
	<div class="footer clearfix">
		<router-link to="/">首页</router-link>
		<a href="">加入购物车</a>
		<a href="">立即购买</a>
	</div>
</div>

</template>

<script>
export default {
  name: 'index',
  data () {
  	return {
  		msg :'hh'
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
	font-size:24px;
}
.banner{
	width: 100%;
	height: 200px;
	background: #aaa;
}
.buy{
	width: 100%;
	margin-top: 20px; 
	height: 50px;
}
.comments{
	width: 100%;
	height: 50px;
	margin-top: 20px; 
}
.shop_data{
	width: 100%;
	height: 50px;
	margin-top: 20px; 
}
.shop_recommend{
	width: 100%;
	height: 50px;
	margin-top: 20px; 
}
.product_recommend{
	width: 100%;
	height: 50px;
	margin-top: 20px; 
}
.footer{
	position:fixed;
	left:0;
	bottom:70px;
	width: 100%;
	line-height: 50px;
	margin-top: 20px; 
	background:red;
	text-align:left;
}
.footer a{
	float:left;
	width:33.33%;
	text-align:center;
}
</style>
