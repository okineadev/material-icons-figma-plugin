import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
import type { SceneNode } from '@figma/plugin-typings/plugin-api-standalone'
import initPlugin from '../src/code/index'

declare global {
	var figma: {
		createNodeFromSvg: Mock
		createFrame: Mock
		currentPage: { selection: SceneNode[] }
		showUI: Mock
		on: Mock
		flatten: Mock
	}
}

describe('Figma Plugin', () => {
	beforeEach(() => {
		// Mock Figma API
		global.figma = {
			createNodeFromSvg: vi.fn(),
			createFrame: vi.fn(),
			currentPage: {
				selection: [],
			},
			showUI: vi.fn(),
			on: vi.fn(),
			flatten: vi.fn(),
		}

		global.__html__ = ''
	})

	describe('plugin initialization', () => {
		it('should initialize plugin UI correctly', () => {
			initPlugin()

			expect(figma.showUI).toHaveBeenCalledWith(expect.any(String), {
				width: 328,
				height: 495,
				themeColors: true,
				title: 'Material Icon Picker',
			})
			expect(figma.on).toHaveBeenCalledWith('drop', expect.any(Function))
		})
	})
})
