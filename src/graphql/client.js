import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
// import { setContext } from 'apollo-link-context'

import config from '../config'

const httpLink = new HttpLink({
  uri: config.graphql_url,
  credentials: 'same-origin'
})

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('token')

//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : null
//     }
//   }
// })

export default new ApolloClient({
  // link: authLink.concat(httpLink),
  link: httpLink,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
})