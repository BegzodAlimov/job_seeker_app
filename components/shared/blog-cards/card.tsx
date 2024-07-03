import Image from 'next/image'
import React from 'react'
import Rasm from "@/public/images/image.jpg";
import { Button } from '@/components/ui/button';

const BlogCard = () => {
    return (
        <div className="p-4 md:w-1/3 sm:w-1/2">
            <div className="h-full rounded-xl overflow-hidden">
                <div className="h-60 w-full relative bg-black">
                    <Image src={Rasm} alt="blog" fill className='object-cover object-center' />
                    <Button className=' rounded-[20px] absolute text-white right-3 top-3 z-10 px-4 py-2 h-auto bg-[#FFFFFF3D] backdrop-blur-sm text-sm font-medium' variant={"default"} size={'lg'}>Marketing</Button>
                </div>
                <div className="py-6 px-4">
                    <h1 className="text-xl font-medium text-[#09080D] mb-3">
                        The 4 Javascript frameworks with more active job openings
                    </h1>
                    <p className=" text-base font-normal mb-3 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi gravida.</p>
                    <div className="flex items-center justify-between flex-wrap text-sm font-medium">
                        <span>Juni 27, 2022</span>
                        <a href='#' className="text-primary-10 inline-flex items-center md:mb-2 lg:mb-0">Read More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard