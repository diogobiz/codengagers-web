import React from 'react'

import { NavItem } from '../'

import './NavItems.css'

const NavItems = (props) => (
  <div>
    {/* <ul className="NavItems">
      <NavItem link="/" exact>Dashboard</NavItem>
      <NavItem link="/counter" exact>Counter</NavItem>
      <NavItem link="/team" exact>Teams</NavItem>
      <NavItem link="/login">Login</NavItem>
      <NavItem link="/logout" exact>Logout</NavItem>
    </ul> */}

    {props.isAuthenticated &&
      <ul className="NavItems">
        <NavItem link="/" exact>Dashboard</NavItem>
        <NavItem link="/counter" exact>Counter</NavItem>
        <NavItem link="/team" exact>Teams</NavItem>
        <NavItem link="/logout" exact>Logout</NavItem>
      </ul>}

    {!props.isAuthenticated &&
      <ul className="NavItems">
        <NavItem link="/login">Login</NavItem>
      </ul>}
  </div>
)

export default NavItems