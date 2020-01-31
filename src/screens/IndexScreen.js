import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles/screenStyles'

const IndexScreen = () => {
  const { h1 } = styles
  return (
    <View>
      <Text style={h1}>Index Screen</Text>
    </View>
  )
}

export { IndexScreen }
