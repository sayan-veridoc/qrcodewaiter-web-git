"use client";
import React from "react";
import style from "./testimonial.module.scss";
import HeadingForm from "./headingForm";
import InsertTestimonial from "./InsertTestimonial";

export default function Testimonial() {
  return (
    <div className={style.maincontainer}>
      <div className={style.formcontainer}>
        <h4>Testimonial</h4>
        {/* heading Form InsertWebSiteInfo */}
        <HeadingForm />
        {/* InsertTestimonial  */}
        <InsertTestimonial />
      </div>
    </div>
  );
}
