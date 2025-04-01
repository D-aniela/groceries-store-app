import React from 'react'
import {
  FlatList,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from 'react-native'
import ProductCard from '../ui/ProductCard'

const { width } = Dimensions.get('window')

export type TProduct = {
  id: string
  image: ImageSourcePropType
  quantity: string
  name: string
  price: string
}

// Datos de ejemplo
const products = [
  {
    id: '1',
    name: 'Organic Bananas',
    quantity: '7pcs',
    price: '$4.99',
    image: require('../../assets/images/apple.png'),
  },
  {
    id: '2',
    name: 'Red Apple',
    quantity: '1kg',
    price: '$4.99',
    image: require('../../assets/images/apple.png'),
  },
  {
    id: '3',
    name: 'Green Grapes',
    quantity: '500g',
    price: '$3.49',
    image: require('../../assets/images/apple.png'),
  },
  {
    id: '4',
    name: 'Strawberries',
    quantity: '250g',
    price: '$5.99',
    image: require('../../assets/images/apple.png'),
  },
]

const ProductList = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard item={item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  )
}

export default ProductList

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
  card: {
    width: width * 0.4,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#7C7C7C',
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  quantity: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  addButton: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
})
