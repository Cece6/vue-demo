<template>
    <div @click="AllSetPersonInfo">
        <span>{{title}}</span><i class="iconfont icon-jiantou" ></i>
    </div>
</template>
<script>
export default {
    props: ['title'],
    data(){
        return{

        }
    },
    methods: {
        AllSetPersonInfo(){
            this.$emit('AllSetPersonInfo')
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
        padding: 10px 2.5%;
        background: #fff;
        border-bottom: 1px solid rgb(215, 215, 215);
        color:rgb(94, 94, 94);
        i{
            float: right;
        }
    } 
</style>

