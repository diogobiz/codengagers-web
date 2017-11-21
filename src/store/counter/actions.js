import * as actionTypes from './types'

const inc = () => {
  return {
    type: actionTypes.INCREMENT
  }
}

const dec = () => {
  return {
    type: actionTypes.DECREMENT
  }
}

export default {
  inc,
  dec
}
