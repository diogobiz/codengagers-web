import * as actionTypes from './types'
import { updateObject } from '../../utils'

const initialState = {
  user: null,
  error: null,
  loading: false
}

const authLogin = (state, payload) => {
  return updateObject(state, {
    error: null,
    loading: true
  })
}

const authLogout = (state, payload) => {
  return updateObject(state, {
    user: null
  })
}

const authSuccess = (state, payload) => {
  return updateObject(state, {
    user: payload,
    error: null,
    loading: false
  })
}

const authFail = (state, payload) => {
  return updateObject(state, {
    error: payload,
    loading: false
  })
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.AUTH_LOGIN: return authLogin(state, payload)
    case actionTypes.AUTH_LOGOUT: return authLogout(state, payload)
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, payload)
    case actionTypes.AUTH_FAIL: return authFail(state, payload)
    default:
      return state
  }
}
