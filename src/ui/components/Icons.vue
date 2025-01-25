<script setup lang="ts">
import type { Icons } from '../types.d'
import type { PropType } from 'vue'

defineProps({
	icons: {
		type: Object as PropType<Icons>,
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
