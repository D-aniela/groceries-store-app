import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export type TItem = {
  id: string
  name: string
  quantity: string
  price: string
  image: ImageSourcePropType
  count?: number
}

export default function CartCard({
  item,
  showControls,
  removeProduct,
  updateQuantity,
}: {
  item: TItem
  removeProduct: (id: string) => void
  updateQuantity: (id: string, action: 'add' | 'subtract') => void
  showControls?: boolean
}) {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.detailContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.quantity}>{item.quantity}</Text>
        </View>
        {showControls && (
          <View style={styles.controls}>
            <TouchableOpacity
              onPress={() => updateQuantity(item.id, 'subtract')}
            >
              <AntDesign name='minuscircleo' size={24} color='gray' />
            </TouchableOpacity>
            <Text style={styles.count}>{item.count || 1}</Text>
            <TouchableOpacity onPress={() => updateQuantity(item.id, 'add')}>
              <AntDesign name='pluscircleo' size={24} color='green' />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.removeContainer}>
        <TouchableOpacity onPress={() => removeProduct(item.id)}>
          <AntDesign name='close' size={24} color='gray' />
        </TouchableOpacity>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    marginBottom: 10,
  },
  detailContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    color: 'gray',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  count: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    marginTop: 15,
  },
  removeContainer: {
    alignItems: 'flex-end',
  },
})
