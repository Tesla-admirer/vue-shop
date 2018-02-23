<template>
 <div class="content">
 	<div class="banner"><img src="../assets/banner.jpg" alt=""></div>
 	<div class="product">
	 	<div class="title clearfix">
	 		<h1>热销商品</h1>
	 		<a href="#">更多</a>
	 	</div>
		<ul class="clearfix">
			<li v-for="product in h_product">
				<router-link :to="{ name: 'product', params: { id: product.id }}"><img src="../assets/men.jpg"></router-link>
				<p>{{product.product_name}}</p>
				<div>
					<span>￥{{product.price}}</span>
					<i></i>
				</div>	 
			</li>
<!-- 			<li>
			<router-link to="/product"><img src="../assets/men.jpg"></router-link>
			<p>男士针织衫</p>
			<div>
				<span>￥155</span>
				<i></i>
			</div>	 
		</li>
		<li>
			<router-link to="/product"><img src="../assets/men.jpg"></router-link>
			<p>男士针织衫</p>
			<div>
				<span>￥155</span>
				<i></i>
			</div>	 
		</li>
		<li>
			<router-link to="/product"><img src="../assets/men.jpg"></router-link>
			<p>男士针织衫</p>
			<div>
				<span>￥155</span>
				<i></i>
			</div>	 
		</li>	 -->		
		</ul>
	</div>
	<div class="product">
	 	<div class="title clearfix">
	 		<h1>热销商品</h1>
	 		<a href="#">更多</a>
	 	</div>
		<ul class="clearfix">
			<li>
				<router-link :to="{ name: 'product', params: { id: 123 }}"><img src="../assets/women.jpg"></router-link>
				<p>男士针织衫</p>
				<div>
					<span>￥155</span>
					<i></i>
				</div>	 
			</li>
			<li>
				<router-link to="/product"><img src="../assets/women.jpg"></router-link>
				<p>男士针织衫</p>
				<div>
					<span>￥155</span>
					<i></i>
				</div>	 
			</li>
			<li>
				<router-link to="/product"><img src="../assets/women.jpg"></router-link>
				<p>男士针织衫</p>
				<div>
					<span>￥155</span>
					<i></i>
				</div>	 
			</li>
			<li>
				<router-link to="/product"><img src="../assets/women.jpg"></router-link>
				<p>男士针织衫</p>
				<div>
					<span>￥155</span>
					<i></i>
				</div>	 
			</li>
		</ul>
	</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      h_product:[
      	{
      		id:'1',
      		product_name:'男士针织衫',
      		price:'155'
      	},
      	{
      		id:'2',
      		product_name:'男士针织衫',
      		price:'155'
      	},
      	{
      		id:'3',
      		product_name:'男士针织衫',
      		price:'155'
      	},
      	{
      		id:'4',
      		product_name:'男士针织衫',
      		price:'155'
      	}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
	width: 100%;
	margin-bottom:70px;
	background:#d4d4d4;
}
.banner{
	width: 100%;
	height: 300px;
}
.banner img{
	width:100%;
	height:100%;
}
.classify{
	width: 100%;
	line-height: 100px;
	text-align: center;
}
.classify div{
	display: inline-block;
	padding: 0 20px;
}
.content .product{
	margin-top:10px;
	border-top:1px solid #aaa;
}
.content ul{
	list-style-type: none;
	text-align: center;
	margin: 0;
	padding: 0;
}
.content li{
	float:left;
	height:400px;
    width:calc(50% - 5px);
    margin:0 5px 5px 0;
    text-align:left;
    background:#fff;
}
.content li img{
	width: 100%;
	height: 80%;
}
.content li span{
	 color:#ff2121;
}
.title{
	background:#fff;
	padding:0 20px;
	line-height:50px;
	border-bottom:1px solid #aaa;
}
.title h1{
	font-size:24px;
	float:left;
	margin: 0;
	padding:0;
}
.title a{
	display:block;
	float:right;
	margin-right:20px;
	color:#aaa;
	text-decoration:none;
}
.clearfix{
	content: ".";
	clear: both;
	overflow: hidden;
}

</style>
