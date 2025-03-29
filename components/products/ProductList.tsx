import React from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageSourcePropType,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const { width } = Dimensions.get('window')

export type TProduct = {
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

const ProductCard = ({ item }: { item: TProduct }) => (
  <View style={styles.card}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.quantity}>{item.quantity}, Price</Text>
    <Text style={styles.price}>{item.price}</Text>
    <TouchableOpacity style={styles.addButton}>
      <Ionicons name='add' size={24} color='#fff' />
    </TouchableOpacity>
  </View>
)

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
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
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
