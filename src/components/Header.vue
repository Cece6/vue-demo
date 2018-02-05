<template>
  <div class="hello">
    <header><i @click="backBtn" class="iconfont icon-jiantou_zuo" :class="[ isBackShow ? '' : 'is-back']"></i>{{title}}</header>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: ['title','isBackShow'],

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    backBtn(){
        this.$emit("backBtn")
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../assets/reset.scss';
.hello{
    height: 50px;
      header{
        position: relative;
        background: #333;
        color:#fff;
        font-size: 20px;
        text-align: center;
        width: 100%;
        // height: 50px;
        position: fixed;
        top: 0;
        line-height: 50px;
        z-index: 10;
        i{
          position: absolute;
          left: 0px;
          font-size: 40px;
          &.is-back{
            display: none;
          }
        }
    }
}

</style>
