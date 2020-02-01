import React, { createContext } from 'react'

//  create context object
const BlogContext = createContext()

// provider accepts information and provides it down the the rest of the app
// used to reach deeply nested components
export const BlogProvider = ({ children }) => {
  const blogPosts = [
    { title: 'Blog Post #1' },
    { title: 'Blog Post #2' },
    { title: 'Blog Post #1' },
  ]
  return (
    <BlogContext.Provider value={blogPosts}>
      {children}
    </BlogContext.Provider>
  )
}

// allows us to pass down the value to a nested component
export default BlogContext
