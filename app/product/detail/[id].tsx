import { Image, StyleSheet, Text, View } from 'react-native'

export default function ProductDetail({}) {
  return (
    <View style={styles.container}>
      <Text>Detalle del producto</Text>
      {/* <Image
        style={styles.topImage}
        source={require('../../../assets/images/delivery.jpg')}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topImage: {
    width: '100%',
    height: '100%',
  },
})
