import React from 'react'

import { Logo } from '../../Logo'

import Aux from '../../../hoc/Aux/Aux'

import './SideDrawerHeader.css'

const SideDrawer = (props) => {
  return (
    <Aux>
      <div className="SideDrawerHeader">
        <Logo white />
      </div>
    </Aux>
  )
}

export default SideDrawer