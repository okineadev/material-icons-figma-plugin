<script setup>
import './scss/styles.scss'

import Input from './components/Input.vue'
import Icons from './components/Icons.vue'

// Pre-bundled SVG icons
import icons from './icons.json'
</script>

<template>
	<div id="container">
		<div>
			<Input />
			<p id="noResults" class="center">No icons found</p>
			<Icons :icons={ icons } />
		</div>
		<p id="copyright" class="center">© <a href="https://github.com/material-extensions" target="_blank">Material
				Extensions</a> (2025-present)</p>
	</div>
</template>

<script>
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
	// Get references to DOM elements
	const IconElements = document.getElementsByClassName('icon')
	const searchInput = document.getElementById('searchInput')
	const noResults = document.getElementById('noResults')

	// Handle search input changes
	searchInput.addEventListener('input', (e) => {
		const searchTerm = e.target.value.toLowerCase()
		let hasResults = false

		// Filter and reorder icons based on search term
		for (const icon of IconElements) {
			const iconName = icon.getAttribute('title')
			const matchIndex = iconName.toLowerCase().indexOf(searchTerm.toLowerCase())
			const visible = matchIndex !== -1

			// Set order priority based on match position
			icon.style.order = visible ? matchIndex : 9999
			icon.style.display = visible ? 'block' : 'none'
			if (visible) hasResults = true
		}

		// Show/hide "no results" message
		noResults.style.display = hasResults ? 'none' : 'block'
	})

	// Handle icon drag events for Figma plugin integration
	for (const icon of IconElements) {
		icon.addEventListener('dragend', (e) => {
			if (e.view.length === 0) return

			// Create SVG file from icon content
			const file = new File([e.target.innerHTML], 'icon.svg', {
				type: 'image/svg+xml',
			})

			// Send message to parent (Figma) with drag data
			window.parent.postMessage(
				{
					pluginDrop: {
						clientX: e.clientX,
						clientY: e.clientY,
						files: [file],
					},
				},
				'*',
			)
		})
	}
})
</script>
