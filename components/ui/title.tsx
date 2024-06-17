import React from 'react'

const Title = ({title, content, children}: ITitleContent) => {
  return (
    <div className='flex justify-center flex-col gap-y-4 max-w-[512px]'>
        <div className='font-font-family font-medium text-5xl text-black tracking-[0.01em] text-center'>{title}</div>
        <div className={`${content === "true" ? "block" : "hidden"} text-center`}>{children}</div>
    </div>
  )
}

export default Title