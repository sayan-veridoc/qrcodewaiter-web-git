"use client";
import SideNavbar from "@/components/sections/sidenavbar/SideNavbar";
import TopNavbar from "@/components/sections/topNavbar/topNavbar";
import { menu1, menu2, sideNavItems } from "@/utils/menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-screen overflow-hidden ">
      <SideNavbar menu={sideNavItems} />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <TopNavbar menu={sideNavItems} />
        <main className="p-4 bg-[#f1f5f9] h-full">{children}</main>
        <div className=" bg-black px-0 py-2.5">
          <div className="container mx-auto">
            <div className="row">
              <div className="col-lg-12 text-center">
                <p className="text-white">
                  © {new Date().getFullYear()} | ALL RIGHTS RESERVED, VERIDOC
                  GLOBAL PTY LTD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
