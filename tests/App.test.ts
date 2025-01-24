import { describe, it, expect } from 'bun:test';
import { mount } from '@vue/test-utils';
import App from '../src/ui/App.vue';

describe('App.vue', () => {
	it('renders the input component', () => {
		const wrapper = mount(App);
		expect(wrapper.findComponent({ name: 'Input' }).exists()).toBe(true);
	});

	it('renders the icons component', () => {
		const wrapper = mount(App);
		expect(wrapper.findComponent({ name: 'Icons' }).exists()).toBe(true);
	});

	it('displays the no results message when no icons are found', async () => {
		const wrapper = mount(App);
		const input = wrapper.find('input');
		await input.setValue('nonexistenticon');
		expect(wrapper.find('#noResults').isVisible()).toBe(true);
	});

	it('hides the no results message when icons are found', async () => {
		const wrapper = mount(App);
		const input = wrapper.find('input');
		await input.setValue('existingicon');
		expect(wrapper.find('#noResults').isVisible()).toBe(false);
	});
});
