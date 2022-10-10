import { useEffect } from 'react'
import { all_products_url } from '../constants/constants-api-url'
import { localStorageKey } from '../constants/constants-storage-key'
import { useCart } from '../store'
import types from '../store/types'

// Performs a sync operation with remote API to remove any stale product id from state, and localStorage
// Note: sync operation with remote API is only done when cart is not empty.
export const useSyncState = () => {
  const { dispatch } = useCart()

  const syncProductStates = async (url, localState, signal) => {
    try {
      const body = JSON.stringify({ uuid: localState })
      const response = await fetch(url, {
        signal,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      })
      const { validProductsUuid } = await response.json()
      if (!signal.aborted) {
        window.localStorage.setItem(localStorageKey, JSON.stringify(validProductsUuid))
        dispatch({ type: types.INIT_CART, payload: validProductsUuid })
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    const localState = JSON.parse(window.localStorage.getItem(localStorageKey))
    if (localState) {
      const abortController = new AbortController()
      syncProductStates(all_products_url, localState, abortController.signal)

      return () => abortController.abort()
    } else dispatch({ type: types.INIT_CART, payload: [] })
  }, [])
}
