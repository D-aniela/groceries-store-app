import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export type TSearchBar = {
  placeholder?: string
  onChangeText?: ((text: string) => void) | undefined
}

const SearchBar = ({
  placeholder = 'Search Store',
  onChangeText,
}: TSearchBar) => {
  return (
    <View style={styles.container}>
      <Ionicons name='search' size={20} color='gray' style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor='gray'
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    marginTop: 15,
    width: '90%',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
})

export default SearchBar
