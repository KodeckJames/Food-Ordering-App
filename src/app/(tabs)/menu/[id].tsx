import { View, Text, Image } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products'
import { defaultPizzaImage } from '@/src/components/ProductListItem'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams()
  
  const product = products.find((p) => p.id.toString() === id)
  
  if (!product) {
    return <Text>Product not found</Text>
  }

  return (    
    <View className=' bg-white flex-1 p-6'>
      <Stack.Screen options={{title:product.name,headerStyle: {
          backgroundColor:'white',
      }, headerTintColor: 'black'
      }} />
      <Image source={{uri: product.image || defaultPizzaImage}} className=' w-full aspect-square'/>
      <Text className=' font-bold text-lg'>${product.price}</Text>
    </View>
  )
}

export default ProductDetailsScreen