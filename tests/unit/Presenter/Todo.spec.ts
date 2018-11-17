import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Todo from '@/scripts/Presenter/Todo.vue'
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI);

describe('Todo.vue', () => {
    it('render /todo', () => {
        const wrapper = shallowMount(Todo, {});
        expect(wrapper.find('div.title').text()).to.equal("Todo")
    });
});
