import { View, Text, Image } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products'
import { defaultPizzaImage } from '@/src/components/ProductListItem'

const sizes = ['S', 'M', 'L', 'XL']

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams()

  const product = products.find((p) => p.id.toString() === id)

  if (!product) {
    return <Text>Product not found</Text>
  }

  return (
    <View className=" bg-white flex-1 p-6">
      <Stack.Screen
        options={{
          title: product.name,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
        }}
      />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        className=" w-full aspect-square"
      />
      <Text>Select size</Text>
      <View className=" flex-row justify-around my-2">
        {sizes.map((size) => (
          <View
            key={size}
            className=" bg-gray-300 rounded-full aspect-square items-center justify-center w-10"
          >
            <Text className=" text-lg font-bold">{size}</Text>
          </View>
        ))}
      </View>
      <Text className=" font-bold text-lg">${product.price}</Text>
    </View>
  )
}

export default ProductDetailsScreen
