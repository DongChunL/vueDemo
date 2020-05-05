<template>
    <li @mouseenter="handleShow(true)" @mouseleave="handleShow(false)" :style="{background: bgColor}">
        <label>
            <input type="checkbox" v-model="todo.complete"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger"v-show="isShow" @click="deleteItem()">删除</button>
    </li>
</template>

<script>
    export default {
        props: {
            todo: Object,
            index: Number,
            deleteTodo: Function
        },
        data(){
            return{
                bgColor: "white",
                isShow: false //按钮显示与否
            }
        },
        methods:{
            handleShow(isEnter){

                if(isEnter) {
                    this.bgColor = "#aaaaaa";
                    this.isShow = true
                }else{
                    this.bgColor = "white";
                    this.isShow = false
                }
            },
            deleteItem(){
                const {todo,index,deleteTodo} = this;
                if(confirm("确认要删除"+todo.title+"吗？")){
                    deleteTodo(index);
                }
            }
        }
    }
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
/*        display: none;*/
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
</style>