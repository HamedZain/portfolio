import { client, gql } from '@/gql/client'
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { MDX } from '@/components'

import { Page } from "@/components"

type ArticleType = {
	id: string
	slug: string
	name: string
	content: MDXRemoteSerializeResult<Record<string, unknown>>
	createdAt: string
}

type ArticleTypeApi = {
	id: string
	slug: string
	name: string
	content: string
	createdAt: string
}

interface ArticleProps {
	article: ArticleType
}

const Article: NextPage<ArticleProps> = ({ article }) => {

	console.log({ article })

	return <Page withHeader withFooter title="Article">
		<h1>{article.name}</h1>
		<MDX {...article.content} />
	</Page>
}

type StaticPathContext = {
	slug: string
}

export const getStaticPaths: GetStaticPaths<StaticPathContext> = async () => {

	const response = await client.request<{ articles: { slug: string }[] }>(gql`
		{
			articles {
				slug
			}
		}
	`)

	return {
		paths: response.articles.map(article => ({
			params: {
				slug: article.slug
			}
		})),
		fallback: false
	}

}

export const getStaticProps: GetStaticProps<{ article: ArticleType }, StaticPathContext> = async context => {

	const response = await client.request<{ article: ArticleTypeApi }>(gql`
		{
			article(where: {slug:"${context.params?.slug}"}) {
				slug
				name
				content
			}
		}
	`)

	const mdx = await serialize(response.article.content, {
		mdxOptions: {
			useDynamicImport: false,
		}
	})

	return {
		props: {
			article: { ...response.article, content: mdx }
		}
	}
}


export default Article
