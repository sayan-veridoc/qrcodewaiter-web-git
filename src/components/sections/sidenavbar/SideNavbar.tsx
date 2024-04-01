"use client";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/ui/dashboardNav";
import { MENUTYPE, SideNavItem } from "@/utils/menu";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

interface SideNavBarProps {
  menu: SideNavItem[];
}
const SideNavBar: React.FC<SideNavBarProps> = ({ menu }) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-[#1c2434] h-screen p-5 relative duration-300 z-[999]`}
    >
      <Button
        type="button"
        onClick={() => setOpen(!open)}
        variant="outline"
        size="icon"
        className={`absolute cursor-pointer -right-4 top-4 w-8 h-8 shadow-[0px_0px_8px_#0000008f]
         rounded-full ${!open && "rotate-180"}`}
      >
        <FaArrowLeft className="text-primary text-base" />
      </Button>

      <div className="flex gap-x-4 items-center">
        <Image
          src={"/img/logos.svg"}
          alt="logo"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          height={40}
          width={40}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          WAITER
        </h1>
      </div>
      <ul className="pt-2">
        <Nav isCollapsed={!open} links={menu} />
      </ul>
    </div>
  );
};
export default SideNavBar;
