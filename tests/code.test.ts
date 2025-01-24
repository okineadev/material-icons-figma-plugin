import { describe, it, expect } from 'bun:test';
import mainFunction from '../src/code/index';

describe('mainFunction', () => {
	it('should show the UI with correct dimensions and title', () => {
		// Mock figma.showUI
		const showUIMock = jest.fn();
		global.figma = { showUI: showUIMock };

		mainFunction();

		expect(showUIMock).toHaveBeenCalledWith(expect.any(String), {
			width: 328,
			height: 495,
			themeColors: true,
			title: 'Material Icon Picker',
		});
	});

	it('should handle drop events correctly', () => {
		// Mock figma.on and figma.createNodeFromSvg
		const onMock = jest.fn();
		const createNodeFromSvgMock = jest.fn().mockReturnValue({
			resize: jest.fn(),
			appendChild: jest.fn(),
			remove: jest.fn(),
		});
		global.figma = {
			on: onMock,
			createNodeFromSvg: createNodeFromSvgMock,
			createFrame: jest.fn().mockReturnValue({
				resize: jest.fn(),
				appendChild: jest.fn(),
				fills: [],
			}),
			currentPage: {
				selection: [],
			},
		};

		mainFunction();

		const dropEventHandler = onMock.mock.calls[0][1];
		const mockEvent = {
			files: [
				{
					type: 'image/svg+xml',
					getTextAsync: jest.fn().mockResolvedValue('<svg></svg>'),
				},
			],
			absoluteX: 100,
			absoluteY: 100,
		};

		return dropEventHandler(mockEvent).then(() => {
			expect(createNodeFromSvgMock).toHaveBeenCalledWith('<svg></svg>');
		});
	});
});
