/*
* 使用localStorage存储数据的工具模块
* 暴露形式
* 1.函数
* 2.对象
* 暴露选择：需要向外暴露一个还是多个功能
* 此处一读一写，两个功能。暴露形式为对象
* */
const TODOS_KEY  = 'todos_key';
export default{
    //保存
    saveTodos(todos){
        console.log("hei save");
        window.localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
    },
    //读取
    readTodos(){
        return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
    }
}