import React, { useContext } from 'react'
import { View } from 'react-native'

import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context)

  return (
    <View>
      <BlogPostForm
        screen='Create'
        onSubmit={(title, content) => {
          addBlogPost(title, content, () => navigation.navigate('Index'))
        }}
      />
    </View>
  )
}

CreateScreen.navigationOptions = () => {
  return {
    title: 'Create Blog',
  }
}

export { CreateScreen }
