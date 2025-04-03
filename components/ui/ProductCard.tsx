import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const { width } = Dimensions.get('window')

export type TProduct = {
  id: string
  image: ImageSourcePropType
  quantity: string
  name: string
  price: string
}

const ProductCard = ({ item }: { item: TProduct }) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.quantity}>{item.quantity}, Price</Text>
      <View style={styles.control}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name='add' size={24} color='#fff' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  card: {
    width: width * 0.4,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#7C7C7C',
    elevation: 5,
    marginBottom: 10,
  },
  control: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
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
    textAlign: 'left',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    marginRight: 30,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  addButton: {
    width: 35,
    height: 35,
    borderRadius: 12,
    backgroundColor: '#53B175',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
})
