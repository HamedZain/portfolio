import type { GetStaticProps, NextPage } from 'next'
import { Page } from "@/components"
import { getAllArticles } from '@/api'
import { Article } from "../types/Article"
import {default as Link} from 'next/link'

const Home: NextPage<StaticProps> = props => {

	return <Page withHeader withFooter title="Home | H.Zain">
		<h1>Hello World, This is my portfolio</h1>

		<h2>Articles</h2>
		{props.articles.map(article => <Link key={article.id} href={`article/${article.slug}`}>{article.name}</Link>)}
	</Page>
}

type StaticProps = {
	articles: Article[]
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {

	const articles = await getAllArticles()

	return {
		props: {
			articles,
		},
	}
}

export default Home
