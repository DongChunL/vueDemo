<template>
    <div class="todo-footer">
        <label>
            <slot name="checkAll"></slot>
        </label>
        <span>
            <slot name="count"></slot>
        </span>
        <slot name="delete"></slot>
    </div>
</template>

<script>
    export default {
        name: "TodoFooter",
/*        props:{
           todos:Array,
            deleteCompleteTodos:Function,
            selectAllTodos:Function
        },*/
  /*      computed: {
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
        }*/
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }

</style>