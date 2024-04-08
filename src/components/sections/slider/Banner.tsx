"use client";
import React, { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import style from "./Banner.module.scss";
import SliderForm from "../sliderForm/sliderForm";

export default function Banner() {
  return (
    <div className={style.maincontainer}>
      <div className={style.formcontainer}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#58595A] font-semibold text-xl">
              Slider 1
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-3">
                <SliderForm />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-[#58595A] font-semibold text-xl">
              Slider 2
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-3">
                <SliderForm />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-[#58595A] font-semibold text-xl">
              Slider 3
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-3">
                <SliderForm />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
