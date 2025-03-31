import { Image, StyleSheet, Text, View } from 'react-native'

export default function CategoryCard() {
  return (
    <View style={styles.container}>
      <Image source={require('./../../assets/images/carrot.png')} />
      <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
        Fresh Fruits & Vegetable
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(83, 177, 117, 0.2)',
    width: 170,
    height: 170,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#53B175',
    padding: 40,
    marginBottom: 40,
  },
})
