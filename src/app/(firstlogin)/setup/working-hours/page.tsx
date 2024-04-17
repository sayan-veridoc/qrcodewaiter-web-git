"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Steps } from "antd";

export default function Working() {
  const [mondayOpen, setMondayOpen] = useState<boolean>(true);
  const [tuesdayOpen, setTuesdayOpen] = useState<boolean>(true);
  const [wednesdayOpen, setWednesdayOpen] = useState<boolean>(true);
  const [thursdayOpen, setThursdayOpen] = useState<boolean>(true);
  const [fridayOpen, setFridayOpen] = useState<boolean>(true);
  const [saturdayOpen, setSaturdayOpen] = useState<boolean>(true);
  const [sundayOpen, setSundayOpen] = useState<boolean>(true);

  const toggleMondayOpen = () => {
    setMondayOpen(!mondayOpen);
  };

  const toggleTuesdayOpen = () => {
    setTuesdayOpen(!tuesdayOpen);
  };

  const toggleWednesdayOpen = () => {
    setWednesdayOpen(!wednesdayOpen);
  };

  const toggleThursdayOpen = () => {
    setThursdayOpen(!thursdayOpen);
  };

  const toggleFridayOpen = () => {
    setFridayOpen(!fridayOpen);
  };

  const toggleSaturdayOpen = () => {
    setSaturdayOpen(!saturdayOpen);
  };

  const toggleSundayOpen = () => {
    setSundayOpen(!sundayOpen);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Work Hours</h1>
      <div className="container py-4 space-y-3">
        <Steps
          className="mb-3 font-bold"
          current={3}
          items={[
            {
              title: "Select Template",
              description: "Done",
            },
            {
              title: "Basic Details",
              description: "Done",
            },
            {
              title: "About Details",
              description: "Done",
            },
            {
              title: "Timings",
              description: "In Progress",
            },
          ]}
        />

        <Card>
          <CardHeader>
            <CardTitle>Working Hours (4 of 4)</CardTitle>
            <CardDescription>All fields are mandatory</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-scroll md:overflow-x-visible">
            <form method="post">
              <div className="flex md:flex-row flex-col justify-between">
                <div className="lg:w-40 md:w-32 mt-1">
                  <p className="md:font-normal font-bold">Monday</p>
                </div>
                {mondayOpen ? (
                  <>
                    <div className="w-32 md:w-52 md:mt-0 mt-2 ml-5">
                      <Input type="time" id="mondayvalue" />
                    </div>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-32 md:w-52 md:mt-0 mt-2 ml-5">
                      <Input type="time" id="mondayvalue" disabled />
                    </div>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" disabled />
                    </div>
                  </>
                )}

                <div className="flex items-center space-x-2 w-32 md:mt-0 mt-2">
                  <Switch
                    className="ml-5"
                    id="mondayopenclose"
                    onClick={toggleMondayOpen}
                    defaultChecked
                  />
                  <Label htmlFor="closed">
                    {mondayOpen ? "Open" : "Closed"}
                  </Label>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between md:mt-2 mt-4">
                <div className="lg:w-40 md:w-32 mt-1">
                  <p className="md:font-normal font-bold">Tuesday</p>
                </div>
                {tuesdayOpen ? (
                  <>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" id="tuesdayvalue" />
                    </div>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" id="tuesdayvalue" disabled />
                    </div>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" disabled />
                    </div>
                  </>
                )}
                <div className="flex items-center space-x-2 w-32 md:mt-0 mt-2">
                  <Switch
                    className="ml-5"
                    id="tuesdayopenclose"
                    onClick={toggleTuesdayOpen}
                    defaultChecked
                  />
                  <Label htmlFor="Open">
                    {tuesdayOpen ? "Open" : "Closed"}
                  </Label>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between md:mt-2 mt-4">
                <div className="lg:w-40 md:w-32 mt-1">
                  <p className="md:font-normal font-bold">Wednesday</p>
                </div>
                {wednesdayOpen ? (
                  <>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" id="wednesdayvalue" />
                    </div>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" id="wednesdayvalue" disabled />
                    </div>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" disabled />
                    </div>
                  </>
                )}
                <div className="flex items-center space-x-2 w-32 md:mt-0 mt-2">
                  <Switch
                    className="ml-5"
                    id="wednesdayopenclose"
                    onClick={toggleWednesdayOpen}
                    defaultChecked
                  />
                  <Label htmlFor="Open">
                    {wednesdayOpen ? "Open" : "Closed"}
                  </Label>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between md:mt-2 mt-4">
                <div className="lg:w-40 md:w-32 mt-1">
                  <p className="md:font-normal font-bold">Thursday</p>
                </div>
                {thursdayOpen ? (
                  <>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" id="thursdayvalue" />
                    </div>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" id="thursdayvalue" disabled />
                    </div>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" disabled />
                    </div>
                  </>
                )}
                <div className="flex items-center space-x-2 w-32 md:mt-0 mt-2">
                  <Switch
                    className="ml-5"
                    id="thursdayopenclose"
                    onClick={toggleThursdayOpen}
                    defaultChecked
                  />
                  <Label htmlFor="Open">
                    {thursdayOpen ? "Open" : "Closed"}
                  </Label>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between md:mt-2 mt-4">
                <div className="lg:w-40 md:w-32 mt-1">
                  <p className="md:font-normal font-bold">Friday</p>
                </div>
                {fridayOpen ? (
                  <>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" id="fridayvalue" />
                    </div>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" id="fridayvalue" disabled />
                    </div>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" disabled />
                    </div>
                  </>
                )}
                <div className="flex items-center space-x-2 w-32 md:mt-0 mt-2">
                  <Switch
                    className="ml-5"
                    id="fridayopenclose"
                    onClick={toggleFridayOpen}
                    defaultChecked
                  />
                  <Label htmlFor="Open">{fridayOpen ? "Open" : "Closed"}</Label>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between md:mt-2 mt-4">
                <div className="lg:w-40 md:w-32 mt-1">
                  <p className="md:font-normal font-bold">Saturday</p>
                </div>
                {saturdayOpen ? (
                  <>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" id="saturdayvalue" />
                    </div>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" id="saturdayvalue" disabled />
                    </div>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" disabled />
                    </div>
                  </>
                )}
                <div className="flex items-center space-x-2 w-32 md:mt-0 mt-2">
                  <Switch
                    className="ml-5"
                    id="saturdayopenclose"
                    onClick={toggleSaturdayOpen}
                    defaultChecked
                  />
                  <Label htmlFor="Open">
                    {saturdayOpen ? "Open" : "Closed"}
                  </Label>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-between md:mt-2 mt-4">
                <div className="lg:w-40 md:w-32 mt-1">
                  <p className="md:font-normal font-bold">Sunday</p>
                </div>
                {sundayOpen ? (
                  <>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" id="sundayvalue" />
                    </div>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" id="sundayvalue" disabled />
                    </div>
                    <div className="w-32 md:w-52 ml-5 md:mt-0 mt-2">
                      <Input type="time" disabled />
                    </div>
                  </>
                )}
                <div className="flex items-center space-x-2 w-32 md:mt-0 mt-2">
                  <Switch
                    className="ml-5"
                    id="sundayopenclose"
                    onClick={toggleSundayOpen}
                    defaultChecked
                  />
                  <Label htmlFor="Open">{sundayOpen ? "Open" : "Closed"}</Label>
                </div>
              </div>
              <div className="flex">
                <Button className="mt-4">
                  <Link href="./about-details">Previous</Link>
                </Button>
                <Button className="mt-4 ms-3">
                  <Link href="/dashboard/home">Final Submit</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
