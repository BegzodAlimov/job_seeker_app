"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Airbnb, Google, Microsoft } from "@/components/ui/trusted";
import React, { useState } from "react";
import FindJob from "../find-job/find-job";

const HomeBanner = () => {
  const [selectedTab, setSelectedTab] = useState("job");

  return (
    <>
      <div className="pt-14 mb-14">
        <h1 className="max-w-[788px] mb-8 font-font-family font-medium text-7xl tracking-[0.01em]">
          Portal Job for Developer, Designer, and Marketers
        </h1>
        <p className="max-w-[493px] text-[16px] font-normal tracking-[0.01em] text-black mb-12">
          Jobs is a curated job board of the best jobs for developers, designers
          and marketers in the tech industry.
        </p>
        <Tabs
          defaultValue="job"
          className="w-3/4 backdrop-blur-[20px] shadow-custom-shadow bg-gradient-to-tl from-opacity-0 to-gray-50 mb-4 rounded-3xl overflow-hidden"
        >
          <TabsList className="transition mb-4">
            <TabsTrigger
              value="job"
              className={`rounded-tl-[24px] p-4  ${
                selectedTab === "job" ? "text-white bg-orange" : ""
              }`}
              onClick={() => setSelectedTab("job")}
            >
              Find Job
            </TabsTrigger>
            <TabsTrigger
              value="talent"
              className={`rounded-tr-[24px] p-4 ${
                selectedTab === "talent" ? "text-white bg-orange" : ""
              }`}
              onClick={() => setSelectedTab("talent")}
            >
              Find Talents
            </TabsTrigger>
          </TabsList>
          <TabsContent value="job">
            <FindJob />
          </TabsContent>
          <TabsContent value="talent">Change your password here.</TabsContent>
        </Tabs>
      </div>

      <div className="mb-20">
        <h3 className="font-medium text-[18px] tracking-[0.01em] text-[#a2a1a7] mb-6 font-font-family">
          Trusted by:
        </h3>
        <div className="flex gap-x-6 items-center">
          <Google />
          <Microsoft />
          <Airbnb />
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
