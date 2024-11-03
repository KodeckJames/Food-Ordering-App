import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products'
import { defaultPizzaImage } from '@/src/components/ProductListItem'
import Button from '@/src/components/Button'
Button

const sizes = ['S', 'M', 'L', 'XL']

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams()

  const [selectedSize, setSelectedSize] = useState('M')

  const product = products.find((p) => p.id.toString() === id)

  const addToCart = () => {
    console.warn('Adding to cart, size:', selectedSize)
  }

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
          <Pressable
            onPress={() => {
              setSelectedSize(size)
            }}
            key={size}
            className={`${
              selectedSize === size ? 'bg-gray-300' : 'bg-white'
            } rounded-full aspect-square items-center justify-center w-10`}
          >
            <Text
              className={`${
                selectedSize === size ? 'text-black' : ' text-gray-400'
              } text-lg`}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text className=" font-bold text-lg mt-auto">${product.price}</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  )
}

export default ProductDetailsScreen
