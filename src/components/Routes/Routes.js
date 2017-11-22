import React from 'react'

import { Route } from 'react-router-dom'

import asyncComponent from '../../hoc/asyncComponent/asyncComponent'

import { RestrictedRoute } from '../../containers/RestrictedRoute'

const asyncApp = asyncComponent(() => import('../../containers/App/App'))
const asyncLogin = asyncComponent(() => import('../../containers/Auth/Login/Login'))
const asyncLogout = asyncComponent(() => import('../../containers/Auth/Logout/Logout'))
const asyncTeamList = asyncComponent(() => import('../../containers/Team/TeamList/TeamList'))
const asyncTeamNew = asyncComponent(() => import('../../containers/Team/TeamNew/TeamNew'))
const asyncTeamEdit = asyncComponent(() => import('../../containers/Team/TeamEdit/TeamEdit'))
const asyncCoworkers = asyncComponent(() => import('../../containers/Coworkers/Coworkers'))
const asyncCounter = asyncComponent(() => import('../../containers/Counter/Counter'))
const asyncPageNotFound = asyncComponent(() => import('../PageNotFound/PageNotFound'))

const Routes = [
  <RestrictedRoute type="private" path="/" exact component={asyncApp} />,
  <RestrictedRoute type="private" path="/team" exact component={asyncTeamList} />,
  <RestrictedRoute type="private" path="/team/new" exact component={asyncTeamNew} />,
  <RestrictedRoute type="private" path="/team/edit/:id" exact component={asyncTeamEdit} />,
  <RestrictedRoute type="private" path="/coworkers" exact component={asyncCoworkers} />,
  <RestrictedRoute type="public" path="/counter" exact component={asyncCounter} />,
  <RestrictedRoute type="public" path="/login" exact key="appRoute@/signin" component={asyncLogin} />,
  <RestrictedRoute type="private" path="/logout" exact component={asyncLogout} />,
  <Route component={asyncPageNotFound} />
]

export default Routes