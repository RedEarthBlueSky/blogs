import React, { useContext } from 'react'
import { View, Text, FlatList } from 'react-native'
// import the context object
import BlogContext from '../context/BlogContext'
import styles from './styles/screenStyles'

const IndexScreen = () => {
  const { h1 } = styles
  const blogPosts = useContext(BlogContext)

  return (
    <View>
      <Text style={h1}>Index Screen</Text>
    <FlatList
      keyExtractor={(blogPosts) => blogPosts.title}
      render={({ item }) =>{
        return <Text>{item.title}</Text>
      }}
    />
    </View>
  )
}

export { IndexScreen }
