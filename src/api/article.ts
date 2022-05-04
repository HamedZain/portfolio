import { client, gql } from "@/gql/client"
import { Article, ArticleApiResponse } from "../types/Article"
import { serialize } from "next-mdx-remote/serialize"

export const getArticleBySlug = async (slug: string): Promise<Article> => {
	const response = await client.request<{ article: ArticleApiResponse }>(
		gql`{
			article(where: {slug:"${slug}"}) {
				id
				slug
				name
				content
			}
		}`)

	const mdx = await serialize(response.article.content)

	return { ...response.article, content: mdx }
}

export const getAllArticles = async (): Promise<Article[]> => {

	const response = await client.request<{ articles: ArticleApiResponse[] }>(
		gql`{
			articles {
				id
				slug
				name
				content
			}
		}`)

	return Promise.all(response.articles.map(async (article) => {
		const mdx = await serialize(article.content)
		return { ...article, content: mdx }
	}))
}
