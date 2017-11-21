import React from 'react'

import { Logo } from '../../Logo'
import { SideDrawerToggle } from '../'

import './Toolbar.css'

const Toolbar = ({ drawerToggleClicked, ...rest }) => (
  <header className="Toolbar">
    <SideDrawerToggle clicked={drawerToggleClicked} />

    <Logo white />
  </header>
)

export default Toolbar