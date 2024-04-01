"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MENUTYPE, SideNavItem, menu1 } from "@/utils/menu";

import { User, LayoutDashboard, Settings, LayoutList } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

type Props = {
  menu: SideNavItem[];
};

export default function TopNavbar({ menu }: Props) {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  return (
    <header className="flex items-center justify-between h-16 bg-white border-b border-gray-200 drop-shadow-sm pl-5 pr-12">
      <div className="flex items-center px-6">
        {menu.map((item, index) => (
          <h1 className="font-bold text-2xl" key={index}>
            {item.href === pathName && item.label}
            {item.subMenuItems &&
              item.subMenuItems.map((subItem, subIndex) => (
                <span key={subIndex}>
                  {subItem.href === pathName && subItem.label}
                </span>
              ))}
          </h1>
        ))}
      </div>
      <div className="flex items-center cursor-pointer">
        <DropdownMenu onOpenChange={setOpen} open={open}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-0 hover:bg-inherit bg-inherit gap-2"
            >
              <span className="hidden text-right lg:block">
                <span className="block text-sm font-medium text-black dark:text-white">
                  Hi, User
                </span>
                <span className="block text-xs font-medium">Admin</span>
              </span>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52">
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <a href="/dashboard/home">
                  <User className="mr-2 h-4 w-4" />
                  <span>My Account</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/selectwebsitetemplate">
                  <LayoutList className="mr-2 h-4 w-4" />
                  <span>Register</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
