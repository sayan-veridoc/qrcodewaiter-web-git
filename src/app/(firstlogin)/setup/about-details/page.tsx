import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Steps } from "antd";

export default function AboutDetails() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">About The Organisation</h1>
      <div className="container py-4 space-y-3">
        <Steps
          className="mb-3 font-bold"
          current={2}
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
              description: "In Progress",
            },
            {
              title: "Timings",
              description: "Waiting",
            },
          ]}
        />

        <Card>
          <CardHeader>
            <CardTitle>Enter the details (3 of 4)</CardTitle>
            <CardDescription>All fields are mandatory</CardDescription>
          </CardHeader>
          <CardContent>
            <form method="post">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                <div className="col-span-1">
                  <div className="mt-4 grid w-full max-w-md items-center gap-1.5">
                    <Label htmlFor="heading1">Enter Heading 1</Label>
                    <Input type="text" id="heading1" />
                  </div>
                  <div className="mt-4 grid w-full max-w-md items-center gap-1.5">
                    <Label htmlFor="heading2">Enter Heading 2</Label>
                    <Input type="text" id="heading2" />
                  </div>
                  <div className="mt-4 grid w-full max-w-md items-center gap-1.5">
                    <Label htmlFor="website">Enter Website Name</Label>
                    <Input type="url" id="website" />
                  </div>
                  <div className="mt-4 grid w-full max-w-md items-center gap-1.5">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" rows={7} />
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="grid w-full max-w-md items-center gap-1.5">
                    <Label htmlFor="icon1">Icon 1</Label>
                    <Input type="file" id="icon1" accept="image/*" />
                  </div>
                  <div className="mt-4 grid w-full max-w-md items-center gap-1.5">
                    <Label htmlFor="icon1text">Icon 1 details</Label>
                    <Input type="text" id="icon1text" />
                  </div>
                  <div className="grid w-full max-w-md items-center gap-1.5 mt-4">
                    <Label htmlFor="icon2">Icon 2</Label>
                    <Input type="file" id="icon2" accept="image/*" />
                  </div>
                  <div className="mt-4 grid w-full max-w-md items-center gap-1.5">
                    <Label htmlFor="icon2text">Icon 2 details</Label>
                    <Input type="text" id="icon2text" />
                  </div>
                  <div className="grid w-full max-w-md items-center gap-1.5 mt-4">
                    <Label htmlFor="icon3">Icon 3</Label>
                    <Input type="file" id="icon3" accept="image/*" />
                  </div>
                  <div className="mt-4 grid w-full max-w-md items-center gap-1.5">
                    <Label htmlFor="icon3text">Icon 3 details</Label>
                    <Input type="text" id="icon3text" />
                  </div>
                </div>
              </div>
              <div className="flex">
                <Button className="mt-4">
                  <Link href="./basic-details">Previous</Link>
                </Button>
                <Button className="mt-4 ms-3">
                  <Link href="./working-hours">Save and next</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
