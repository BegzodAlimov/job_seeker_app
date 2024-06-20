import AboutBanner from "@/components/shared/about-banner/about";
import CommentCard from "@/components/shared/comments/comment-card";
import Statistics from "@/components/shared/statistics/statistics";
import Title from "@/components/ui/title";
import {
  AirbnbMedium,
  GoogleMedium,
  MicrosoftMedium,
  PaintersMedium,
} from "@/components/ui/trusted";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <div className="mb-20 flex items-center justify-between py-20">
        <h3 className="font-medium text-[24px] tracking-[0.01em] text-[#a2a1a7] font-font-family">
          Trusted by:
        </h3>
        <div className="flex gap-x-6 items-center text-9xl">
          <GoogleMedium />
          <MicrosoftMedium />
          <AirbnbMedium />
          <PaintersMedium />
        </div>
      </div>
      <Statistics/>
      <div className="flex items-center flex-col py-[120px]">
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
  );
};

export default About;
