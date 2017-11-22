import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import { ApolloProvider } from 'react-apollo'

import { Root } from './containers/Root'

import apolloClient from './graphql/client'

import cfgStore from './store'

import registerServiceWorker from './registerServiceWorker'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './index.css'

const store = cfgStore()

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <Root />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker()
