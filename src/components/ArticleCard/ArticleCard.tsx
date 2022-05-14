import { FC } from "react"
import styles from "./ArticleCard.module.scss"
import { Article } from "../../types/Article"
import { default as Image } from 'next/image'
import { default as Link } from 'next/link'

interface ArticleCardProps {
	article: Article
}

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {

	const link = `/article/${article.slug}`

	return <Link href={link}>
		<div className={styles.el}>
			<div className={styles.langIcon}>
				<Image src="/lang/javascript.svg" alt="javascript" width={32} height={32} />
			</div>
			<div className={styles.wrapper}>
				<h3>{article.name}</h3>
				<p>Read the latest guidance to learn how dynamic color works, learn how to apply it to your brand, or
				   generate your own theme</p>
				<div className={styles.tags}>
					<div className={styles.tag}>Functional Programming</div>
					<div className={styles.tag}>Closure</div>
					<div className={styles.tag}>Javascript</div>
				</div>
			</div>
		</div>
	</Link>
}
