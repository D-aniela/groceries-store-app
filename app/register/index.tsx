import { Stack } from 'expo-router'
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function RegisterScreen({}) {
  return (
    <View style={styles.container}>
      {/* Parte superior con la imagen */}
      <View style={styles.topContainer}>
        <Image
          source={require('../../assets/images/delivery.jpg')}
          style={styles.topImage}
          resizeMode='cover'
        />
      </View>

      {/* Parte inferior con el texto y los botones */}
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Get your groceries with nectar</Text>

        {/* Ejemplo de selección de país/teléfono */}
        <View style={styles.phoneContainer}>
          <Text style={styles.countryCode}>🇧🇩 +880</Text>
        </View>

        <Text style={styles.orText}>Or connect with social media</Text>

        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: '#4285F4' }]}
          onPress={() => {
            // Lógica para Google
          }}
        >
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: '#3b5998' }]}
          onPress={() => {
            // Lógica para Facebook
          }}
        >
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flex: 1.5, // Ajusta para controlar la altura de la parte superior
  },
  topImage: {
    width: '100%',
    height: '100%',
  },
  bottomContainer: {
    flex: 1, // Ajusta la proporción de espacio para la parte inferior
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: '500',
  },
  orText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginVertical: 10,
  },
  socialButton: {
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 10,
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
