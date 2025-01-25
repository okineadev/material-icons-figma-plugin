import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Icons from '../src/ui/components/Icons.vue'

describe('Icons.vue', () => {
	const mockIcons = {
		'test-icon': '<svg>test</svg>',
		'another-icon': '<svg>another</svg>',
	}

	it('renders correctly with icons prop', () => {
		const wrapper = mount(Icons, {
			props: {
				icons: mockIcons,
			},
		})
		expect(wrapper.find('#iconsContainer').exists()).toBe(true)
	})

	it('renders correct number of icons', () => {
		const wrapper = mount(Icons, {
			props: {
				icons: mockIcons,
			},
		})
		expect(wrapper.findAll('.icon')).toHaveLength(2)
	})

	it('sets correct attributes on icons', () => {
		const wrapper = mount(Icons, {
			props: {
				icons: mockIcons,
			},
		})
		const firstIcon = wrapper.find('.icon')
		expect(firstIcon.attributes('draggable')).toBe('true')
		expect(firstIcon.attributes('title')).toBe('test-icon')
		expect(firstIcon.attributes('aria-label')).toBe('test-icon')
	})

	it('renders icon content correctly', () => {
		const wrapper = mount(Icons, {
			props: {
				icons: mockIcons,
			},
		})
		const firstIcon = wrapper.find('.icon')
		expect(firstIcon.html()).toContain('<svg>test</svg>')
	})
})
