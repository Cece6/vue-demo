<template>
    <div>
        <Header title='分类' class="home-header" :isBackShow="false"/>
        <InputSearch/>
           <ul>  
                <li v-for="item in bookList" :key="item.id" @click="bookDetaile(item)"> 
                    <img :src="item.url" alt="">
                    <div>
                        <p>{{item.bookName}}</p>
                        <p>{{item.bookAuthor}}</p>
                        <p>{{item.bookPrice}}</p>
                    </div>
                    <div class="arrows-right">
                        <i class="iconfont icon-jiantou"></i>
                    </div>
                </li>
            </ul>
            
    </div>
</template>

<script>

import Header from '@/components/Header';
import InputSearch from '../components/InputSearch';
import bookList from '../mock/classify';

export default {
    components: {InputSearch,Header},
    data(){
        return{
            bookList: bookList.bookList,
            allLoaded:false,
        }
    },
    methods: {
        bookDetaile(item){
            console.log(item)
             this.$router.push({path:'/bookDetails'})
        }
        
    }
}
</script>
<style lang="scss" scoped>
    ul{
        width: 95%;
        margin: 0 auto 50px;
        li{
            flex-direction: column;
            border-bottom: 1px solid #ddd;
            padding: 6px 0;
            img{    
                width: 78px;
                height: 98px;
            }
            div{
                &.arrows-right{
                    margin-top: 40px;
                    float: right;
                }
                padding-left: 10px;
                display: inline-block;
                vertical-align: middle;
                p{
                    font-size: 16px;
                    line-height: 25px;
                    &:nth-child(1){
                        color: rgb(51, 102, 204);
                    }
                    &:nth-child(2){
                        color: rgb(121, 121, 121);
                    }
                    &:nth-child(3){
                        color: rgb(204, 102, 51);
                        font-size: 20px;
                        padding-top: 5px;
                    }
                }
                
            }
            &:last-child{
                 border-bottom: none;
            }
            
        }
    }
</style>


