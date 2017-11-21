import React from 'react'

import { NavItems } from '../'

import Aux from '../../../hoc/Aux/Aux'

import './SideDrawerContent.css'

const SideDrawerContent = (props) => {
  return (
    <Aux>
      <nav className="SideDrawerContent">
        <NavItems isAuthenticated={props.isAuth} />
      </nav>
    </Aux>
  )
}

export default SideDrawerContent