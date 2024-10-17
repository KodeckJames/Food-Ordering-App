import { Image, View, Text } from 'react-native';
import { Product } from '../types';

export const defaultPizzaImage='https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

type ProductListItemProps = {
    product:Product
}

const ProductListItem = ({ product  }:ProductListItemProps) => {
  return (
    <View className='bg-white flex-1 pt-status p-2  rounded-xl'>
    <Image source={{uri: product.image || defaultPizzaImage}} className='aspect-square'  />
    <Text className='text-lg font-semibold my-2'>{product.name}</Text>
    <Text className='text-cyan-400'>Ksh.{product.price}</Text>
  </View>
  )
}
export default ProductListItem
// Since the image receives string and null type, you should provide another image as or ie || incase there is no url

