import { FC, PropsWithChildren } from "react"
import styles from './Container.module.scss'
import { className as cn } from '@/className'

interface ContainerProps {
	className?: string
}

export const Container: FC<PropsWithChildren<ContainerProps>> = props => {
	return (
		<div className={cn(styles.el, props.className)}>
			{props.children}
		</div>
	)
}
