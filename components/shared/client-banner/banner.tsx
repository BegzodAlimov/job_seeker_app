import Image from 'next/image'
import React from 'react'
import Client from "@/public/images/clientImage.svg";
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
      <div className='flex md:gap-8 max-md:flex-col-reverse'>
          <div className='md:w-1/2 bg-primary-10 md:rounded-3xl rounded-2xl text-white xs:px-10 xs:py-8 p-5 flex  flex-col sm:gap-5 gap-3 max-md:-translate-y-6 z-10'>
              <h1 className='text-2xl font-medium'>Reviews on Ngul!</h1>
              <p className='sm:text-2xl text-xl'>See how clients and talent celebrate their wins and stay accountable for their work together, or join today to make your own connections.</p>
              <Button variant='ghost' size={'lg'} className='rounded-full bg-white text-primary-10 text-base font-semibold hover:text-primary-10 w-fit py-7'>Get Started</Button>
              <div className='flex items-center xs:w-80 w-full mt-5'>
                  <span className=' w-1 h-1 rounded-full bg-[#9FADEF]'></span>
                  <span className='h-[1px] flex-1 bg-[#9FADEF]'></span>
                  <span className=' w-1 h-1 rounded-full bg-[#9FADEF]'></span>
              </div>
          </div>
          <div className='md:w-1/2 max-md:h-80 relative'>
              <Image src={Client} alt='img' fill priority className='object-cover md:rounded-3xl rounded-2xl'/>
          </div>
    </div>
  )
}

export default Banner