import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Toolbar, SideDrawer } from '../../components/Navigation'

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
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.user !== null
})

export default connect(mapStateToProps)(Layout)
