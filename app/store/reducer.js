import types from './types'
import { localStorageKey } from '../constants/constants-storage-key'

export default function reducer(state, action) {
  const { INIT_CART, TOGGLE_PRODUCT } = types
  const { type, payload } = action
  switch (type) {
    case INIT_CART:
      return payload
    case TOGGLE_PRODUCT:
      // update cart state
      let updatedState
      if (state.includes(payload)) updatedState = state.filter((uuid) => uuid !== payload)
      else updatedState = [...state, payload]
      // update local storage status
      window.localStorage.setItem(localStorageKey, JSON.stringify(updatedState))
      return updatedState
    default:
      return state
  }
}
