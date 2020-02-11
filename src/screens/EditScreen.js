import React, { useContext } from 'react'
import { View, Text } from 'react-native'

import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { state } = useContext(Context)

  const post = state.find((blogPost) => {
    return blogPost.id === id
  })

  const { title, content } = post

  return (
    <View>
      <BlogPostForm
        initialValues={{ id, title, content }}
        screen='Edit'
        onSubmit={() => {
          console.log('from edit screen submit - ', id, title, content)
        }}
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
