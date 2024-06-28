import ComunityBanner from '@/components/shared/comunity-banner/comunity-banner'
import Image from 'next/image'
import React from 'react'

const Comunity = () => {
  return (
    <div>
      <h2 className='max-w-[600px] font-font-family font-medium text-5xl text-center tracking-[0.01em] text-black mx-auto py-12'>For the Community, by the Community</h2>
      <ComunityBanner/>
    </div>
  )
}

export default Comunity