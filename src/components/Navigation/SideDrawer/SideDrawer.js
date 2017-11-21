import React from 'react'

import { Backdrop } from '../../UI'

import { SideDrawerHeader, SideDrawerContent } from '../'

import Aux from '../../../hoc/Aux/Aux'

import './SideDrawer.css'

const SideDrawer = ({ open, closed, isAuth, ...rest }) => {
  let attachedClasses = ['SideDrawer']

  attachedClasses.push(open ? 'SideDrawer-Open' : 'SideDrawer-Close')

  return (
    <Aux>
      <Backdrop show={open} clicked={closed} />

      <div className={attachedClasses.join(' ')} onClick={closed}>
        <SideDrawerHeader />
        <SideDrawerContent isAuth={isAuth} />
      </div>
    </Aux>
  )
}

export default SideDrawer