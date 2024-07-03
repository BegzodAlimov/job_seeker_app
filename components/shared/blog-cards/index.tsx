import React from 'react'
import BlogCard from './card'

const BlogCards = () => {
  return (
      <div className='my-20 flex flex-col gap-10'>
          <h1 className='text-black text-3xl font-medium'>Latest Articles</h1>
          <div className="flex flex-wrap -m-4">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
          </div>

    </div>
  )
}

export default BlogCards