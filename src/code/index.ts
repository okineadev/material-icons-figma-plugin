function handleDropEvent(event) {
	const { files } = event

	// Check if at least one file is dropped and if it's an SVG image
	if (files.length > 0 && files[0].type === 'image/svg+xml') {
		// Read the text content of the SVG file
		files[0].getTextAsync().then((text) => {
			// Create a new node from the SVG text
			const newNode = figma.createNodeFromSvg(text)
			// Resize the new SVG node to 32x32 pixels
			newNode.resize(32, 32)

			// Create a new Frame to contain the SVG node
			const frame = figma.createFrame()
			frame.resize(32, 32)

			// Position the frame at the drop location
			frame.x = event.absoluteX
			frame.y = event.absoluteY

			// Remove any default fills from the frame
			frame.fills = []

			// Append the SVG node to the frame
			frame.appendChild(newNode)

			// Flatten the SVG node within the frame for better structure
			const flattenedNode = figma.flatten([newNode])
			frame.appendChild(flattenedNode)

			// Remove the original SVG node as it's now flattened
			newNode.remove()

			// Select the newly created frame in the current page
			figma.currentPage.selection = [frame]
		})

		// Prevent further handling of the drop event
		return false
	}
}

export default function () {
	// Show the plugin's UI with specified dimensions and title
	figma.showUI(__html__, {
		width: 328,
		height: 495,
		themeColors: true,
		title: 'Material Icon Picker',
	})

	// Listen for 'drop' events from the UI
	figma.on('drop', handleDropEvent)
}
