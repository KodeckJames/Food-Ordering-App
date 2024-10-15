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
    <View style={styles.container}>
      <Text style={styles.title}>Pizza Chapo</Text>
      <Text style={styles.price}>Ksh. 120</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent:'center'
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical:10
  },
  price: {
    color:'blue',
  }
});
