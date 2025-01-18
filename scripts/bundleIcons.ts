import { generateManifest } from 'material-icon-theme'

const manifest = generateManifest()
const iconDefinitions = manifest.iconDefinitions || {}

const result = await Object.keys(iconDefinitions)
	.sort()
	.reduce(
		async (accPromise, key) => {
			const acc = await accPromise
			const iconPath = iconDefinitions[key].iconPath
			acc[key] = await Bun.file(
				`node_modules/material-icon-theme/icons/${iconPath.substring(iconPath.lastIndexOf('/') + 1)}`,
			).text()
			return acc
		},
		Promise.resolve({} as Record<string, string>),
	)

const outFile = 'src/ui/icons.json'
Bun.write(outFile, JSON.stringify(result, null, 2))
console.log(`${outFile} has been generated`)
