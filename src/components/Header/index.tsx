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
					<Button icon ariaLabel="My Github Account Link"><GithubIcon /></Button>
					<Button icon ariaLabel="My Github Dribbble Link"><DribbbleIcon /></Button>
					<Button icon ariaLabel="Toggle Color Mode"><SunIcon /></Button>
				</nav>
			</Container>
		</header>
	)
}
