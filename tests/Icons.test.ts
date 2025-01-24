import { describe, it, expect } from 'bun:test';
import { mount } from '@vue/test-utils';
import Icons from '../src/ui/components/Icons.vue';

describe('Icons.vue', () => {
	it('renders the correct number of icons', () => {
		const icons = {
			icon1: '<svg></svg>',
			icon2: '<svg></svg>',
		};
		const wrapper = mount(Icons, {
			props: { icons },
		});
		expect(wrapper.findAll('.icon').length).toBe(2);
	});

	it('sets the correct aria-label for each icon', () => {
		const icons = {
			icon1: '<svg></svg>',
			icon2: '<svg></svg>',
		};
		const wrapper = mount(Icons, {
			props: { icons },
		});
		const iconElements = wrapper.findAll('.icon');
		expect(iconElements[0].attributes('aria-label')).toBe('icon1');
		expect(iconElements[1].attributes('aria-label')).toBe('icon2');
	});

	it('sets the correct title for each icon', () => {
		const icons = {
			icon1: '<svg></svg>',
			icon2: '<svg></svg>',
		};
		const wrapper = mount(Icons, {
			props: { icons },
		});
		const iconElements = wrapper.findAll('.icon');
		expect(iconElements[0].attributes('title')).toBe('icon1');
		expect(iconElements[1].attributes('title')).toBe('icon2');
	});
});
