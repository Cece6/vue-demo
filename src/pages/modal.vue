<template>
    <div class="modal-frame" >
        <header>
            <i @click="cancleShow" class="iconfont icon-untitled94"></i>
        </header>
        <main>
            <img src="../assets/images/book1.jpg" alt="">
            <div class="book-desc">
                <p><span>作者</span>assssss</p>
                <p><span>页数</span>730</p>
                <p><span>书号</span>Booooooo</p>
                <p><span>出版日期</span>2012年3月1日</p>
               
            </div>
             <p class="details" @click="skipBookDetails">详情<i class="iconfont icon-jiantou"></i></p>
             
        </main>
        <div class="book-details">
            <h2>JavaScript高级程序设计（第三版）</h2>
            <p>《JavaScript高级程序设计(第3版)》是JavaScript超级畅销书的最新版。ECMAScript 5和HTML5在标准之争中双双胜出，
                使大量专有实现和客户端扩展正式进入规范，同时也为JavaScript增添了很多适应未来发展的新特性。
            </p>
            
        </div>
        <footer>
            <div class="book-price">
                <span>￥69.30</span><span>￥69.30</span>
            </div>
            <div class="book-btn">
                <span :class="{active: isActive}" @click="addShoppingCart">加入购物车</span>
                <span :class="{active: !isActive}"  @click="shopNow">立即购买</span>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isActive: true,
        }
    },
    methods: {
        addShoppingCart(){
            this.isActive = !this.isActive;
            this.$router.push({path:'/shoppingCart'})
        },
        shopNow(){
            this.isActive = !this.isActive
        },
        cancleShow(){
            this.$emit('cancleShow')
        },
        skipBookDetails(){
            this.$router.push({path: '/bookDetails'})
        }
        
    }
}
</script>



<style lang="scss" scoped>
    
    .modal-frame{
        position: fixed;
        top: 2.5%;
        left: 2.5%;
        background: #fff;
        width: 95%;
        height: 95%;
        z-index: 11;
        margin: auto;
        border: 1px solid #aaa;
        header{
            border-bottom: 1px solid #ddd;
            padding: 10px;
            text-align: right;
        }
        main{
            padding:2%;
            position: relative;
            color:rgb(27, 27, 27);
            img{
                width: 40%;
            }
            .book-desc{
                display: inline-block;
                vertical-align: top;
                p{  
                    
                    padding-bottom: 15px;
                    &:last-child{
                        // bottom: 0;
                    }
                    span{
                        width: 60px;
                        display: inline-block;
                        color: rgb(134, 134, 134);
                    }
                }
            }
            .details{
                position: absolute;
                right: 2.5%;
                bottom: 1%;
                font-size: 16px;
                color: rgb(134, 134, 134);
            }
        }
        .book-details{
            padding: 0 2.5%;
            h2{
                font-size: 16px !important;
                padding: 10px 0;
                font-weight: 600;
            }
            p{
                color: rgb(121, 121, 121);
            }
        }
        footer{
            position: absolute;
            bottom: 0;
            left: 0;
            background: #fff;
            width: 100%;
            .book-price{
                border-top: 1px solid #ddd;
                border-bottom: 1px solid #ddd;
                span{
                    width: 49%;
                    display: inline-block;
                    text-align: center;
                    padding: 10px 0;
                    &:first-child{
                        border-right: 1px solid #ddd;
                    }
                }
            }
            .book-btn{
                text-align: center;
                margin: auto;
                padding: 10px;
                span{
                    width: 40%;
                    padding: 10px 0;
                    display: inline-block;
                    border:1px solid #ddd;
                    font-size: 16px;
                    &:first-child{
                        border-right: none;
                    }
                    &:last-child{
                        border-left: none;
                    }
                    &.active{
                        background: rgb(51, 153, 51);
                        color: #fff;
                    }

                }
                
            }
        }
    }
</style>

