import React, { Component } from 'react'

import { withRouter } from 'react-router'
import { Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import asyncComponent from '../../hoc/asyncComponent/asyncComponent'

import authActions from '../../store/auth/actions'

import { App } from '../App'
import { Layout } from '../Layout'
import { Logout, Login } from '../Auth'

const asyncTeamList = asyncComponent(() => {
  return import('../Team/TeamList/TeamList');
})

const asyncTeamNew = asyncComponent(() => {
  return import('../Team/TeamNew/TeamNew');
})

const asyncTeamEdit = asyncComponent(() => {
  return import('../Team/TeamEdit/TeamEdit');
})

const asyncCoworkers = asyncComponent(() => {
  return import('../Coworkers/Coworkers');
})

const asyncCounter = asyncComponent(() => {
  return import('../Counter/Counter');
})

class Root extends Component {
  componentDidMount() {
    this.props.authCheck()
  }

  render() {
    // let routes = (
    //   <Switch>
    //     <Route path="/team" exact component={asyncTeamList} />
    //     <Route path="/team/new" exact component={asyncTeamNew} />
    //     <Route path="/team/edit/:id" exact component={asyncTeamEdit} />
    //     <Route path="/counter" exact component={asyncCounter} />
    //     <Route path="/login" exact component={Login} />
    //     <Route path="/logout" exact component={Logout} />
    //     <Route path="/" exact component={App} />
    //     <Redirect to="/" />
    //   </Switch>
    // )

    let routes = (
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={App} />
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/team" exact component={asyncTeamList} />
          <Route path="/team/new" exact component={asyncTeamNew} />
          <Route path="/team/edit/:id" exact component={asyncTeamEdit} />
          <Route path="/counter" exact component={asyncCounter} />
          <Route path="/coworkers" exact component={asyncCoworkers} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/" exact component={App} />
          <Redirect to="/coworkers" />
        </Switch>
      )
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.user !== null
})

const mapDispatchToProps = (dispatch, props) => ({
  authCheck: () => dispatch(authActions.authCheck(props.history))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root))
