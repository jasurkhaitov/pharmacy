import React, { createContext, useContext, useReducer } from 'react'

const initialCartState = {
  items: []
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.pill_id !== action.payload)
      }
    case 'INCREMENT_ITEM':
      return {
        ...state,
        items: state.items.map((item) =>
          item.pill_id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
    case 'DECREMENT_ITEM':
      return {
        ...state,
        items: state.items.map((item) =>
          item.pill_id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      }
    default:
      return state
  }
}

const CartContext = createContext()

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState)

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
