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
            <Add/>
            <List :comments="comments"/>
        </div>
    </div>
</template>

<script>
    import Add from './components/Add.vue'
    import List from './components/List.vue'

    export default {
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
        }
    }
</script>

<style scoped>
    .reply {
        margin-top: 0px;
    }
</style>