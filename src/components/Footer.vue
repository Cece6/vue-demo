<template>
        <footer>
            <ul>
                <li><router-link :to="{name:'Home'}" :class="$route.name === 'Home' ? 'footer-active': ''"><i class="iconfont icon-home"></i>首页</router-link></li>
                <li><router-link :to="{name:'Classify'}" :class="$route.name === 'Classify' ? 'footer-active': ''"><i class="iconfont icon-fenleishezhi"></i>分类</router-link></li>
                <li><router-link :to="{name:'ShoppingCart'}" :class="$route.name === 'ShoppingCart' ? 'footer-active': ''"><i class="iconfont icon-gouwuche-copy"></i>购物车</router-link></li>
                <li><router-link :to="{name:'PersonInfo'}" :class="$route.name === 'PersonInfo'? 'footer-active': ''"><i class="iconfont icon-mine-red"></i>我</router-link></li>
            </ul>
        </footer>
</template>
<script>
export default {
   data(){
       return{

       }
   },
    
}
</script>

<style lang="scss" scoped>
    footer{
        position: fixed;
        bottom: 0;
        // background: #dddddd;
        display: inline-block;
        width: 100%;
        height: 50px;
        border-top: 1px solid #ddd;
        z-index: 10;
        background: #fff;
        
        ul{
            padding-top: 10px;
            li{
                display: inline-block;
                width: 24%;
                text-align: center;
                a{
                    color: #333333;
                    &.footer-active{
                        color: rgb(51, 153, 51);
                        }
                    i{
                        display: block;
                    }   
                }
                
            }
        }
    }
</style>
