// https://github.com/vuejs/vue-cli/issues/1198#issuecomment-1139752067

import type { Icon } from './types'

declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent
	export default component
}

declare module '*.json' {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const content: any
	export default content
}
