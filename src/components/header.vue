<template>
  <div>
    {{headerTitle}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  computed: {
      headerTitle () {
        return this.$store.getters.getHeaderTitle
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  width: 100%;
  line-height: 70px;
  text-align: center;
  background:#ed5736;
  color:#fff;
}
span{
  text-align:right;
  display:inline-block;
  margin-right: 40px;
}
</style>
