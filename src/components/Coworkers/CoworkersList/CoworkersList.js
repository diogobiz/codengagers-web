import React from 'react'

import { CoworkerCard } from '../'

const CoworkersList = ({ coworkers }) => {
  return (
    <div className="row">
      {coworkers.map((coworker) => (
        <CoworkerCard key={coworker.id} coworker={coworker} />
      ))}
    </div>
  )
}

export default CoworkersList
