<template>
    <div class="top-details">
        <Header title='图书详情' class="home-header" :isBackShow="true" @backBtn="bookDetailsBack"/>
        <div class="book-detalis">
            <div class="book-introduce">
                <img src="../assets/images/book1.jpg" alt="">
                <div class="details">
                    <p><span>作者</span>{{bookData[0].bookAuthor}}</p>
                    <p><span>页数</span>{{bookData[0].page}}</p>
                    <p><span>书号</span>{{bookData[0].page}}</p>
                    <p><span>出版日期</span>{{bookData[0].publicationDate}}</p>
                    <p><span>售价</span><span class="price">{{bookData[0].bookPrice}}</span></p>
                </div>
                <div class="add-shopping">
                    <p>{{bookData[0].bookName}}</p>
                    <p>
                        <span :class="[isActive ? 'active':'']" @click="addShopping">加入购物车</span>
                        <span :class="[!isActive ? 'active':'']" @click="buyNow">立即购买</span>
                    </p>
                </div>
            </div>
            <div class="content-details">
                <div class="summary">
                    <h2>内容概要</h2>
                    <p>{{bookData[0].contentDesc}}</p>
                </div>
                 <div class="summary">
                    <h2>内容概要</h2>
                    <p>{{bookData[0].contentDesc}}</p>
                </div>
                <div class="summary">
                    <h2>作者简介</h2>
                    <p>{{bookData[0].authorDesc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header';
import BookDetails from '@/mock/bookDetails';
export default {
    data(){
        return{
            isActive: true,
            bookData: BookDetails.bookDetails
        }
    },
    components: {Header},
    
    mounted(){
        console.log(this.bookData)
    },
    methods: {
        bookDetailsBack(){
            this.$router.go(-1)
        },
        addShopping(){
            this.isActive = !this.isActive;
            this.$router.push({path:'/shoppingCart'})
        },
        buyNow(){
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style lang="scss" scoped>
.top-details{
    height: 100%;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 11;
    overflow: auto;
    .book-detalis{
        background: rgb(242, 242, 242);
        //  height: 100%;
         .book-introduce{
             padding: 2.5%;
            background: #fff;
             img{
                 width: 30%;
             }
             .details{
                 display: inline-block;
                 width: 65%;
                 vertical-align: top;
                 p{ 
                    //  font-size: 0.4rem;
                     padding-left: 5px;
                     color: rgb(27, 27, 27);
                     padding-bottom: 10px;
                     span{
                        color: rgb(134, 134, 134);
                        width: 65px;
                        display: inline-block;
                        &.price{
                            color: rgb(204, 102, 51);
                        }
                     }
                 }
             }    

         }
         .add-shopping{
             p{
                &:nth-child(1){
                     font-size: 16px;
                     font-weight: 600;
                     padding: 10px 0;
                 }
                 &:nth-child(2){
                     text-align: center;
                     span{
                         width: 40%;
                         display: inline-block;
                         border: 1px solid rgb(102, 102, 102);
                         padding: 10px 0;
                         border-radius: 5px; 
                         &:nth-child(1){
                             margin-right: 10%;
                         }
                         &.active{
                             background: green;
                             color: #fff;
                             border-color: green;
                         }
                     }
                 }
             } 
             
         }
         .content-details{
             
             margin-top: 10px;
             background: #ffffff;
             height: 100%;
             padding: 5% 2.5% ;
             //margin-bottom: 50px;
             .summary{
                 border: 1px solid rgb(102, 102, 102);
                 position: relative;
                margin-bottom: 30px;
                 h2{
                    display: inline-block;
                    padding: 0 10px;
                    position: absolute;
                    background: #fff;
                    top: -16px;
                    left: 15px;
                    font-size: 18px;
                 }
                 p{
                     padding: 5%;
                 }
             }
         }
    }
}
    
</style>

