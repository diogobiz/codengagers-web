import React, { Component } from 'react'

import { Router, Route, Switch } from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'

import { connect } from 'react-redux'

import { Layout } from '../Layout'

import authActions from '../../store/auth/actions'

const history = createHistory()

class Root extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route children={(props) => <Layout {...props} />} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.user !== null
})

const mapDispatchToProps = (dispatch, props) => ({
  authCheck: () => dispatch(authActions.authCheck(props.history))
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
