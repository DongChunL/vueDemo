<template>
    <div>
        <P class="msg">{{msg}}</P>
    </div>
</template>

<script>
    //向外默认暴露一个对象
    /*配置对象与Vue一致
    * 组件的data必须是函数
    * */
    export default {
        name: "HelloWorld",
        data(){
            return{
                msg: "Vue ，初次见面，你好！"
            }
        }
    }
</script>

<style scoped>
    .msg{
        color: red;
        font-size: 30px;
        
    }
</style>