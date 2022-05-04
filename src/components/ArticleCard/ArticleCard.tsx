import { FC } from "react"
import { Article } from "../../types/Article"

interface ArticleCardProps {
	article: Article
}

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
	return <div>{article.name}</div>
}
