import ProductList from '@/components/products/ProductList'
import { Header } from '@/components/ui/Header'
import ProductCard from '@/components/ui/ProductCard'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

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

export default function BeveragesScreen({}) {
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Header title='Beverages' search={false} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            padding: 10,
          }}
        >
          {products.map((p) => (
            <ProductCard item={p} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
  },
})
