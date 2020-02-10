import React, { useContext } from 'react'
import { View } from 'react-native'

import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { state } = useContext(Context)

  const post = state.find((blogPost) => {
    return blogPost.id === id
  })

  return (
    <View>
      <BlogPostForm
        screen='Edit'
      />
    </View>
  )
}

EditScreen.navigationOptions = () => {
  return {
    title: 'Blog Edit',
  }
}

export { EditScreen }
