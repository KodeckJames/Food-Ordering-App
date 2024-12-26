import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { CartContext } from '../providers/CartProvider'

const CartScreen = () => {
  const { items } = useContext(CartContext)
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  )
}

export default CartScreen
