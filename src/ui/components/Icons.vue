<script setup lang="ts">
// @ts-ignore it just works
import type { Icons } from '../types'

defineProps({
	icons: {
		// @ts-expect-error 🩹 idk how to fix this
		type: Icons,
		required: true,
	},
})
</script>

<template>
	<div id="iconsContainer">
		<div v-for="(iconContent, icon) in icons" :key="icon" class="icon" draggable="true" :title="icon"
			v-html="iconContent" :aria-label="icon">
		</div>
	</div>
</template>

<style scoped lang="scss">
#iconsContainer {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	flex: 1;

	.icon {
		width: 32px;
		height: 32px;
		cursor: pointer;
	}
}
</style>
