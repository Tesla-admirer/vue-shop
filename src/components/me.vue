<template>
  <div class="m-content">
  	<h1 class="title">登录</h1>
  	<div class="name">
  		<div>用户名</div>
  		<input type="text">
  	</div>
  	<div class="password">
  		<div>密码</div>
  		<input type="text">
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
.m-content{
	width:100%;
	padding-left:20px;
	font-size:24px;
}
.m-content .title{
	
}
.name{
	width:100%;
	height:100px;
}
.password{
	width:100%;
	height:100px;
}
.password input,.name input{
	width:60%;
	height:40px;
	border:1px solid #aaa;
}
</style>
