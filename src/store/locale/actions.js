import * as actionTypes from './types'

const updateLocale = (payload) => {
  return {
    type: actionTypes.UPDATE_LOCALE,
    payload
  }
}

// assync
const updateLocaleAsync = (playload) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldState = getState()
      console.log(oldState)
      dispatch(updateLocale(playload))
    }, 2000)
  }
}

export default {
  updateLocale
}
