import React, { useContext } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
// import the context object
import BlogContext from '../context/BlogContext'
import styles from './styles/screenStyles'

const IndexScreen = () => {
  const { h1 } = styles
  const { blogData, addBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Text style={h1}>Index Screen: </Text>
      <Button
        title={'Add Post'}
        onPress={addBlogPost}
      />
      <FlatList
        data={blogData}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) =>{
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

export { IndexScreen }
