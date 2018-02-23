<template>
<div class="footer clearfix">
	<ul>
		<li><router-link to="/"><i><img src="../assets/home.png" alt=""></i><span>首页</span></router-link></li>
		<li><router-link to="/kinds"><i><img src="../assets/kinds.png" alt=""></i>分类</router-link></li>
		<li><router-link to="/cart"><i><img src="../assets/cart.png" alt=""></i>购物车</router-link></li>
		<li><router-link to="/me"><i><img src="../assets/me.png" alt=""></i>我的</router-link></li>
	</ul>
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
.footer{
	position: fixed;
	left:0;
	bottom:0;
	width: 100%;
	height: 70px;
	background:#fff;
	border-top:1px solid #bdbcbc;
	padding:5px 0;
}
.footer ul{
	width: 100%;
	list-style-type: none;
	text-align: center;
	margin: 0;
	padding: 0;
}
.footer ul li{
	width:24%;
	text-align:center;
	display:inline-block;
	font-size:24px;
}
.footer ul li a{
	text-decoration:none;
	color:#333;
}
.footer ul li i{
	display:block;
	width:100%;
	height:40px;
}
.footer ul li i img{
	vertical-align:top;
}
</style>
