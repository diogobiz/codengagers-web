import { AUTH_USER } from '../containers/Auth'

export const isAuthenticated = () => {
  try {
    const user = localStorage.getItem(AUTH_USER)

    return JSON.parse(user)
  } catch (ex) {
    return null
  }
}