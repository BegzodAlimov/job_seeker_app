import React from 'react'
import BlogBtn from './button'

const LatestBlog = () => {
    return (
        <div className='flex flex-col gap-3 border-b py-3 border-[#E9EBED]'>
            <BlogBtn className='w-fit max-sm:text-sm mt-2'>Development</BlogBtn>
            <h2 className='font-medium sm:text-2xl text-xl'>What to expect on your first technical interview?</h2>
            <span className='text-[#5E5D65] sm:text-sm text-xs'>Juni 27, 2022</span>
        </div>
    )
}

export default LatestBlog