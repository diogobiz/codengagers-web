import { connect } from 'react-redux'

import { withApollo } from 'react-apollo'

import bcrypt from 'bcryptjs'

import { Login } from '../../../components/Auth'

import { LOGIN_USER_QUERY } from '../../../graphql'

import authActions from '../../../store/auth/actions'

const onSubmit = ({ email, password }, dispatch, props) => {
  let query = {
    query: LOGIN_USER_QUERY,
    variables: {
      email
    }
  }

  return props
    .client
    .query(query)
    .then((res) => checkUser(res))
    .then((user) => checkPassword(user, password))
    .then((user) => onSuccess(user, dispatch, props))
    .catch((res) => onError(res, dispatch))
}

const checkUser = (res) => {
  if (res && res.data && res.data.User) {
    return res.data.User
  }

  throw new Error('User not found')
}

const checkPassword = (user, password) => {
  if (bcrypt.compareSync(password.toString(), user.password)) {
    return user
  }

  throw new Error('Password incorrect.')
}

const onSuccess = (user, dispatch, props) => {
  dispatch(authActions.authSuccess(user))
  props.history.replace(`/`)
}

const onError = ({ message }, dispatch) => dispatch(authActions.authFail(message))

const mapStateToProps = (state) => ({
  authError: state.auth.error
})

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit: (payload) => onSubmit(payload, dispatch, props)
})

export default withApollo(connect(mapStateToProps, mapDispatchToProps)(Login))
