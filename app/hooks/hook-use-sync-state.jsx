import { useEffect } from 'react'
import { all_products_url } from '../constants/constants-api-url'
import { sessionStorageKey } from '../constants/constants-storage-key'
import { useCart } from '../store'
import types from '../store/types'

export const useSyncState = () => {
  const { dispatch } = useCart()

  // Sync local and api product states on page, if the cart is not empty
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
        window.sessionStorage.setItem(sessionStorageKey, JSON.stringify(validProductsUuid))
        dispatch({ type: types.INIT_CART, payload: validProductsUuid })
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    const localState = JSON.parse(window.sessionStorage.getItem(sessionStorageKey))
    if (localState) {
      const abortController = new AbortController()
      syncProductStates(all_products_url, localState, abortController.signal)

      return () => abortController.abort()
    } else dispatch({ type: types.INIT_CART, payload: [] })
  }, [])
}
