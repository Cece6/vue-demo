<template>
  <div id="app">
    
    <div class="main">
        <router-view/>
    </div>
    
    <Footer/>
  </div>
</template>

<script>

// import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  
  components:{Footer},
  
}
</script>

<style lang='scss'>
@import './assets/common';

#app{
    height: 100%;
    .main{
      height: 100%;
    }
}



</style>
