import {  View, StatusBar, ScrollView, FlatList } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

export default function MenuScreen() {
  return (
    <View className=' bg-gray-300 flex-1' >
      <StatusBar barStyle={'light-content'} backgroundColor={'purple'}/>
      <FlatList data={products} renderItem={({ item }) => <ProductListItem product={item} />} numColumns={2} contentContainerStyle={{gap:10, padding:10}} columnWrapperStyle={{gap:10}} />
        
   </View>
  );
}
