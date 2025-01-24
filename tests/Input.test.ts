import { describe, it, expect } from 'bun:test';
import { mount } from '@vue/test-utils';
import Input from '../src/ui/components/Input.vue';

describe('Input.vue', () => {
	it('renders the input element', () => {
		const wrapper = mount(Input);
		expect(wrapper.find('input').exists()).toBe(true);
	});

	it('sets the correct placeholder text', () => {
		const wrapper = mount(Input);
		expect(wrapper.find('input').attributes('placeholder')).toBe('Search icons');
	});

	it('sets the correct aria-label', () => {
		const wrapper = mount(Input);
		expect(wrapper.find('input').attributes('aria-label')).toBe('Search icons');
	});

	it('emits an input event with the correct value', async () => {
		const wrapper = mount(Input);
		const input = wrapper.find('input');
		await input.setValue('test');
		expect(wrapper.emitted('input')[0]).toEqual(['test']);
	});
});
