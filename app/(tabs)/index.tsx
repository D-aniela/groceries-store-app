import SearchBar from '@/components/inputs/SearchBar'
import ProductList from '@/components/products/ProductList'
import BannerCarousel from '@/components/ui/Banner'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <ScrollView>
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
            <Text style={styles.title}>Exclusive Offer</Text>
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
    fontWeight: 600,
  },
  section: {
    alignItems: 'center',
  },
  products: {
    margin: 10,
  },
})
