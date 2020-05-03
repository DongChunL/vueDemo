/*
* 4、入口JS： 创建Vue实例
* */
//4.1、创建前先引入
import  Vue from 'vue'
import App from './App.vue'

new Vue({
    //4.2、element 看index中的element
    el: '#app',
    components: {
        App //引入组件
    },
    //5、使用组件标签，/*看Vue生命周期中“has 'template' option ?”,判断是否有template，有则将组件编译（挂载到页面*/
    template: '<App/>'

})