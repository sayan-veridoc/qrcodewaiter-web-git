import EditWebSiteInfo from "@/components/sections/editwebsiteinfo/EditWebSiteInfo";
import { Metadata } from "next";
import React from "react";
import MenuArea from "@/components/sections/menuArea/menuArea";
import Banner from "@/components/sections/slider/Banner";
import FaqCard from "@/components/sections/faqSection/faqCard";
import OrderInfo from "@/components/sections/orderInfo/orderInfo";
import ContactInfo from "@/components/sections/contactInfo/contactInfo";
import SocialMedia from "@/components/sections/socialMedia/socialMedia";
import WorkingHours from "@/components/sections/Workinghour/workingHours";
import Testimonial from "@/components/sections/Testimonial/testimonial";
import ItemTopFrom from "@/components/sections/itemPageTopForm/index";

export const metadata: Metadata = {
  title: "Items",
};
type Props = {};

export default function Items({}: Props) {
  return (
    <section className="">
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-2">
            {/* topform */}
            <ItemTopFrom />
          </div>
          <div className="">
            <EditWebSiteInfo />
            <Banner />
            <MenuArea />
            <FaqCard />
          </div>
          <div className="">
            <OrderInfo />
            <Testimonial />
            <WorkingHours />
            <ContactInfo />
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  );
}
