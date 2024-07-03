import Image from 'next/image'
import Rasm from "@/public/images/image.jpg";
import React from 'react'
import BlogBtn from './button';
import LatestBlog from './latest';

const BlogDetail = () => {
    return (
        <main className="mx-auto py-10 w-full">
            <div className="flex flex-wrap justify-between w-full">
                <div className="w-full md:w-8/12 px-4 mb-7 sm:text-lg text-sm text-[#44444C]">
                    <h2 className="sm:text-4xl text-2xl font-medium text-[#09080D] mt-4 mb-2">5 tips to be prepared for 2021 digital marketing trends</h2>
                    <div className='flex gap-5 items-center my-5 font-medium sm:text-sm text-xs'>
                        <BlogBtn>For Freelance</BlogBtn>
                        <span>Juni 27, 2022</span>
                    </div>
                    <p className="mb-7">Procurement can be challenging, especially with several roadblocks along the supply chain. Even still, the most significant liability could easily be the talent shortage. Following the pandemic, procuring top talent in a shifting economic landscape deserves more spotlight, especially amid a turbulent fiscal forecast.</p>
                    <p className="mb-4">The changes businesses make now will likely decide whether or not they survive. Because managing procurement risks starts with being aware of them, streamlining procedures and taking advantage of technology — the only real solution to getting ahead of compliance issues.</p>
                    <div className='relative w-full h-96 my-8'>
                        <Image src={Rasm} fill alt="Featured Image" className=" object-cover rounded" />
                    </div>
                    <p className="mb-7 font-medium">The #1 Compliance Pitfall: Worker Classification</p>
                    <p className="mb-7">A common freelance hiring issue originates from a poor chain of custody around worker classification data and worker classification itself. Without legal worker classification, your organization is in danger of costly litigation. If you should get audited, could you stand by your worker classification procedures?</p>

                    <p className="mb-7">Do you handle worker classification in-house, or is it outsourced to your managed service provider (MSP), who may outsource it to a vendor management solution (VMS)? Because many businesses are redistributing the responsibility of worker classification to a third party or still have paper processes in place, which is awfully precarious and, dare I say, archaic.</p>
                    <p className="mb-7">Remember, the third party you employ to carry out worker classification won't be in the hot seat, so to speak, if an audit occurs and the data isn't there. Tech solutions like Worksome indemnify enterprises using its state-of-the-art tool to classify workers. The Worksome Classify system can perform worker classification in minutes, not weeks or months, with 100% compliance guaranteed.</p>
                    <p className="mb-7">Do you want to optimize processes to save time, make your budget go further and innovate while staying compliant? Book a free Worksome demo today!</p>
                </div>
                <div className="w-full md:w-4/12 px-4 mb-7">
                    <div className="px-4 py-6 rounded text-[#09080D]">
                        <h3 className="sm:text-2xl text-xl font-medium mb-5">Latest articles</h3>
                        <LatestBlog />
                        <LatestBlog />
                        <LatestBlog />
                        <LatestBlog />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BlogDetail