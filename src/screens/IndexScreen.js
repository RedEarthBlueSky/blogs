import React, { useContext } from 'react'
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { Context as BlogContext } from '../context/BlogContext'
import styles from './styles/screenStyles'

const IndexScreen = () => {
  const { h2, row, icon } = styles
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Button
        title={'Add Post'}
        onPress={addBlogPost}
      />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => console.log(blogPost) }
        renderItem={({ item }) =>{
          return (
            <View style={row} key={item.id}>
              <Text style={h2}>{item.id}: {item.title}</Text>
              <TouchableOpacity
                onPress={() => deleteBlogPost(item.id)}
                key={item.id}
              >
                <Feather
                  key={item.id}
                  style={icon}
                  name='trash'
                />
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
}

export { IndexScreen }
