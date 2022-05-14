import type { GetStaticProps, NextPage } from 'next'
import { Button, Container, Page } from "@/components"
import { getAllArticles } from '@/api'
import { Article } from "../types/Article"
import { ArrowRightIcon } from "@/icons"
import { ArticleCard } from "../components/ArticleCard/ArticleCard"

const Home: NextPage<StaticProps> = props => {

	return <Page withHeader withFooter title="Home | H.Zain">
		<Container>
			<h1>Hello World</h1>
			<p>My name is Hamed Zain, and this is my personal portfolio</p>

			<Button>Let's Talk! <ArrowRightIcon /></Button>

			<h2>Articles</h2>
			{props.articles.map(article => <ArticleCard key={article.id} article={article} />)}
		</Container>
	</Page>
}

type StaticProps = {
	articles: Article[]
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {

	const articles = await getAllArticles()

	return {
		props: {
			articles
		}
	}
}

export default Home
