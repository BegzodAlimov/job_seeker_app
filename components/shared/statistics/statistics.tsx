import { BriefcaseBusiness } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import brief from "@/public/icons/briefcase.svg";
import chart from "@/public/icons/chart-2.svg";
import like from "@/public/icons/like.svg";
import verify from "@/public/icons/verify.svg";


const Statistics = () => {
  return (
      <div className="container px-5 py-10 mx-auto" >
          <div className="flex flex-col text-center w-full mb-16" >
              <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4">Our numbers</h1>
              <p className="lg:w-2/5 md:w-3/5 mx-auto leading-relaxed text-base">As the fastest-growing online Job board, our mission is to help great individuals connect with great companies.</p>
          </div>
          <div className="flex flex-wrap -m-4 text-center" >
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full" >
                  <div className=" bg-white px-4 py-6 rounded-lg flex flex-col justify-center items-center gap-3" >
                      <Image src={brief} alt='' width={40} height={40} />
                      <div>
                          <h2 className="title-font font-medium text-3xl text-gray-900">20,583<span className='text-[#4864E1]'>+</span></h2>
                          <p className="leading-relaxed text-sm">Job Posted</p>
                      </div>
                  </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full" >
                  <div className=" bg-white px-4 py-6 rounded-lg flex flex-col justify-center items-center gap-3" >
                      <Image src={like} alt='' width={40} height={40} />
                      <div>
                          <h2 className="title-font font-medium text-3xl text-gray-900">3,896<span className='text-[#4864E1]'>+</span></h2>
                          <p className="leading-relaxed">Successful hires</p>
                      </div>
                  </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full" >
                  <div className=" bg-white px-4 py-6 rounded-lg flex flex-col justify-center items-center gap-3" >
                      <Image src={verify} alt='' width={40} height={40} />
                      <div>
                          <h2 className="title-font font-medium text-3xl text-gray-900">581<span className='text-[#4864E1]'>+</span></h2>
                          <p className="leading-relaxed">Verified companies</p>
                      </div>
                  </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full" >
                  <div className=" bg-white px-4 py-6 rounded-lg flex flex-col justify-center items-center gap-3" >
                      <Image src={chart} alt='' width={40} height={40} />
                      <div>
                          <h2 className="title-font font-medium text-3xl text-gray-900">100K<span className='text-[#4864E1]'>+</span></h2>
                          <p className="leading-relaxed">Monthly visits</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Statistics