import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles/screenStyles'

const ShowScreen = () => {
  const { h1 } = styles
  return (
    <View>
      <Text style={h1}>Show Screen</Text>
    </View>
  )
}

export { ShowScreen }
