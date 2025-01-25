import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from '../src/ui/App.vue'

describe('App.vue', () => {
	it('renders all components correctly', () => {
		const wrapper = mount(App)
		expect(wrapper.find('#container').exists()).toBe(true)
		expect(wrapper.findComponent({ name: 'Input' }).exists()).toBe(true)
		expect(wrapper.findComponent({ name: 'Icons' }).exists()).toBe(true)
	})

	it('displays copyright information', () => {
		const wrapper = mount(App)
		expect(wrapper.find('#copyright').text()).toContain('©')
	})

	// it('shows no results message initially', () => {
	// 	const wrapper = mount(App)
	// 	expect(wrapper.find('#noResults').exists()).toBe(true)
	// })

	it('passes icons prop to Icons component', () => {
		const wrapper = mount(App)
		const iconsComponent = wrapper.findComponent({ name: 'Icons' })
		expect(iconsComponent.props('icons')).toBeDefined()
	})

	it('initializes search functionality', () => {
		const wrapper = mount(App)
		expect(wrapper.find('#searchInput').exists()).toBe(true)
	})
})
