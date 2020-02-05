import React, { createContext, useReducer } from 'react'
//  create context object
const BlogContext = createContext()

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post ${state.length + 1}` }]
    default:
      return state
  }
}

// provider accepts information and provides it down
// to reach deeply nested components
export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, [])

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' })
  }

  return (
    <BlogContext.Provider
      value={{ blogData: blogPosts, addBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  )
}

// allows us to pass down the value to a nested component
export default BlogContext
