import Vue from 'vue';
import Button from './Button.vue';
Vue.component('g-button', Button);
let vm = new Vue({
    el: '#app',
    data: {
        msg: 'hello'
    }
})