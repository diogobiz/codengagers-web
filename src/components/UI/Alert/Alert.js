import React from 'react'

export const TYPES = [
  'default',
  'primary',
  'secondary',
  'info',
  'warning',
  'danger'
]

const Alert = ({ type, message }) => {
  if (!message) {
    return null
  }

  if (!type || TYPES.indexOf(type) === -1) {
    type = 'default'
  }

  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  )
}

export default Alert