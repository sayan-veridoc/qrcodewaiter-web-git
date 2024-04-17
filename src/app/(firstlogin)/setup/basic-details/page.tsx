"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import styles from "../style.module.scss";
import Link from "next/link";
import { ConfigProvider, Steps } from "antd";
import { PasswordField } from "@/components/ui/passwordfield";

export default function BasicDetails() {
  const [username, newUsername] = useState<string>("username");
  const [usnNull, newUsnNull] = useState<boolean>(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const changeun = (usn: string) => {
    if (usn == "") {
      newUsername("username");
      newUsnNull(true);
    } else {
      newUsername(usn);
      newUsnNull(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleMobileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const mob = e.target.value.replace(/\D/g, "");
    const limitMob = mob.slice(0, 10);
    e.target.value = limitMob;
  };

  const togglevisibility = () => {
    setVisible(!visible);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Basic Details</h1>
      <div className="container py-4 space-y-3">
        <div>
          <Steps
            className="mb-3 font-bold"
            current={1}
            status="process"
            items={[
              {
                title: "Select Template",
                description: "Done",
              },
              {
                title: "Basic Details",
                description: "In Progress",
              },
              {
                title: "About Details",
                description: "Waiting",
              },
              {
                title: "Timings",
                description: "Waiting",
              },
            ]}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Enter the details (2 of 4)</CardTitle>
            <CardDescription>All fields are mandatory</CardDescription>
          </CardHeader>
          <CardContent>
            <form method="post">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                <div className="col-span-1">
                  <div className="grid w-full max-w-md items-center gap-1.5">
                    <Label htmlFor="username">Enter Username</Label>
                    <Input
                      type="text"
                      id="username"
                      onChange={(e) => changeun(e.target.value)}
                    />
                    <p>
                      Your venue URL would be www.qrcodewaiter.com/
                      <span
                        className={
                          usnNull
                            ? "font-bold text-gray-500"
                            : "font-bold text-red-500"
                        }
                      >
                        {username}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4 grid w-full max-w-md items-center gap-1.5">
                    <Label htmlFor="businessname">Enter Business Name</Label>
                    <Input type="text" id="businessname" />
                  </div>
                  <div className="mt-4 grid w-full max-w-md items-center gap-1.5">
                    <Label htmlFor="email">Enter Email</Label>
                    <Input type="email" id="email" />
                  </div>
                  <div className="mt-4 grid w-full max-w-md items-center gap-1.5">
                    <Label htmlFor="mobileno">Enter Mobile no.</Label>
                    <Input
                      type="tel"
                      id="mobileno"
                      onChange={handleMobileChange}
                    />
                  </div>
                  <div className="mt-4 grid w-full max-w-md items-center gap-1.5 relative">
                    <Label htmlFor="password">Enter Password</Label>
                    <PasswordField id="password" placeholder="Password" />
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="grid w-full max-w-md items-center gap-1.5">
                    <Label htmlFor="logo">Upload logo</Label>
                    <Input
                      type="file"
                      id="logo"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="mt-4">
                    <p>Image Preview:</p>
                    <div className="h-56 w-56 border">
                      {imagePreview && (
                        <img
                          src={imagePreview}
                          alt="logo"
                          className="h-full w-full object-contain"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <Button className="mt-4">
                  <Link href="./choose-template">Previous</Link>
                </Button>
                <Button className="mt-4 ms-3">
                  <Link href="./about-details">Save and next</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
