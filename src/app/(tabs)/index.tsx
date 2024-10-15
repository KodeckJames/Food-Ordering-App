import { Image, StyleSheet, Platform, View, Text, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HelloWave } from '@/src/components/HelloWave';
import ParallaxScrollView from '@/src/components/ParallaxScrollView';
import { ThemedText } from '@/src/components/ThemedText';
import { ThemedView } from '@/src/components/ThemedView';

// Create a custom light theme
const MyLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white', // Set background color to white (light theme)
    text: 'black',       // Set text color to black
    // You can customize more colors if needed
  },
};

export default function HomeScreen() {
  return (
    <View className='bg-white flex-1 pt-status items-center justify-center' style={{paddingTop:StatusBar.currentHeight}}>
      <Text className='text-lg font-semibold my-2'>Pizza Chapo</Text>
      <Text className='text-blue-700'>Ksh. 120</Text>
    </View>
  );
}
