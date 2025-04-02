import { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'

import CartCard from '@/components/ui/CartCard'
import { Header } from '@/components/ui/Header'
import CustomButton from '@/components/ui/Button'

const productsData = [
  {
    id: '1',
    name: 'Organic Bananas',
    quantity: '7pcs',
    price: '$4.99',
    image: require('../../assets/images/apple.png'),
    count: 1,
  },
  {
    id: '2',
    name: 'Red Apple',
    quantity: '1kg',
    price: '$4.99',
    image: require('../../assets/images/apple.png'),
    count: 1,
  },
  {
    id: '3',
    name: 'Green Grapes',
    quantity: '500g',
    price: '$3.49',
    image: require('../../assets/images/apple.png'),
    count: 1,
  },
  {
    id: '4',
    name: 'Strawberries',
    quantity: '250g',
    price: '$5.99',
    image: require('../../assets/images/apple.png'),
    count: 1,
  },
]

export default function Favorite({}) {
  const [products, setProducts] = useState(productsData)

  const updateQuantity = (id: string, type: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              count: Math.max(
                (product.count || 1) + (type === 'add' ? 1 : -1),
                1
              ),
            }
          : product
      )
    )
  }

  const removeProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Header title='Favorite' search={false} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            padding: 10,
          }}
        >
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CartCard
                item={item}
                removeProduct={removeProduct}
                updateQuantity={updateQuantity}
              />
            )}
          />
        </View>
        <CustomButton
          title='Go to Checkout'
          onPress={() => console.log('Button Pressed')}
        />
      </ScrollView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
    padding: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
})
