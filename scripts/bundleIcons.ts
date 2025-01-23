import { generateManifest } from 'material-icon-theme'

// Generate the icon manifest using material-icon-theme
const manifest = generateManifest()

// Extract icon definitions from the manifest
const iconDefinitions = manifest.iconDefinitions || {}

// Process each icon definition to read its SVG content
const result = await Object.keys(iconDefinitions)
	.sort() // Sort icon keys alphabetically
	.reduce(
		async (accPromise, key) => {
			const acc = await accPromise
			// Get the path of the current icon
			const iconPath = iconDefinitions[key].iconPath

			// Read the icon file content as text
			acc[key] = await Bun.file(
				`node_modules/material-icon-theme/icons/${iconPath.substring(iconPath.lastIndexOf('/') + 1)}`,
			).text()

			return acc
		},
		Promise.resolve({} as Record<string, string>),
	)

// Define the output file path
const outFile = 'src/ui/icons.json'

// Write the collected icon data to the output file in JSON format
Bun.write(outFile, JSON.stringify(result, null))

console.log(`${outFile} has been generated!`)
