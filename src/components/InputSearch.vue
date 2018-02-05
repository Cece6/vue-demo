<template>
    <div class="serach-box">
        <i class="iconfont icon-search"></i>
        <input type="text" v-model="inputVal"  @keyup.enter="submit"
         placeholder="请输入你想查找的图书名称进行搜索">
    </div>
</template>
<script>
export default {
    data(){
        return{
            inputVal:'',
        }
    },
    methods: {
        submit(){
            console.log(this.inputVal)
        }
    }

}
</script>
<style lang="scss" scoped>
    .serach-box{
        margin:10px auto;
        width: 95%;
        border: 1px solid #ddd;
        height: 30px;
        position: relative;
        border-radius: 18px;
        // margin-top: 60px;
        
        i{
            position: absolute;
            font-size: 26px;
            left: 10px;
            top: 4px;
            color: #aaa;
        }
        input{
            // width: 100%;
             outline: none;
             border: none;
             //height: 100%;
             width: 80%;
            padding-left: 28px;
            margin-left: 10px;
            padding-top: 8px;
            color:#888;
            &::-webkit-input-placeholder{color: #888;}
            
        }
    }
</style>


