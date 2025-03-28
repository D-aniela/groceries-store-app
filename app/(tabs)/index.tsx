import { Link } from 'expo-router'
import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native'

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/delivery.jpg')}
      style={styles.background}
      resizeMode='cover'
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Welcome to our store</Text>
        <Text style={styles.subtitle}>
          Get your groceries in as fast as one hour
        </Text>
        <Link href='/register' style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Link>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    padding: 40,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#53B175',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
