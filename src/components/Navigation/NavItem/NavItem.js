import React from 'react'

import { NavLink } from 'react-router-dom'

import './NavItem.css'

const NavItem = ({ link, exact, children }) => (
  <li className="NavItem">
    <NavLink
      to={link}
      exact={exact}
      activeClassName="active">{children}</NavLink>
  </li>
)

export default NavItem