import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Input from '../src/ui/components/Input.vue'

describe('Input.vue', () => {
	it('renders correctly', () => {
		const wrapper = mount(Input)
		expect(wrapper.find('#searchInput').exists()).toBe(true)
	})

	it('has correct attributes', () => {
		const wrapper = mount(Input)
		const input = wrapper.find('#searchInput')
		expect(input.attributes('type')).toBe('search')
		expect(input.attributes('placeholder')).toBe('Search icons')
		expect(input.attributes('aria-label')).toBe('Search icons')
	})

	it('has correct styling container', () => {
		const wrapper = mount(Input)
		const container = wrapper.find('#searchContainer')
		expect(container.exists()).toBe(true)
	})

	it('emits input events', async () => {
		const wrapper = mount(Input)
		const input = wrapper.find('#searchInput')
		await input.setValue('test')
		expect((input.element as HTMLInputElement).value).toBe('test')
	})
})
