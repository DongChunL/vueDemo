<template>
    <div>
        <header class="site-header jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1>请发表对Vue的评论</h1>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
            <Add :addComment="addComment"/>
            <List :comments="comments" :deleteComment="deleteComment"/>
        </div>
    </div>
</template>

<script>
    import Add from './components/Add.vue'
    import List from './components/List.vue'

    export default {//数据在哪个组件，更新数据的行为（方法）就应该定义在哪个组件
        name: "App",
        components:{
            Add,
            List
        },
        data(){
            return {
                comments: [
                    {
                        name:'BOB',
                        content:'Vue你好'
                    },
                    {
                        name:'丁淑玉',
                        content:'Vue你好哈'
                    },
                    {
                        name:'凯文',
                        content:'Vue你好哦'
                    },
                ]
            }
        },
        //数据在哪个组件，更新数据的行为（方法）就应该定义在哪个组件
        methods:{
            //添加评论
            /*该addComment方法由子组件Add调用，所以要与组件Add通信，将该函数传过去*/
            addComment(comment){
                this.comments.unshift(comment)
            },
            //删除制定下标的评论
            deleteComment(index){
                this.comments.splice(index,1);
            }
        }
    }
</script>

<style scoped>
    .reply {
        margin-top: 0px;
    }
</style>