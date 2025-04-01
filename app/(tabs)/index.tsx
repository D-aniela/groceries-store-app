import React from 'react'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'

import SearchBar from '@/components/inputs/SearchBar'
import ProductList from '@/components/products/ProductList'
import BannerCarousel from '@/components/ui/Banner'

// const getImage = (imagePath: string) => Asset.fromModule(imagePath).uri

export default function HomeScreen() {
  return (
    <SafeAreaProvider style={styles.area}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.section}>
            <Image source={require('./../../assets/images/carrot.png')} />
            <View style={styles.header}>
              <Ionicons name='location' size={20} color='#4C4F4D' />
              <Text style={[{ color: '#4C4F4D', fontWeight: 600 }]}>
                Dhaka, Banassre
              </Text>
            </View>
            <SearchBar />
            <BannerCarousel />
          </View>
          <View style={styles.products}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={styles.title}>Exclusive Offer</Text>
              <Link href='/explore' style={{ color: '#53B175' }}>
                See all
              </Link>
            </View>
            <ProductList />
          </View>
          <View style={styles.products}>
            <Text style={styles.title}>Best Selling</Text>
            <ProductList />
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  area: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 100,
  },
  container: {
    flex: 1, // Asegura que ocupa toda la pantalla
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
  },
  section: {
    alignItems: 'center',
  },
  products: {
    margin: 10,
  },
})
