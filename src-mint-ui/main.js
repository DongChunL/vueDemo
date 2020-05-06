import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'

import {Button} from 'mint-ui'

//注册成标签（全局注册），所有其他组件都可以使用
//Vue.component('mt-button',Button)
Vue.use(Mint);
Vue.component(Button.name,Button);

new Vue({
    el: "#app",
    components: {App},
    template: '<App/>'
})