declare module '*.svg' {
	import { FunctionComponent, SVGProps } from 'react'

	const src: string

	export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>

	export default src
}
