import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Counter from '@/scripts/Presenter/Counter.vue'

describe('Counter.vue', () => {
    it('render /counter', () => {

        const msg = 'カウント';
        const wrapper = shallowMount(Counter, {});

        expect(wrapper.text()).to.include(msg)

    });

    it('event onClickCountUp', () => {
        const counter = shallowMount(Counter, {});

        counter.find('button.up').trigger('click');
        expect(counter.find('p').text()).to.include(1);

        counter.find('button.up').trigger('click');
        expect(counter.find('p').text()).to.include(2);
    });

    it('event onClickCountDown', () => {
        const counter = shallowMount(Counter, {});

        counter.find('button.down').trigger('click');
        expect(counter.find('p').text()).to.include(-1);

        counter.find('button.down').trigger('click');
        expect(counter.find('p').text()).to.include(-2);
    })
});
