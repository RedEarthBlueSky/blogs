import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles/screenStyles'

const CreateScreen = () => {
  const { h1 } = styles
  return (
    <View>
      <Text style={h1}>Create Screen</Text>
    </View>
  )
}

export { CreateScreen }
