import { Input } from "@/components/ui/input";
import searchIcon from "@/public/icons/search.svg";
import searchBtnIcon from "@/public/icons/search-btn.svg";
import upIcon from "@/public/icons/chevron-button.svg";
import locationIcon from "@/public/icons/location.svg";
import bagIcon from "@/public/icons/bag.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const FindJob = () => {
  return (
    <div className="p-4">
      <form className="grid grid-cols-4 gap-x-4">
        <div className="flex items-center gap-x-1 py-3  pl-3 pr-4 border border-line rounded-3xl bg-white">
          <Image src={searchIcon} alt="search icon" />
          <Input placeholder="Search for job.." className="border-none outline-0 ml-2 font-normal text-[14px] tracking-[0.01em] text-[#a2a1a7] bg-transparent h-auto p-0" />
        </div>
        <div className="flex items-center gap-x-1 py-3 pl-3 pr-4 border border-line rounded-3xl bg-white">
          <Image src={locationIcon} alt="location icon" />
          <Input className="border-none outline-0 ml-2 font-normal text-[14px] tracking-[0.01em] text-[#a2a1a7] bg-transparent h-auto p-0" />
        </div>
        <div className="flex items-center gap-x-1 py-3 pl-3 pr-4 border border-line rounded-3xl bg-white">
          <Image src={bagIcon} alt="dapartament icon" />
          <Input className="border-none outline-0 ml-2 font-normal text-[14px] tracking-[0.01em] text-[#a2a1a7] bg-transparent h-auto p-0" />
        </div>
        <div className="flex items-center justify-center gap-x-1 py-3 pl-3 pr-4 rounded-3xl bg-primary hover:bg-orange cursor-pointer transition ease-in-out duration-[0.3s]">
          <Button className="border-none outline-0 font-normal text-[14px] tracking-[0.01em] text-white bg-transparent h-auto p-0">
            <Image src={searchBtnIcon} alt="up icon" className="mr-2" />
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FindJob;
