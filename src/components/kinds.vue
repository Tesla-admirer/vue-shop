<template>
<div class="content">
  <div class="product-kinds">
    <div class="item">春冬装·男</div>
    <div class="item">夏装·男</div>
    <div class="item">秋装·男</div>
    <div class="item">春冬装·女</div>
    <div class="item">夏装·女</div>
    <div class="item">秋装·女</div>
  </div>
  <div class="products">
    <div class="item">
      <img src="../assets/men.jpg" alt="">
      <p>男士针织衫</p>
      <div>
        <span>￥155</span>
        <i></i>
      </div>
    </div>
    <div class="item">
      <img src="../assets/men.jpg" alt="">
      <p>男士针织衫</p>
      <div>
        <span>￥155</span>
        <i></i>
      </div>
    </div>
    <div class="item">
      <img src="../assets/men.jpg" alt="">
      <p>男士针织衫</p>
      <div>
        <span>￥155</span>
        <i></i>
      </div>
    </div>
    <div class="item">
      <img src="../assets/men.jpg" alt="">
      <p>男士针织衫</p>
      <div>
        <span>￥155</span>
        <i></i>
      </div>
    </div>
    <div class="item">
      <img src="../assets/men.jpg" alt="">
      <p>男士针织衫</p>
      <div>
        <span>￥155</span>
        <i></i>
      </div>
    </div>
    <div class="item">
      <img src="../assets/men.jpg" alt="">
      <p>男士针织衫</p>
      <div>
        <span>￥155</span>
        <i></i>
      </div>
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
.item{
  display: inline-block;
}
.product-kinds{
  width: calc(100%-10px);
  padding: 0 20px;
  text-align: center;
  padding:10px 0;
}
.product-kinds .item{
  width: 28%;
  padding: 1rem;
  border:1px solid #aaa;
  margin: 5px 0;
}
.products{
  padding:5px;
  font-size:0;
  background: #d4d4d4;
  width: 100%;
  text-align: center;
  margin-bottom:50px;
}
.products .item{
  width: calc(50% - 5px);
  height:400px;
  background:#fff;
  margin:0 5px 5px 0;
}
.products .item img{
  display: block;
  width: 100%;
  height: 300px;
  background: #aaa;
}
.products .item p,.products .item div{
  text-align:left;
  font-size:24px;
  padding-left:10px;
}
.products .item div{
  color:#ed5736;
}
/* 底导航 */
.footer{
  width: 100%;
  line-height: 50px;
}
.footer ul{
  width: 100%;
  list-style-type: none;
  text-align: center;
  margin: 0;
  padding: 0;
}
.footer li{
  display: inline-block;
  text-align: center;
  width: 22%;
}
</style>
