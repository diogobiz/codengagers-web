import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import authActions from '../../../store/auth/actions'

class Logout extends Component {
  componentDidMount() {
    this.props.onLogout()
  }

  render() {
    return <Redirect to="/login" />
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(authActions.authLogout())
  }
}

export default connect(null, mapDispatchToProps)(Logout)