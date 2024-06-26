import Image from 'next/image'
import React from 'react'
import Icon from "@/public/icons/blog.svg";
import designer from "@/public/images/designer.svg";
import developer from "@/public/images/developer.svg";
import market from "@/public/images/market.svg";
import { Button } from '@/components/ui/button';

const BlogBanner = () => {
  return (
      <div className='flex gap-8 max-md:flex-col-reverse '>
          <div className='bg-primary-10 rounded-3xl p-10 md:w-[45%] text-white flex flex-col gap-5'>
              <Image src={Icon} alt='blog' />
              <h1 className='text-3xl font-medium max-w-64'>Resource & Learning Center</h1>
              <p className=' text-2xl max-w-[420px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id tincidunt malesuada pharetra arcu turpis cursus mattis fringilla.
              </p>
              <div className='flex items-center xs:w-80 w-full mt-5'>
                  <span className=' w-1 h-1 rounded-full bg-[#9FADEF]'></span>
                  <span className='h-[1px] flex-1 bg-[#9FADEF]'></span>
                  <span className=' w-1 h-1 rounded-full bg-[#9FADEF]'></span>
              </div>
          </div>
          <div className='md:w-[55%] max-md:h-[450px] grid max-lg:grid-cols-5 grid-cols-2 max-xs:grid-cols-2 gap-4 text-white'>
              <div className='row-span-2 max-lg:col-span-3 max-xs:col-span-2 relative flex justify-center items-center'>
                  <Image src={designer} alt='designer' fill className='object-cover rounded-2xl absolute z-0 top-0 left-0' />
                  <Button className=' rounded-[20px] relative z-10 px-5 h-auto py-3 bg-[#FFFFFF3D] backdrop-blur-sm text-base font-medium' variant={"default"} size={'lg'}>For Designer</Button>
              </div>
              <div className='relative flex justify-center items-center max-lg:col-span-2 max-xs:col-span-1'>
                  <Image src={developer} alt='designer' fill className='object-cover rounded-2xl absolute z-0 top-0 left-0' />
                  <Button className=' rounded-[20px] relative z-10 px-5 h-auto py-3 bg-[#FFFFFF3D] backdrop-blur-sm text-base font-medium' variant={"default"} size={'lg'}>For Developer</Button>
              </div>
              <div className='relative flex justify-center items-center max-lg:col-span-2 max-xs:col-span-1'>
                  <Image src={market} alt='designer' fill className='object-cover rounded-2xl absolute z-0 top-0 left-0' />
                  <Button className=' rounded-[20px] relative z-10 px-5 h-auto py-3 bg-[#FFFFFF3D] backdrop-blur-sm text-base font-medium' variant={"default"} size={'lg'}>For Marketers</Button>
              </div>
          </div>
    </div>
  )
}

export default BlogBanner