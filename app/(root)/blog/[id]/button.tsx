import React from 'react'

const BlogBtn = ({children, className}: {children: string, className?: string}) => {
  return (
      <span className={`border border-[#E9EBED] py-1 px-3 rounded-2xl text-primary-10 font-medium ${className}`}>&#x2022;&nbsp;&nbsp;{children}</span>
  )
}

export default BlogBtn