import { StyleSheet, View } from 'react-native'

export default function Divider() {
  return <View style={styles.lineStyle} />
}

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#E2E2E2',
    margin: 10,
  },
})
