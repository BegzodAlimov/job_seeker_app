import React from "react";
import { Logo } from "../logo/logo";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  FaceBook,
  Instagram,
  Linkedn,
  Twitter,
  YouTube,
} from "@/components/ui/social-media";
import Opportunity from "../opportunity.tsx/opportunity";

const Footer = () => {
  return (
    <>
      <Opportunity />
      <footer className="pt-[120px] pb-6 bg-secondary">
        <div className="container">
          <div className="flex justify-between mb-16">
            <div className="max-w-[363px]">
              <Link href={"/"} className="text-white">
                <Logo />
              </Link>
              <p className="font-font-family normal text-[16px] text-grayscale-40 tracking-[0.01em] mt-4">
                We are taking action to help our freelancers, our clients, and
                the people of Ukraine—and so can you.
              </p>
            </div>

            <div className="flex flex-col gap-y-8 items-center">
              <div className="flex gap-x-10">
                <Link
                  href={"/"}
                  className="font-font-family font-medium text-[16px] text-[#c5c5c5] hover:opacity-50"
                >
                  Find Talent
                </Link>
                <Link
                  href={"/"}
                  className="font-font-family font-medium text-[16px] text-[#c5c5c5] hover:opacity-50"
                >
                  Clients
                </Link>
                <Link
                  href={"/"}
                  className="font-font-family font-medium text-[16px] text-[#c5c5c5] hover:opacity-50"
                >
                  Blog
                </Link>
              </div>
              <div className="flex gap-x-10">
                <Link
                  href={"/faq"}
                  className="font-font-family font-medium text-[16px] text-[#c5c5c5] hover:opacity-50"
                >
                  FAQ
                </Link>
                <Link
                  href={"/"}
                  className="font-font-family font-medium text-[16px] text-[#c5c5c5] hover:opacity-50"
                >
                  About Us
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-medium font-font-family text-[16px] tracking-[0.03em] text-[#c5c5c5] mb-8">
                Newsletter
              </h3>
              <div className="flex gap-x-4">
                <Input
                  placeholder="Your email here"
                  className="font-normal text-[16px] text-[#cbcbcb] font-font-family tracking-[0.01em] bg-bg-input rounded-[32px] border-0 py-4 px-8"
                />
                <Button className="bg-primary-10 text-white py-4 px-8 rounded-[32px] hover:opacity-70">
                  Send
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-8">
            <div className="p-1 bg-white opacity-25 rounded-full"></div>
            <Separator className="bg-white opacity-25" />
            <div className="p-1 bg-white opacity-25 rounded-full"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-font-family font-normal text-[16px] text-grayscale-40 tracking-[0.01em]">
              © 2022 Nguli® Global Inc.
            </div>
            <div className="flex items-center gap-x-[10px]">
              <Link href={"/"} className="hover:opacity-50">
                <FaceBook />
              </Link>
              <Link href={"/"} className="hover:opacity-50">
                <Linkedn />
              </Link>
              <Link href={"/"} className="hover:opacity-50">
                <Twitter />
              </Link>
              <Link href={"/"} className="hover:opacity-50">
                <YouTube />
              </Link>
              <Link href={"/"} className="hover:opacity-50">
                <Instagram />
              </Link>
            </div>
            <div className="flex gap-x-10">
              <Link href={"/privacy_policy"} className="font-font-family font-medium text-[16px] text-[#c5c5c5] tracking-[0.01em]">
                Terms of Service
              </Link>
              <Link href={"/terms_of_service"} className="font-font-family font-medium text-[16px] text-[#c5c5c5] tracking-[0.01em]">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
