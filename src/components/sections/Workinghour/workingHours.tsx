"use client";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import style from "./workingHours.module.scss";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function WorkingHours() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className={style.maincontainer}>
      <div className={style.formcontainer}>
        <h4>Working hours</h4>
        <span className="flex items-center my-5">
          <Checkbox id={`terms`} className="mr-2" />
          <Label htmlFor={`terms`}>There are 2 sets of hours for 1 day</Label>
        </span>
        <div className="w-full">
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader className="bg-primary  ">
              <TableRow className="hover:bg-primary">
                <TableHead className="w-[100px] text-white">Days</TableHead>
                <TableHead className="text-center text-white">Status</TableHead>
                <TableHead className="text-center text-white">Method</TableHead>
                <TableHead className="text-center text-white">Close</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {days.map((days, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{days}</TableCell>
                  <TableCell>
                    <Input
                      placeholder="HH:MM"
                      className="placeholder:text-center text-center"
                      size={5}
                    />
                  </TableCell>

                  <TableCell>
                    <Input
                      placeholder="HH:MM"
                      size={5}
                      className="placeholder:text-center text-center"
                    />
                  </TableCell>
                  <TableCell className="">
                    <div className="flex justify-center items-center space-x-1">
                      <Checkbox id={`terms${index}`} className="mr-2" />
                      <Label htmlFor={`terms${index}`}>Closed</Label>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter className="bg-white ">
              <TableRow className="hover:bg-white">
                <TableCell colSpan={4}>
                  <div className="flex flex-col float-end">
                    <Button>Apply to all days</Button>
                    <div className="text-end">
                      <Button type="button" size={"default"}>
                        Save
                      </Button>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}
