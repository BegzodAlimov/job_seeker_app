"use client";
import React, { ReactNode } from "react";
import localFont from "next/font/local";
import Navbar from "@/components/shared/navbar/navbar";
import { usePathname } from "next/navigation";
import Footer from "@/components/shared/footer/footer";

const font = localFont({
  src: [
    {
      path: "../../public/Fonts/WEB/fonts/GeneralSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/Fonts/WEB/fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Fonts/WEB/fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Fonts/WEB/fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/Fonts/WEB/fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <header className="container">
        {pathname !== "/" ? <Navbar /> : null}
      </header>
      <main className={`container max-lg:px-5 bg-background ${font.className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
