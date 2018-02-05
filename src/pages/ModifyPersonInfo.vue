<template>
    <div class="modify-info">
        <Header title='个人资料修改' class="home-header" :isBackShow="true" @backBtn="modifyInfo"/>
        <div class="modify-datum">
            <div>
                <label>昵称</label><input type="text" placeholder="请输入您的昵称">
            </div>
            <div>
                <label>E-mail</label><input type="text" placeholder="请输入您的邮箱">
            </div>
            <div>
                <label>性别</label><p class="gender">
                <span @click="activeMan" ref="man" :class="[isActiveMan ? 'isActiv' : '']">男</span><span @click="activeWoman" ref="woman" :class="[isActiveWoman ? 'isActiv' : '']">女</span><span @click="activeConf" ref="conf" :class="[isActiveConf ? 'isActiv' : '']">保密</span></p>
            </div>
            <div>
                <label>生日</label><input type="date">
            </div>
            <div>
                <label>身份证号</label><input type="text" placeholder="请输入您的18位身份证号">
            </div>
            <div>
                <label>个人描述</label><input type="text" placeholder="请谈谈您对自己的认识">
            </div>
        </div>
        <div class="sure-modif">
            <button>确认修改</button>
        </div>
        
    </div>
</template>

<script>

import Header from '@/components/Header';
export default {
    data(){
        return{
            isActiveMan: false,
            isActiveWoman: false,
            isActiveConf: true

        }
    },
    components:{Header},
    methods: {
        modifyInfo(){
            this.$router.go(-1)
        },
        activeMan(){
            this.isActiveMan = true;
            this.isActiveWoman = false;
            this.isActiveConf = false;
            console.log(this.$refs.man.innerText)
        },
        activeWoman(){
            this.isActiveMan = false;
            this.isActiveWoman = true;
            this.isActiveConf = false;
             console.log(this.$refs.woman.innerText)
        },
        activeConf(){
            this.isActiveMan = false;
            this.isActiveWoman = false;
            this.isActiveConf = true;
            console.log(this.$refs.conf.innerText)
        }
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
                .gender{
                    display: inline-block;
                    border: 1px solid rgb(174, 174, 174);
                    border-radius: 21px;
                    span{
                        width: 70px;
                        padding: 10px 0;
                        text-align: center;
                        display: inline-block;
                        border-right: 1px solid rgb(174, 174, 174);
                        //background: green;
                        
                        &:first-child{
                            border-top-left-radius: 21px;
                            border-bottom-left-radius: 21px;
                        }
                        &:last-child{
                            border-right: none;
                            border-top-right-radius: 21px;
                            border-bottom-right-radius: 21px;
                        }
                        &.isActiv{
                            background: green;
                            color: #ffffff;
                        }
                    }
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

