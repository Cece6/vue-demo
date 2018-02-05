<template>
    <div class="home">
          <Header title='掌上书城' class="home-header" :isBackShow="false"/>
          <Carousel/>
          <div class="text-desc"><i class="iconfont icon-lingdang"/>双12全场图书低至1折，更有隐藏神秘惊喜</div>
          <div class="book-list">
            <p class="new-book">新书上架</p>
            <ul class="clearFix">
              <li v-for="item in homeData"  class="clearFix" @click="handleModal(item)" :key="item.id">
                <img :src="item.url" alt="">
                <p class="book-name">{{item.bookName}}</p>
                <p class="book-price">{{item.bookPrice}}</p>
              </li>
            </ul>
          </div>
          <div v-if="showModal">
            <ModalBox @cancleShow='cancleShowModal'/>
          </div>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import homeData from '../mock/homeData';
import ModalBox from './modal'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      homeData: homeData.bookList,
      showModal: false,
    }
  },
  components:{Header,Carousel,Footer,ModalBox},
  beforeMount(){
    //console.log(this.homeData)
  },
  methods: {
      handleModal(item){
          this.showModal = true,
          console.log(item)
      },
      cancleShowModal(){
          this.showModal = false
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

@import '../assets/reset.scss';
.home{
  .text-desc{
    font-size: 14px;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    text-align: center;
    i{
      color: $orange-color;
    }
  }
  .book-list{
    .new-book{
        font-weight: 600;
        width: 95%;
        margin: auto;
        padding: 8px 0;
        font-size: 18px;
    }
    
    ul{
        width: 95%;
        margin: 0 auto 50px; 
        &.clearFix:after{
            content: '';
            height: 0;
            visibility: hidden;
            display: block;
            clear: both;
        }
        li{
          display: inline-block;
          width: 47%;
          font-size: 16px;
          margin-bottom: 10px;
        
        img{
          height: 190px;
        }
          &:nth-child(even){
            float: right;
          }
          &:nth-child(odd){
            float: left;
          }
          .book-name{
              padding: 5px 0;
              
          }
          .book-price{
              color: $orange-color;
          }
        }
    }
  }
}

</style>
