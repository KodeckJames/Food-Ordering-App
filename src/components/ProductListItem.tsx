import { Image,  View, Text} from 'react-native';

interface Product{
  id: number,
  name: string,
  image: string,
  price: number
}

const ProductListItem = ({ product  }:{product:Product}) => {
  return (
    <View className='bg-white flex-1 pt-status p-2  rounded-xl'>
    <Image source={{uri: product.image}} className='aspect-square'  />
    <Text className='text-lg font-semibold my-2'>{product.name}</Text>
    <Text className='text-cyan-400'>Ksh.{product.price}</Text>
  </View>
  )
}
export default ProductListItem


