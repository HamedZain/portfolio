import { FC } from "react"
import styles from './Header.module.scss'
import { Button, Container } from '@/components'
import { DribbbleIcon, GithubIcon, SunIcon } from '@/icons'

export const Header: FC = () => {
	return (
		<header>
			<Container className={styles.container}>
				<h1 className={styles.brand}>{`>_h.zain`}</h1>
				<nav>
					<Button icon><GithubIcon /></Button>
					<Button icon><DribbbleIcon /></Button>
					<Button icon><SunIcon /></Button>
				</nav>
			</Container>
		</header>
	)
}
