import React, { useRef, useState } from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from 'react-native'

const { width } = Dimensions.get('window')

export type TItem = {
  item: { image: ImageSourcePropType; title: string; subtitle: string }
}

const banners = [
  {
    id: '1',
    title: 'Fresh Vegetables',
    subtitle: 'Get Up To 40% OFF',
    image: require('../../assets/images/carrot.png'),
  },
  {
    id: '2',
    title: 'Organic Fruits',
    subtitle: 'Get Up To 30% OFF',
    image: require('../../assets/images/carrot.png'),
  },
  {
    id: '3',
    title: 'Healthy Salads',
    subtitle: 'Buy 1 Get 1 Free',
    image: require('../../assets/images/carrot.png'),
  },
]

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const flatListRef = useRef(null)

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width)
    setCurrentIndex(index)
  }

  const renderItem = ({ item }: TItem) => (
    <View style={styles.banner}>
      <Image source={item.image} style={styles.image} resizeMode='contain' />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={banners}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onScroll={handleScroll}
        ref={flatListRef}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  )
}

export default BannerCarousel

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: 180,
  },
  banner: {
    width: width - 20,
    height: 180,
    backgroundColor: '#fdfdfd',
    borderRadius: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    elevation: 3,
  },
  image: {
    width: 120,
    height: 120,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#4CAF50',
    marginTop: 5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#4CAF50',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
})
