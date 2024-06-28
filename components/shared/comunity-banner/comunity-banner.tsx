import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import bagIcon from "@/public/icons/bag2.svg";
import bannerImage from "@/public/images/comunity.png";

const ComunityBanner = () => {
  return (
    <div className="flex gap-x-8 mb-[140px]">
      <div>
        <Image src={bannerImage} alt="img" />
      </div>
      <div className="max-w-[507px] bg-primary-10 rounded-3xl px-10 py-8 text-white tracking-[0.01em] font-font-family">
        <Image src={bagIcon} alt="img" className="mb-3"/>
        <h2 className=" text-2xl font-medium mb-3">Working on Ngul!</h2>
        <p className="font-font-family font-normal text-2xl mb-[26px]">
          In this journey, you'll get an introduction to working on Ngul!,
          submitting proposals, and tips for landing your first job.
        </p>
        <div className="flex items-center w-3/4">
          <div className="p-1 bg-white opacity-25 rounded-full"></div>
          <Separator className="bg-white opacity-25" />
          <div className="p-1 bg-white opacity-25 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ComunityBanner;
