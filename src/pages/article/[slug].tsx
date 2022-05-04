import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { MDX } from '@/components'
import { getAllArticles, getArticleBySlug } from '@/api'
import { Page } from "@/components"
import { Article } from "../../types/Article"

interface ArticleProps {
	article: Article
}

const Article: NextPage<ArticleProps> = ({ article }) => {
	return <Page withHeader withFooter title="Article">
		<article>
			<header>
				<h1>{article.name}</h1>
			</header>
			<MDX {...article.content} />
		</article>
	</Page>
}

type StaticPathContext = {
	slug: string
}

export const getStaticPaths: GetStaticPaths<StaticPathContext> = async () => {

	const articles = await getAllArticles()

	return {
		paths: articles.map(article => ({
			params: {
				slug: article.slug
			}
		})),

		fallback: false
	}

}

export const getStaticProps: GetStaticProps<ArticleProps, StaticPathContext> = async context => {

	const slug = context.params?.slug
	if (!slug) {
		throw new Error('No slug')
	}

	const article = await getArticleBySlug(slug)

	return {
		props: {
			article
		}
	}
}


export default Article
