import * as actionTypes from './types'

const initState = 'en'

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LOCALE:
      return action.payload

    default:
      return state
  }
}
