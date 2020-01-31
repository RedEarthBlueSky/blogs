import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles/screenStyles'

const EditScreen = () => {
  const { h1 } = styles
  return (
    <View>
      <Text style={h1}>Edit Screen</Text>
    </View>
  )
}

export { EditScreen }
