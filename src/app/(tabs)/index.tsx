import {  View, StatusBar, ScrollView } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

export default function MenuScreen() {
  return (
    <View className=' bg-white flex-1' style={{ paddingTop: StatusBar.currentHeight }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'purple'}/>
      <ScrollView>
      <ProductListItem product={products[5]}/>
        <ProductListItem product={products[1]} />
        </ScrollView>
   </View>
  );
}
