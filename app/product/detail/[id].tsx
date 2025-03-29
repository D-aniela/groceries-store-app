import NumericInput from '@/components/inputs/NumericInput'
import { Ionicons } from '@expo/vector-icons'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function ProductDetail({}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.topImage}
          source={require('../../../assets/images/apple.png')}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>Natural Red Apple</Text>
        <Text style={styles.subTitle}>1kg, Price</Text>
        <NumericInput />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    backgroundColor: '#F2F3F2',
    width: '100%',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    color: '#7C7C7C',
  },
  topImage: {
    width: 330,
    height: 200,
  },
})
