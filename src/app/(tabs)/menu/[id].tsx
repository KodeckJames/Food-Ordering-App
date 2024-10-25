import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductDetailsScreen = () => {
  const {id} = useLocalSearchParams()
  return (    
    <View className=' bg-white flex-1'>
      <Stack.Screen options={{title:'Details'}}/>
      <Text >ProductDetailsScreen for id:{id}</Text>
    </View>
  )
}

export default ProductDetailsScreen