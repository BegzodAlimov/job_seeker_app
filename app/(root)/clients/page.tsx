import Banner from '@/components/shared/client-banner/banner'
import Comment from '@/components/shared/comments'
import Statistics from '@/components/shared/statistics/statistics'
import React from 'react'

function Clients() {
    return (
        <div className='my-5'>
            <Banner />
            <Comment />
            <Statistics/>
        </div>
  )
}

export default Clients