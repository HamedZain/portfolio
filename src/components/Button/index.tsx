import { FC, PropsWithChildren } from "react"
import styles from "./Button.module.scss"
import {className as cn} from "@/className"

interface ButtonProps {
	icon?: boolean
	iconButton?: boolean
	onClick?: () => void
}

export const Button: FC<PropsWithChildren<ButtonProps>> = props => {

	const className = cn(styles.el, {
		[styles.icon]: Boolean(props.icon)
	})

	return <button className={className} {...props}>
		{props.children}
	</button>
}
