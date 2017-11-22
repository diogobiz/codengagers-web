import React from 'react'

import './CoworkerCard.css'

import imagem from '../../../assets/images/profile.jpeg'

const CoworkerCard = ({ coworker }) => {
  let img = (coworker.email === 'munir@codengage.com') ? imagem : `https://api.adorable.io/avatars/200/${coworker.email}`

  let backgroundImage = {
    backgroundImage: `url(${img})`
  }

  return (
    <div className="CoworkerCard col-md-3 col-sm-4">
      <div className="CoworkerCard-Image cover" style={backgroundImage}>
        <div className="CoworkerCard-Name">{coworker.name}</div>
        <div className="CoworkerCard-Email">{coworker.email}</div>
      </div>
      <div className="CoworkerCard-Footer">
        SKYPE, SLACK, LINKEDIN
      </div>
    </div>
  )
}

export default CoworkerCard