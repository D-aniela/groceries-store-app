import { Image, StyleSheet, Text, View } from 'react-native'

import NumericInput from '@/components/inputs/NumericInput'
import Divider from '@/components/ui/Divider'
import CustomButton from '@/components/ui/Button'
import { Ionicons } from '@expo/vector-icons'

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
      <Divider />
      <View style={styles.text}>
        <Text style={styles.title_text}>Product Detail</Text>
        <Text style={styles.subTitle}>
          Apples are nutritious. Apples may be good for weight loss. apples may
          be good for your heart. As part of a healtful and varied diet.
        </Text>
      </View>
      <Divider />
      <View style={styles.text}>
        <Text style={styles.title_text}>Nutritions</Text>
      </View>
      <Divider />
      <View style={styles.review}>
        <Text style={styles.title_text}>Review</Text>
        <View style={styles.review}>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Ionicons
                key={index}
                name='star'
                size={16}
                color='#F3603F'
                style={[{ padding: 2 }]}
              />
            ))}
        </View>
      </View>
      <View style={styles.text}>
        <CustomButton
          title='Add To Basket'
          onPress={() => console.log('Button Pressed')}
        />
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
    marginRight: 20,
    marginTop: 20,
  },
  review: {
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title_text: {
    fontSize: 16,
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
