<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <TodoHeader :addPlan="addPlan"/>
                <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
                <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"/>
            </div>
        </div>
    </div>
</template>

<script>
    import TodoHeader from './componentes/TodoHeader.vue'
    import TodoList from './componentes/TodoList.vue'
    import TodoFooter from './componentes/TodoFooter.vue'
    export default {
        data() {
            return {
                todos: [
                    {title: "吃饭",complete:false},
                    {title: "睡觉",complete: true},
                    {title: "coding",complete: false}
                ]
            }
        },
        components:{
            TodoHeader,
            TodoList,
            TodoFooter
        },
        methods: {
            addPlan(todo){
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
        }
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