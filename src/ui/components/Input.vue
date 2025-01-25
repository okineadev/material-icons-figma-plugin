<template>
	<div id="searchContainer">
		<input type="search" id="searchInput" placeholder="Search icons" aria-label="Search icons">
	</div>
</template>

<style scoped lang="scss">
#searchContainer {
	background-color: var(--figma-color-bg);
	padding-block: 8px;

	position: sticky;
	top: 0;
	box-shadow: 0 4px 8px -4px var(--figma-color-bg);

	#searchInput {
		background-color: var(--figma-color-bg-secondary);
		border-radius: 4px;

		position: sticky;
		padding: 4px 8px;
		top: 0;

		width: 100%;
		height: 32px;

		outline: none;
		border: 1px solid var(--figma-color-border);
		color: var(--figma-color-text-tertiary);

		// Remove cancel button in input field
		&::-webkit-search-cancel-button {
			-webkit-appearance: none;
			appearance: none;
		}

		&::placeholder {
			color: var(--figma-color-text-tertiary);
		}

		&:focus {
			border-color: var(--figma-color-border-selected);
			color: var(--figma-color-text-secondary);

			&::placeholder {
				color: var(--figma-color-text-secondary);
			}
		}
	}
}
</style>
