import React, { useContext } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { Context as BlogContext } from '../context/BlogContext'
import styles from './styles/screenStyles'

const IndexScreen = ({ navigation }) => {
  const { h2, row, icon } = styles
  const { state, deleteBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Show', { id: item.id })
              }}
            >
              <View style={row}>
                <Text style={h2}>{item.title}</Text>
                <Text>{item.id}</Text>
                <Text>{item.content}</Text>
                <TouchableOpacity
                  onPress={() => deleteBlogPost(item.id)}
                >
                  <Feather
                    style={icon}
                    name='trash'
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                   <Feather name='plus-circle' size={30} />
                 </TouchableOpacity>
  }
}

export { IndexScreen }
