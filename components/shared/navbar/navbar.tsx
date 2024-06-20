"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../logo/logo";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between py-7 relative z-40">
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
      <div className={"flex gap-x-8 justify-between"}>
        <div className="flex gap-x-8 justify-between">
          <Button
            className={`rounded-[32px] border w-[110px] ${
              pathname === "/"
                ? "bg-orange border-white text-white hover:bg-white hover:text-primary-10"
                : "bg-white border-primary-10 text-primary-10 hover:bg-primary-10 hover:text-white"
            }`}
          >
            Log in
          </Button>
          <Button
            className={`rounded-[32px] border w-[110px] ${
              pathname === "/"
                ? "bg-white border-white text-primary-10  hover:bg-orange hover:text-white mr-10"
                : "bg-primary-10 border-primary-10 text-white  hover:bg-white hover:text-primary-10"
            }`}
          >
            Sign Up
          </Button>
        </div>
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
    link: "/comunity",
  },
  {
    id: "4",
    title: "Blog",
    link: "/blog",
  },
  {
    id: "5",
    title: "About Us",
    link: "/about",
  },
];
