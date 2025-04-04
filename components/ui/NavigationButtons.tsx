import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const NavigationButtons = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={24} color='black' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Compartir')}>
        <Ionicons name='share-outline' size={24} color='black' />
      </TouchableOpacity>
    </View>
  )
}

export default NavigationButtons

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    position: 'absolute',
    width: '100%',
    top: 40,
    zIndex: 10,
  },
})
