<template>
    <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 v-show='comments.length===0'>暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
            <!--
             :comment1="comment"
            绑定comment1属性，值为v-for中的属性为comment的数据，通过组件通信再传给Item组件
            -->
            <Item v-for="(comment,index) in comments" :key="index" :comment="comment"
                  :deleteComment="deleteComment" :index="index"/>
        </ul>
    </div>
</template>

<script>
    import Item from './Item.vue'
    export default {
        name: "List",
        //声明接收属性：这个属性会成为组件对象的属性,指定属性名
        props: ['comments','deleteComment'],
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