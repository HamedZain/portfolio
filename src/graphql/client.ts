import { GraphQLClient } from 'graphql-request'

export { gql } from 'graphql-request'

export const client = new GraphQLClient(
	`${process.env.CMS_API_URL}`
)
