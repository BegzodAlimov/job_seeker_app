"use client";
import Navbar from "@/components/shared/navbar/navbar";
import bannerImg from "../../../assets/home-banner.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HomeBanner from "@/components/shared/home-banner/home-banner";
import FeatureJob from "@/components/shared/feature-job/feature-job";
import CommentCard from "@/components/shared/comments/comment-card";
import Title from "@/components/ui/title";
import Opportunity from "@/components/shared/opportunity.tsx/opportunity";

export default function Home() {
  const pathname = usePathname();

  return (
    <>
      <div className="relative">
        {pathname === "/" ? <Navbar /> : null}
        <div className="relative z-30">
          <HomeBanner />
          <FeatureJob />
          <div className="flex items-center flex-col">
            <Title
              title="Trusted by leading brands and startups"
              content="false"
            ></Title>
            <div className="flex justify-between mt-16 mb-[120px]">
              <CommentCard />
              <CommentCard />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <Image src={bannerImg} alt="banner img" />
        </div>
      </div>
    </>
  );
}
