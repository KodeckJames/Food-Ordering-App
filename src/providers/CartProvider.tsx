import { useContext, createContext, PropsWithChildren, useState } from 'react'
import { CartItem, Product, PizzaSize } from '../types'

type CartType = {
  items: CartItem[]
  addItem: (product: Product, size: PizzaSize) => void // Ensure correct parameter types
}

export const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
})

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (product: Product, size: PizzaSize) => {
    // Correctly accept Product and PizzaSize
    const cartItem: CartItem = {
      id: Date.now(), // or any other logic to generate unique ID
      product, // Assign the entire product object
      size, // Size from the parameter
      quantity: 1, // Set initial quantity to 1
    }

    setItems((prevItems) => [...prevItems, cartItem]) // Add the new cart item to the existing items
    console.log(cartItem)
  }

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
