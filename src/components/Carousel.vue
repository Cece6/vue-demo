<template>
  <div class="banner">
     <carousel :indicators="true" :auto="3000" style="padding-bottom: 42%">
        <div v-for="i in 3"><img :src="require('../assets/images/banner'+i+'.png')"></div>
    </carousel>
    
  </div>
</template>
<script>
import Carousel from 'vue-m-carousel'
export default {
  data(){
    return {
      3:[1,2,3]
    }
  },
  components: { Carousel }
}
</script>
<style lang="scss">

.carousel-indicators{
  .carousel-dot{
      border-radius: 50%;
      background: #ffffffa6;
      color: transparent;
      &.active{
        background: #fff;
        color:transparent;
        
        
      }
    }
}
  img{
          width: 100%;
        }

</style>


