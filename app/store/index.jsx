import { useMemo, createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import reducer from './reducer'

const initialState = []
const CartContext = createContext(initialState)

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)

CartProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}
