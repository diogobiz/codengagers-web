import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Switch, withRouter } from 'react-router-dom'

import { Toolbar, SideDrawer } from '../../components/Navigation'

import { Routes } from '../../components/Routes'

import Aux from '../../hoc/Aux/Aux'

import './Layout.css'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler} />

        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />

        <main className="Layout-Content">
          <Switch>
            {Routes.map((Route, i) => (
              React.cloneElement(Route, {
                key: `@appRoutes/${i}`
              })
            ))}
          </Switch>
        </main>
      </Aux>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.user !== null
})

export default connect(mapStateToProps)(withRouter(Layout))
