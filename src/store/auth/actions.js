import * as actionTypes from './types'

import { AUTH_USER } from '../../containers/Auth'

const authLogin = () => {
  return {
    type: actionTypes.AUTH_LOGIN
  }
}

const authLogout = () => {
  localStorage.removeItem(AUTH_USER)

  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

const authSuccess = (user) => {
  localStorage.setItem(AUTH_USER, JSON.stringify(user))

  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: user
  }
}

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: error
  }
}

const authCheck = (history) => {
  return (dispatch) => {
    const user = localStorage.getItem(AUTH_USER)

    if (!user) {
      dispatch(authLogout())
      history.replace(`/login`)
    } else {
      dispatch(authSuccess(JSON.parse(user)))
    }
  }
}

export default {
  authLogin,
  authLogout,
  authSuccess,
  authFail,
  authCheck
}