<template>

    <div class="shopping-cart">
        <Header title='购物车' class="home-header" :isBackShow="false"/>
        <div class="add-padding">
            <p class="edit">编辑</p>
            <ul class="shopping-kind">
                <li v-for="item in shoppingData" :key="item.id">
                    <img :src="item.url" alt="">
                    <div>
                        <p>{{item.bookName}}</p>
                        <p>{{item.bookAuthor}}</p>
                        <p>{{item.bookPrice}}</p>
                        <p>
                            <button @click="ClickMinus(item)" :disabled="item.isDisable">-</button>
                            <button>{{ item.counter }}</button>
                            <button  @click="ClickAdd(item)" :disabled="item.isAddDisable">+</button>
                        </p>
                    </div>
                </li>
                
            </ul>
            <button class="pay-btn" @click="toPay">前往支付</button>
        </div>
        
    </div>
</template>
<script>

import Header from '@/components/Header';
import shoppingData from '../mock/shoppingCart'
export default {
    data(){
        return{
            // // counter: 1,
            // isDisable: false,
            // isAddDisable: false,
            shoppingData: shoppingData.bookList
        }
    },
    components:{Header},
    computed: {

    },
    methods: {
        ClickMinus(item){
            item.isAddDisable = false
            if(item.counter === 1){
                item.isDisable = true
            }else{
                // this.isDisable = false
                item.counter = item.counter - 1
            }
            
        },
        ClickAdd(item){
            item.isDisable = false
            if(item.counter === item.bookMostNum ){
                item.isAddDisable = true
            }else{
                item.counter = item.counter + 1
            }
            
        },
        toPay(){
            console.log(shoppingData)
            this.$router.push({path: '/setCenter'})
        }
    }
}
</script>




<style lang="scss" scoped>
    .shopping-cart{
        background: rgb(242, 242, 242);
        
        height: 100%;
        .add-padding{
            padding: 2.5%;
        
        .edit{
            text-align: right;
        }
        .shopping-kind{
            background: #fff;
            margin-top: 10px;
            // padding: 10px 0;
           
        li{
            font-size: 16px;
            // margin-bottom: 10px;
            border-bottom: 1px solid rgb(215, 215, 215);
            padding: 1%;
            img{
                width: 78px;
                float: left;
                height: 98px;
            }
            div{
                width: 70%;
                padding-left: 10px;
                display: inline-block;
                // vertical-align: middle;
                
                p{
                    font-size: 12px;
                    line-height: 25px;
                    &:nth-child(1){
                        color: rgb(51, 102, 204);
                    }
                    &:nth-child(2){
                        color: rgb(121, 121, 121);
                    }
                    &:nth-child(3){
                        color: rgb(204, 102, 51);
                        font-size: 18px;
                        padding-top: 5px;
                    }
                    &:nth-child(4){
                        text-align: right;
                        button{
                            border: 1px solid #ddd;
                            height: 25px;
                            // padding: 0 5px;
                            font-size: 14px;
                            background: #fff;
                            &:nth-child(2){
                                padding: 0 8px;
                            }
                            &:first-child,&:last-child{
                                width: 25px;
                            }
                        }
                    }
                } 
            }
        }
    }
    .pay-btn{
        width: 100%;
        margin: 20px 0;
        padding: 10px 0;
        background: rgb(51, 153, 51);
        border: none;
        border-radius: 5px;
        color: #fff;
    }
}}
</style>

