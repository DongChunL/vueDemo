<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <!--自定义事件 1、给TodoHeader标签对象绑定事件监听@addPlan，函数addPlan-->
<!--                <TodoHeader @addPlan="addPlan"/>-->
<!--                自定义事件 2、-->
                <TodoHeader ref="header"/>
                <TodoList :todos="todos"/>
                <!--<TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>-->
                <todo-footer>
                    <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
                    <span slot="count">已完成{{completeSize}} / 全部{{todos.length}}</span>
                    <button slot="delete" class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>
                </todo-footer>
            </div>
        </div>
    </div>
</template>
<!--
绑定事件监听 -----  订阅消息(接收消息）
触发事件     -----  发布消息
-->
<script>
    import PubSub from  "pubsub-js"
    import TodoHeader from './componentes/TodoHeader.vue'
    import TodoList from './componentes/TodoList.vue'
    import TodoFooter from './componentes/TodoFooter.vue'
    export default {
        data() {
            return {
                //1、从localstorage读取todos
                /*
                * window.localStorage.getItem(K-V),获得本地存储数据，返回文本格式的内容
                * JSON.parse("String")将文本内容转化为JSON格式
                * */
                todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
                //2、深度监视，监视任何改动；一般监视，只监视外部
                /*[
                    {title: "吃饭",complete:false},
                    {title: "睡觉",complete: true},
                    {title: "coding",complete: false}
                ]*/
            }
        },
        computed: {
            completeSize(){
                return this.todos.reduce((preTotal,todo)=>preTotal + (todo.complete?1:0),0)
            },
            isAllCheck:{
                get(){//根据计算complete所有的true/false情况，修改全选框自身true/false
                    return this.completeSize === this.todos.length && this.completeSize>0
                },
                set(value) {//监视全选框自身true/false的值，更改complete的true/false
                    this.selectAllTodos(value)
                }
            }
        },
        mounted(){ //执行异步代码，挂载前
            //2、页面一打开就监听，给<TodoHeader/>绑定addTodo事件监听
            /*指定事件名，指定回调函数
            * 错误举例this--》App
            *             this.$on('addPlan',this.addPlan)
            * */
            /*
            * refs是数组，获取ref指定的dom节点或子组件，注册信息
            * */
            /*
            * addPlan事件名，this.addPlan回调函数
            * */
            this.$refs.header.$on('addPlan',this.addPlan)

            //订阅消息是异步操作
            /*deleteTodo消息名，参数二回调函数，回调函数的参数二调用发布消息中的数据
            * */
            PubSub.subscribe('deleteTodo',
                (msg,index)=>this.deleteTodo(index)
                //function (msg,index) {
                //本回调函数执行 deleteTodo（）函数
                //this.deleteTodo(index) 该this代表PubSub
            //}
            )
        },
        methods: {
            addPlan(todo){  //3、自定义函数
                const todos = this.todos;
                todos.unshift(todo);
            },
            deleteTodo(index){
                this.todos.splice(index,1);
            },

            //清除选中的，不改变值，  不用参数
            deleteCompleteTodos(){
                /*    this.todos = [''];*/
                this.todos = this.todos.filter(todo=>!todo.complete)
            },
            //更改complete值为true或false，故传参。参数checked即代表全选框是否选中（true,false）
            selectAllTodos(checked){
                this.todos.forEach(todo=>todo.complete=checked);
                /*    for(let i=0;i<this.todos.length;i++){
                        todos[i].complete=true;
                    }*/
            }
        },
        watch:{//深度监视
            todos:{
                deep: true, //监听的数据深度，一般用来监听对象中某个属性的变化
                //handle是深度监视watch中需要具体执行的方法，类型是回调函数，配置handler: function(new,old)
                handler: function(newValue){
                    //将todos最新的值，转换成JSON格式的字符串，保存到localStorage
                    window.localStorage.setItem('todos_key',JSON.stringify(newValue))
                }
            }
        },
        components:{
            TodoHeader,
            TodoList,
            TodoFooter
        },

    }
</script>

<style scoped>
    /*app*/
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
</style>