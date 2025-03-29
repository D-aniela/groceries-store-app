import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

const NumericInput = () => {
  const [value, setValue] = useState(0)

  // Función para incrementar el valor
  const handleIncrement = () => setValue((prev) => prev + 1)

  // Función para decrementar el valor
  const handleDecrement = () => setValue((prev) => prev - 1)

  // Manejar el cambio en el input asegurando que sea numérico
  const handleChange = (text: string) => {
    // Convertir el texto a número, o dejarlo en 0 si no es un número válido
    const num = parseInt(text, 10)
    if (!isNaN(num)) {
      setValue(num)
    } else {
      setValue(0)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDecrement} style={styles.button}>
        <Ionicons
          name='remove-outline'
          size={32}
          color={value === 0 ? '#B3B3B3' : '#53B175'}
        />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        value={String(value)}
        onChangeText={handleChange}
        keyboardType='numeric'
      />

      <TouchableOpacity onPress={handleIncrement} style={styles.button}>
        <Ionicons name='add-outline' size={32} color='#53B175' />
      </TouchableOpacity>
    </View>
  )
}

export default NumericInput

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  input: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    width: 60,
    textAlign: 'center',
    borderRadius: '17px',
  },
})
