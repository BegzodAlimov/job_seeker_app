"use client";
import Navbar from "@/components/shared/navbar/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import bannerImg from "../../../assets/home-banner.png";
import Image from "next/image";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("job");

  return (
    <>
      <header className="container relative">
        <div className="relative z-30">
          <Navbar />
          <div className="pt-14">
            <h1 className="max-w-[788px] mb-8 font-font-family font-medium text-7xl tracking-[0.01em]">
              Portal Job for Developer, Designer, and Marketers
            </h1>
            <p className="max-w-[493px] text-[16px] font-normal tracking-[0.01em] text-black mb-12">
              Jobs is a curated job board of the best jobs for developers,
              designers and marketers in the tech industry.
            </p>
            <Tabs
              defaultValue="job"
              className="w-3/4 backdrop-blur-[20px] shadow-custom-shadow bg-gradient-to-tl from-opacity-0 to-gray-50"
            >
              <TabsList className="transition mb-4">
                <TabsTrigger
                  value="job"
                  className={`rounded-tl-[24px] p-4 ${
                    selectedTab === "job"
                      ? "border-b border-b-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setSelectedTab("job")}
                >
                  Find Job
                </TabsTrigger>
                <TabsTrigger
                  value="talent"
                  className={`rounded-tr-[24px] p-4 ${
                    selectedTab === "talent"
                      ? "border-b border-b-primary text-primary"
                      : ""
                  }`}
                  onClick={() => setSelectedTab("talent")}
                >
                  Find Talents
                </TabsTrigger>
              </TabsList>
              <TabsContent value="job">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="talent">
                Change your password here.
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <Image src={bannerImg} alt="banner img" />
        </div>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
