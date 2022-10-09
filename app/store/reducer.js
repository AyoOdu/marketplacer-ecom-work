import types from './types'
import { sessionStorageKey } from '../constants/constants-storage-key'

export default function reducer(state, action) {
  console.log(action)
  const { INIT_CART, TOGGLE_PRODUCT } = types
  const { type, payload } = action
  switch (type) {
    case INIT_CART:
      return JSON.parse(window.sessionStorage.getItem(sessionStorageKey)) || []
    case TOGGLE_PRODUCT: {
      // update cart state
      let updatedState
      if (state.includes(payload)) updatedState = state.filter((uuid) => uuid !== payload)
      else updatedState = [...state, payload]
      // update session storage status
      window.sessionStorage.setItem(sessionStorageKey, JSON.stringify(updatedState))
      return updatedState
    }
    default:
      return state
  }
}
