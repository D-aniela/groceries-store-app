import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native'

export type TButton = {
  title: string
  onPress: (event: GestureResponderEvent) => void
  backgroundColor?: string
  textColor?: string
}

const CustomButton = ({
  title,
  onPress,
  backgroundColor = '#5cb85c',
  textColor = '#fff',
}: TButton) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'semibold',
  },
})

export default CustomButton
