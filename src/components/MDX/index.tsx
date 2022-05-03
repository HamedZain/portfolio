import { MDXRemote } from "next-mdx-remote"
import { FC } from "react"
import { MDXComponents } from "mdx/types"
import { MDXRemoteProps } from 'next-mdx-remote'

const components: MDXComponents = {
	Code: ({ children }) => <code>{children}</code>
}


export const MDX: FC<MDXRemoteProps> = (props) => {
	return (
		<MDXRemote components={components} {...props} lazy={false} />
	)
}
