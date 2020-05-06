import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
//声明使用插件
Vue.use(VueResource)  //内部会给vm对象和组件对象性添加一个属性：$http{get，post}
new Vue({
    el: "#app",
    components: {App},
    template: '<App/>'
})