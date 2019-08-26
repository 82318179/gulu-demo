import Vue from 'vue';
import Button from './Button.vue';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';

Vue.component('g-button', Button);

Vue.component('g-button-group', ButtonGroup);

Vue.component('g-icon', Icon);
let vm = new Vue({
    el: '#app',
    data: {
        loading1: true
    }
})