import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native'
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'

const menuItems: {
  id: number
  title: string
  icon:
    | 'shopping-bag'
    | 'user'
    | 'map-pin'
    | 'credit-card'
    | 'tag'
    | 'bell'
    | 'help-circle'
    | 'info'
}[] = [
  { id: 1, title: 'Orders', icon: 'shopping-bag' },
  { id: 2, title: 'My Details', icon: 'user' },
  { id: 3, title: 'Delivery Address', icon: 'map-pin' },
  { id: 4, title: 'Payment Methods', icon: 'credit-card' },
  { id: 5, title: 'Promo Card', icon: 'tag' },
  { id: 6, title: 'Notifications', icon: 'bell' },
  { id: 7, title: 'Help', icon: 'help-circle' },
  { id: 8, title: 'About', icon: 'info' },
]

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./../../assets/images/delivery.jpg')}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Afsar Hossen</Text>
          <Text style={styles.email}>lmshuva97@gmail.com</Text>
        </View>
        <TouchableOpacity>
          <Feather
            name='edit'
            size={16}
            color='green'
            style={styles.editIcon}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.menuItem}>
            <Feather name={item.icon} size={20} color='black' />
            <Text style={styles.menuText}>{item.title}</Text>
            <AntDesign
              name='right'
              size={16}
              color='gray'
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.logoutButton}>
        <MaterialIcons name='logout' size={20} color='green' />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: 'gray',
  },
  editIcon: {
    marginLeft: 'auto',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  logoutText: {
    color: 'green',
    fontSize: 16,
    marginLeft: 10,
  },
})
