<template>
    <div class="settle-center">
        <Header title='结算中心' class="home-header" :isBackShow="true" @backBtn="modifyInfo"/>
        <div class="settle-details">
            <h2>商品信息确认</h2>
            <div class="specific-info">
                <h3>价格信息</h3>
                <p><label>商品总价：</label><span>￥128.60</span></p>
                <p><label>运送费：</label><span>￥0.00</span></p>
                <div class="order-price"><label>订单总计：</label><span>￥128.60</span></div>
            
            </div>
            <div class="specific-info">
                <p><label>收获地址：</label><span>￥128.60</span></p>
                <p><label>运送费：</label><span>￥0.00</span></p>
            </div>
            
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
export default {
    data(){
        return{

        }
    },
    components: {Header},
    methods: {
        modifyInfo(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
    .settle-center{
        height: 100%;
        position: fixed;
        width: 100%;
        z-index: 12;
        .settle-details{
            height: 100%;
            background: rgb(242, 242, 242);
            padding: 2.5%;
            h2{
                font-size: 20px;
                color: rgb(107, 107, 107);
                padding: 10px 0;
            }
            .specific-info{
                border: 1px solid rgb(201, 201, 201);
                background: #fff;
                padding: 2.5%;
                h3{
                    font-size: 20px;
                    color: rgb(54, 54, 54);
                    font-weight: 600;
                }
                p{
                    padding: 1.2%;
                    label{
                        width: 80px;
                        color: rgb(134, 134, 134);
                    }
                    span{
                        width: calc(100% - 80px);
                        display: inline-block;
                        float: right;
                        text-align: right;
                    }
                    
                }
                .order-price{
                        font-size: 20px;
                        font-weight: 600;
                        label{
                            // font-size: 20px;
                            color: rgb(54, 54, 54);
                            
                        }
                        span{
                            color: rgb(204, 102, 51);
                            float: right;
                            text-align: right;
                        }
                        &:nth-child(2){
                            border-top: none;
                        }
                    }
            }
        }
    }
</style>

