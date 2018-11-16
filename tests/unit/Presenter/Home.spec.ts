import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/scripts/Presenter/Home.vue'

describe('Home.vue', () => {
    it('renders /', () => {

        const msg = 'Hello World';
        const wrapper = shallowMount(Home, {
            propsData: { msg }
        });
        expect(wrapper.text()).to.include(msg)

    })
});
