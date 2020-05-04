<template>
    <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
            <Item v-for="(comment,index) in comments" :key="index" :comment="comment"/>
        </ul>
    </div>
</template>

<script>
    import Item from './Item.vue'
    export default {
        name: "List",
        //声明接收属性：这个属性会成为组件对象的属性,指定属性名
        props: ['comments'],
        components: {
            Item
        }
/*        data(){
            return {
                a: 1
            }
        }*/
    }
</script>

<style scoped>

</style>