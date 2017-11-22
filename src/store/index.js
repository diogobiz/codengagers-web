import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { isAuthenticated } from '../utils/auth'

import config from '../config'
import reducers from './reducers'

const initState = {
  ...config.initState,
  auth: {
    ...config.initState.auth,
    user: isAuthenticated()
  }
}

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose

const logger = (state) => {
  return (next) => {
    return (action) => {
      // console.log('[MIDDLEWARE LOGGER] Action:', action)
      return next(action)
    }
  }
}

const middlewares = [
  thunk,
  logger
]

const cfgStore = () => {
  return createStore(
    reducers,
    initState,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )
}

export default cfgStore
