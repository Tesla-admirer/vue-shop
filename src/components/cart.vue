<template>
	<div class="content">
  		<div class="cart-item clearfix">
  			<input type="checkbox" class="box">
  				<div class="clearfix">
		  			<div class="pic">
		  				<img src="../assets/women.jpg" alt="图片">
		  			</div>
		  			<div class="r">
						<div class="product-name">商品名称</div>
						<button>-</button>
						<input type="text">
						<button>+</button>
		  			</div>
		  			<span class="price">￥55</span>
		  			<a class="del">删除</a>
		  		</div>
	  		</div>
  	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clearfix:after,.clearfix:before{
	clear:both;
	content:"";
}
.content{
	width: 100%;
	font-size: 24px;
}
.cart-item{
	padding:5px 20px;
	height: 100px;
}
.box{
	float:left;
	height: 100px;
	width: 2.5%;
}
.pic{
	float:left;
	width: 15%;
	height: 100px;
}
.pic img{
	height:100%;
	width: 80%;
	margin: 0 auto;
}
.r{
	float:left;
	line-height: 40px;
	width: 38%;
}
.r input{
	width:50px;
	height: 24px;
	outline: 0;
	border: 1px solid #aaa;
	vertical-align: middle;
}
.r button{
	font-size: 24px;
}
.product-name{
	
}
.price{
	display: inline-block;
	width: 30%;
	line-height:100px;
	color:blue;
}
.del{
	line-height:100px;
	float: right;
	width: 10%;
}
</style>
