<template>
    <div>
        <img class="logo" src="./assets/logo.png" alt="logo">
        <!--3\使用组件标签-->
        <HellloWorld/>
    </div>
</template>

<script>
    //1、引入组件
    import HellloWorld from './components/HelloWorld'
    export default {
        name: "App",
        //2、映射组件(可多个)标签
        components: {
           HellloWorld
        },
        data(){
            return {
            }
        }
    }
</script>

<style scoped>
.logo{
    width: 200px;
    height: 200px;
}
</style>