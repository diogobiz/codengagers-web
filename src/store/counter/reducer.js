import * as actionTypes from './types'

const initState = 0

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return ++state

    case actionTypes.DECREMENT:
      return --state

    default:
      return state
  }
}