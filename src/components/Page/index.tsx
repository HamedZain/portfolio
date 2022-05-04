import { FC, PropsWithChildren } from "react"
import { default as Head } from 'next/head'
import styles from './Page.module.scss'
import { Header, Footer } from '@/components'

interface PageProps {
	title: string
	withHeader?: boolean
	withFooter?: boolean

	author?: string
	description?: string
	keywords?: string[]
}

export const Page: FC<PropsWithChildren<PageProps>> = ({
	author = 'Hamed Zain',
	keywords = [],

	...props
}) => {
	return <>
		<Head>
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
			<meta name="viewport"
			      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />

			<meta name="author" content={author} />
			<meta name="description" content={props.description} />
			<meta name="keywords" content={keywords.join(', ')} />

			<title>{props.title}</title>
		</Head>

		<div className={styles.Page}>

			{props.withHeader && <Header />}

			<main className={styles.content}>{props.children}</main>

			{props.withFooter && <Footer />}

		</div>
	</>
}
