import { FC, PropsWithChildren } from "react"
import { default as Head } from 'next/head'
import styles from './Page.module.scss'
import { Header, Footer } from '@/components'

interface PageProps {
	title: string
	withHeader?: boolean
	withFooter?: boolean
}

export const Page: FC<PropsWithChildren<PageProps>> = props => {
	return <>
		<Head>
			<title>{props.title}</title>
		</Head>

		<div className={styles.Page}>

			{props.withHeader && <Header />}

			<div className={styles.content}>{props.children}</div>

			{props.withFooter && <Footer />}

		</div>
	</>
}
