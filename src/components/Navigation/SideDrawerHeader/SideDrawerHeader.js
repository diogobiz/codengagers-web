import React from 'react'

import Aux from '../../../hoc/Aux/Aux'

import profile from '../../../assets/images/profile.jpeg'

import './SideDrawerHeader.css'

const SideDrawer = (props) => {
  let backgroundImage = {
    backgroundImage: `url(${profile})`
  }

  return (
    <Aux>
      <div className="SideDrawerHeader cover" style={backgroundImage}>
        <div className="SideDrawerHeader-Overlay">
          <div className="SideDrawerHeader-Image cover" style={backgroundImage}></div>
          <strong>Munir Ahmed</strong>
        </div>
      </div>
    </Aux>
  )
}

export default SideDrawer