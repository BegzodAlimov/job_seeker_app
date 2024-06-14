"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../logo/logo";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between py-7">
      <div className="flex items-center gap-20">
        <Logo />
        <ul className="flex gap-x-14">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <Link
                className={`font-medium text-[16px] tracking-[0.01em] text-black ${
                  pathname === link.link ? "text-opacity-70" : ""
                }`}
                href={link.link}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-x-8 justify-between w-64">
        {pathname === "/" ? <div className="flex gap-x-8 justify-between">
          <Button className="bg-orange rounded-[32px] border border-white text-white hover:bg-white hover:text-primary">Log in</Button>
          <Button className="bg-white rounded-[32px] border border-white text-primary  hover:bg-transparent hover:text-white">Sign Up</Button>
        </div> : "a"}
      </div>
    </div>
  );
};

export default Navbar;

const navbarLinks = [
  {
    id: "1",
    title: "Find Talent",
    link: "/",
  },
  {
    id: "2",
    title: "Clients",
    link: "/clients",
  },
  {
    id: "3",
    title: "Community",
    link: "/",
  },
  {
    id: "4",
    title: "Blog",
    link: "/",
  },
  {
    id: "5",
    title: "About Us",
    link: "/",
  },
];
