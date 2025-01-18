export default function () {
	figma.showUI(__html__, {
		width: 328,
		height: 495,
		themeColors: true,
		title: 'Material Icon Picker',
	})

	// Receive the drop event from the UI
	// @ts-expect-error
	figma.on('drop', (event) => {
		const { files } = event

		if (files.length > 0 && files[0].type === 'image/svg+xml') {
			files[0].getTextAsync().then((text) => {
				const newNode = figma.createNodeFromSvg(text)
				newNode.resize(32, 32)

				// Create a new Frame
				const frame = figma.createFrame()
				frame.resize(32, 32)
				frame.x = event.absoluteX
				frame.y = event.absoluteY

				// Remove the default fill
				frame.fills = []

				// Append the SVG node to the Frame
				frame.appendChild(newNode)

				// Flatten the contents of the Frame
				const flattenedNode = figma.flatten([newNode])
				frame.appendChild(flattenedNode)

				// Remove the original SVG node
				newNode.remove()

				figma.currentPage.selection = [frame]
			})

			return false
		}
	})
}
