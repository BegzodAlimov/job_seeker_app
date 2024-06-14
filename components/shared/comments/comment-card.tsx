import Image from 'next/image'
import React from 'react'
import Icon from "@/public/icons/quote-up.svg";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const CommentCard = () => {
  return (
      <div className="xs:p-4 md:w-1/2" >
          <div className="h-full bg-opacity-75 xs:px-10 px-5 xs:py-16 py-10 rounded-3xl overflow-hidden text-center relative border border-[#CBD2F6]" >
              <div className="tracking-widest relative mb-5 flex justify-center"><Image src={Icon} alt=''/></div>
              <h1 className="title-font sm:text-2xl text-xl font-medium">“One of the advantages of utilizing freelancers is finding talent with different skills quickly as our needs change.”</h1>
              <div className='flex items-center mx-auto sm:w-4/5 max-xs:w-5/6 my-5'>
                  <span className=' w-1 h-1 rounded-full bg-[#9FADEF]'></span>
                  <span className='h-[1px] flex-1 bg-[#9FADEF]'></span>
                  <span className=' w-1 h-1 rounded-full bg-[#9FADEF]'></span>
              </div>
              <div className='flex justify-center items-center gap-3'>
                  <Avatar className='w-14 h-14'>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className='text-left'>
                      <h2 className='text-base font-medium mb-1'>Davis Rosser</h2>
                      <p className='text-sm font-normal'>Director of Content Experience</p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default CommentCard