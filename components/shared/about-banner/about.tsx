import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { NgluIcon } from "@/public/icons/nglu";
import img1 from "@/public/images/about-1.png";
import img2 from "@/public/images/about-2.png";
import img3 from "@/public/images/about-3.png";
import Image from "next/image";

const AboutBanner = () => {
  return (
    <div className="py-[120px] flex gap-x-8">
      <div className="max-w-[507px] bg-primary-10 rounded-3xl p-10 text-white tracking-[0.01em] font-font-family">
        <div className="mb-6">
          <NgluIcon />
        </div>
        <h2 className=" text-[32px] font-medium mb-4">About Us</h2>
        <p className="font-font-family font-normal text-2xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie id
          tincidunt malesuada pharetra arcu turpis cursus mattis fringilla. Quam
          enim mi faucibus purus, nec turpis mus at odio. Morbi fringilla diam,
          diam elit, et risus. Sed purus, aliquet vel ut ipsum consectetur a
          turpis.
        </p>
        <div className="flex items-center mb-10 w-3/4">
          <div className="p-1 bg-white opacity-25 rounded-full"></div>
          <Separator className="bg-white opacity-25" />
          <div className="p-1 bg-white opacity-25 rounded-full"></div>
        </div>
        <Button className="bg-white border border-white rounded-[32px] text-primary-10 hover:bg-primary-10 hover:text-white">
          Join Now
        </Button>
      </div>

      <div className="flex gap-x-3">
        <div className="flex flex-col gap-y-3">
          <Image src={img1} alt="about img" />
          <Image src={img2} alt="about img" />
        </div>
        <div>
          <Image src={img3} alt="about img" />
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
