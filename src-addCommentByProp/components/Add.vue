<template>
    <div class="col-md-4">
        <form class="form-horizontal">
            <div class="form-group">
                <label>用户名</label>
                <input type="text" class="form-control" placeholder="用户名" v-model="name">
            </div>
            <div class="form-group">
                <label>评论内容</label>
                <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" class="btn btn-default pull-right"@click="add">提交</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Add",
        /*
           *父==>子组件完整通信写法，通信信息结构匹配不一致将抛出警告
           * 指定属性名/类型/必要性
           * */
        props:{
          addComment:{
                type: Function,
                required:true
          }
        },
        data(){
            return {
                name: '',
                content:''
            }
        },
        methods: {
            add(){
                //1、检查合法性
                const name = this.name.trim();
                const content = this.content.trim();
                if(!name||!content){
                    alert('姓名或内容不能为空');
                    return
                }

                //2、收集数据，封装comment对象
                const comment = {
                    name,
                    content
                };
                //3、添加到comments中
                this.addComment(comment);

                //4、清除输入
                this.name = "";
                this.content=""


            }
        }
    }
</script>

<style scoped>

</style>