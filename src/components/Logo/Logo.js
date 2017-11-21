import React from 'react'

import logoWhite from '../../assets/images/logo-full-white.png'
import logoBlack from '../../assets/images/logo-full.png'

import './Logo.css'

const Logo = ({ height, white, ...rest }) => {
  let logo = white ? logoWhite : logoBlack

  return (
    <div className="Logo" style={{ height }}>
      <img src={logo} alt="Codengage" />
    </div>
  )
}

export default Logo