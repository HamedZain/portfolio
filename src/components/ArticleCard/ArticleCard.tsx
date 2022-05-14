import { FC } from "react"
import styles from "./ArticleCard.module.scss"
import { Article } from "../../types/Article"

interface ArticleCardProps {
	article: Article
}

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
	return <div className={styles.el}>
		<div className={styles.langIcon}>
			<img src="lang/javascript.svg" alt="javascript" />
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
}
