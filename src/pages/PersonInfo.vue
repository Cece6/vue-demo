<template>
    <div class="person-Info">
        <Header title='个人中心' class="home-header" :isBackShow="false"/>
        <div class="person-bg">
            <img src="../assets/images/personPhoto.png" alt="">
            <p>Cece6</p>
        </div>
        <div class="set-info">
            <PersonCom title="设置个人资料" @AllSetPersonInfo="setPersonInfo" class="add-line"/>
            <PersonCom title="收获地址管理" @AllSetPersonInfo="setAddress"/>
            <PersonCom title="我的订单" @AllSetPersonInfo="setIndent"  class="add-line"/>
            <PersonCom title="我的评价" @AllSetPersonInfo="setComment"/>
            <PersonCom title="商品收藏" @AllSetPersonInfo="goodsCollection"  class="add-line"/>
            <PersonCom title="店铺收藏" @AllSetPersonInfo="shopCollection"/>
            <PersonCom title="浏览记录" @AllSetPersonInfo="browsingHistory"/>
            <p>退出登录</p>
        </div>
         
    </div>
</template>

<script>
import Header from '@/components/Header';
import PersonCom from '../components/PersonCom'
export default {
    data(){
        return{

        }
    },
    components: {PersonCom,Header},
    methods: {
        setPersonInfo(){
            //console.log('设置个人资料')
            this.$router.push({path:'/modifyPersonInfo'})
        },
        setAddress(){
            //console.log('收获地址管理')
            this.$router.push({path:'/shippingAddress'})
        },
        setIndent(){
            console.log('我的订单')
        },
        setComment(){
            console.log('我的评论')
        },
        goodsCollection(){
            console.log('商品收藏')
        },
        shopCollection(){
            console.log('店铺收藏')
        },
        browsingHistory(){
            console.log('浏览记录')
        }
    }
}
</script>


<style lang="scss" scoped>
    .person-Info{
        background: #f2f2f2;
        height: 100%;
        .person-bg{
            background: url('../assets/images/personPhotoBg.png') no-repeat;
            background-size: cover;
            text-align: center;
            img{
                width: 150px;
                height: 150px;
                margin: auto;
                padding: 10px 0;
                
            }
            p{
                color: rgb(204, 102, 102);
                font-size: 20px;
            }
        }
        .set-info{
            .add-line{
                 border-top: 1px solid rgb(215, 215, 215);
                 margin-top: 10px;
                
            }
            p{
                margin-bottom: 100px;
                font-size: 20px;
                padding: 10px 0;
                background: rgb(204, 51, 51);
                margin-top: 20px;
                text-align: center;
                color: #fff;
                margin: 10px 2.5% 100px;
                border-radius: 5px;
            }
        }
        
    }
</style>

