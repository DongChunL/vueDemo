<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <TodoHeader/>
                <TodoList :todos="todos"/>
                <TodoFooter/>
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