import React from 'react'
import CommentCard from './comment-card'

const Comment = () => {
  return (
      <div>
          <h1 className='text-5xl font-medium max-w-3xl my-8'>
              Clients and talent leave each other 10k new reviews per week
          </h1>
          <div className='flex flex-wrap'>
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
              <CommentCard />
          </div>
    </div>
  )
}

export default Comment