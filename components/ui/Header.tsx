import { Text, View } from 'react-native'
import SearchBar from '../inputs/SearchBar'

export type THeader = {
  title: string
  search: boolean
}

export function Header({ title, search }: THeader) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text
        style={
          !search
            ? { fontWeight: 'semibold', fontSize: 20, marginBottom: 15 }
            : { fontWeight: 'semibold', fontSize: 20 }
        }
      >
        {title}
      </Text>
      {search && <SearchBar />}
    </View>
  )
}
