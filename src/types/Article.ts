import { MDXRemoteSerializeResult } from "next-mdx-remote"

export type Article = {
	id: string
	slug: string
	name: string
	content: MDXRemoteSerializeResult<Record<string, unknown>>
	createdAt: string
}

export type ArticleApiResponse = {
	id: string
	slug: string
	name: string
	content: string
	createdAt: string
}
