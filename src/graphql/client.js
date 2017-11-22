import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

import config from '../config'

const httpLink = new HttpLink({
  uri: config.graphql_url,
  credentials: 'same-origin'
})

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
})