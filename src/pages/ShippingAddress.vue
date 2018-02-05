<template>
    <div class="modify-info">
        <Header title='收获地址' class="home-header" :isBackShow="true" @backBtn="modifyInfo"/>
        <div class="modify-datum">
            <div>
                <label>姓名</label><input type="text" placeholder="请输入您的真实姓名">
            </div>
            <div>
                <label>联系电话</label><input type="text" placeholder="请填写我们联系您的电话号码">
            </div>

            <div>
                <label>邮政编码</label><input type="email" placeholder="请填写您所在地区的邮政编码">
            </div>
            <div>
                 <label>所在地区</label><!--<v-distpicker type="mobile" @selected="onSelected"></v-distpicker> -->
            </div>
            <div>
                <label>详细地址</label><input type="text" placeholder="请填写详细的街道、楼栋、门牌号">
            </div>
        </div>
        <div class="sure-modif">
            <button>确认地址</button>
        </div>
        
    </div>
</template>

<script>

import Header from '@/components/Header';
import VDistpicker from 'v-distpicker'
export default {
    data(){
        return{

        }
    },
    components:{Header,VDistpicker},
    methods: {
        modifyInfo(){
            this.$router.go(-1)
        },
        onSelected(data) {
            alert(data.province + ' | ' + data.city + ' | ' + data.area)
            console.log(data)
        },
        
    }
}
</script>

<style lang="scss" scoped>
    .modify-info{
        background: rgb(242, 242, 242);
        height: 100%;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 11;
        .modify-datum{
            div{
                border-bottom: 1px solid rgb(174, 174, 174);
                background: #ffff;
                padding: 10px 2.5%;
                label{
                    width: 20%;
                    display: inline-block;
                }
                input{
                    width: 75%;
                    height: 30px;
                    border: none;
                }
            }
        }
        .sure-modif{
            
            margin: 20px auto;
            text-align: center;
            button{
                width: 95%;
                padding: 10px 0;
                background: green;
                color: #fff;
                border-radius: 5px;
                border: none;
            
            }
        }
        
    }
</style>

