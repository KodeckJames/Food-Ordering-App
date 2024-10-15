import { Image, StyleSheet, Platform, View, Text, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '@/src/styles/Colors';
import products from '@/assets/data/products';

const product=products[0]

export default function HomeScreen() {
  return (
    <View className='bg-white flex-1 pt-status p-2  rounded-xl' style={{ paddingTop: StatusBar.currentHeight }}>
      <Image source={{uri: product.image}} className='aspect-square'  />
      <Text className='text-lg font-semibold my-2'>{product.name}</Text>
      <Text className='text-cyan-400'>Ksh.{product.price}</Text>
    </View>
  );
}
