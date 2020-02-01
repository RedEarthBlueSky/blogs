import React, { createContext, useState } from 'react'
//  create context object
const BlogContext = createContext()

// provider accepts information and provides it down
// to reach deeply nested components
export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([])

  const addBlogPost = () => {
    setBlogPosts(
      [...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]
    )
  }

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  )
}

// allows us to pass down the value to a nested component
export default BlogContext
