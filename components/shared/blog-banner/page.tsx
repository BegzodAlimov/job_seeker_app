import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import listsIcon from "@/public/icons/lists.svg";
import img1 from "@/public/images/blog-1.png";
import img2 from "@/public/images/blog-2.png";
import img3 from "@/public/images/blog-3.png";
import { Button } from "@/components/ui/button";

const BlogBanner = () => {
  return (
    <div className="py-[120px] flex gap-x-8">
      <div className="max-w-[507px] bg-primary-10 rounded-3xl p-10 text-white tracking-[0.01em] font-font-family">
        <div className="mb-6">
          <Image src={listsIcon} alt="lists icon" className="mb-6" />
        </div>
        <h2 className=" text-[32px] font-medium mb-4">
          Resource & Learning Cente
        </h2>
        <p className="font-font-family font-normal text-2xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id
          tincidunt malesuada pharetra arcu turpis cursus mattis fringilla.
        </p>
        <div className="flex items-center mb-10 w-3/4">
          <div className="p-1 bg-white opacity-25 rounded-full"></div>
          <Separator className="bg-white opacity-25" />
          <div className="p-1 bg-white opacity-25 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-x-3">
        <div className="relative">
          <Image src={img1} alt="about img" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <Button className="rounded-[20px] px-3 py-5 backdrop-blur-sm bg-white/30 text-white text-[16px] font-font-family font-medium tracking-[0.01em] hover:bg-white/50">For Design</Button>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <Button className="rounded-[20px] px-3 py-5 backdrop-blur-sm bg-white/30 text-white text-[16px] font-font-family font-medium tracking-[0.01em] hover:bg-white/50">For Developer</Button>
            </div>
            <Image src={img2} alt="about img" />
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <Button className="rounded-[20px] px-3 py-5 backdrop-blur-sm bg-white/30 text-white text-[16px] font-font-family font-medium tracking-[0.01em] hover:bg-white/50">For Marketers</Button>
            </div>
            <Image src={img3} alt="about img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
