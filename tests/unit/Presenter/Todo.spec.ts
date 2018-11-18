import { expect } from 'chai'
import {mount, shallowMount} from '@vue/test-utils'
import Todo from '@/scripts/Presenter/Todo.vue'

import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI);

// describe('Todo.vue', () => {
//     it('render /todo', () => {
//         const wrapper = shallowMount(Todo, {});
//         expect(wrapper.find('div.title').text()).to.equal("Todo")
//     });
//
//     it('validate todo', () => {
//         const wrapper = mount(Todo);
//         wrapper.find('.add').trigger('click');
//         expect(wrapper.find('.el-form-item__error').text()).to.equal("入力必須です")
//     });
//
//     it('add and delete task', () => {
//         const wrapper = mount(Todo);
//         const taskName = "some name";
//
//         wrapper.find('input').setValue(taskName);
//         wrapper.find('.add').trigger('click');
//
//         expect(wrapper.text()).to.include(taskName);
//
//         wrapper.find('tr.el-table__row button').trigger('click');
//         expect(wrapper.text()).not.include(taskName);
//     });
// });
