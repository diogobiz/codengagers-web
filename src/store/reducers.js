import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import auth from './auth/reducer'
import locale from './locale/reducer'
import counter from './counter/reducer'

export default combineReducers({
  locale,
  counter,
  auth,
  form: formReducer
})
