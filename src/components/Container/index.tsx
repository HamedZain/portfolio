import { FC, PropsWithChildren } from "react"

export const Container: FC<PropsWithChildren<{}>> = props => {
	return (
		<div>{props.children}</div>
	)
}
