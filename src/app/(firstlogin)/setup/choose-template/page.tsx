import CardSelection from "@/components/sections/templateSelection/cardSelection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Steps } from "antd";
import React from "react";

export default function ChooseTemplate() {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Choose a Template</h1>
      <div className="container py-4 space-y-3">
        <Steps
          className="mb-3 font-bold"
          current={0}
          items={[
            {
              title: "Select Template ",
              description: "In Progress",
            },
            {
              title: "Basic Details",
              description: "Waiting",
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

        <Card>
          <CardHeader>
            <CardTitle>Choose a template (1 of 4)</CardTitle>
            <CardDescription>
              Choose the template that you wish to keep for your business
              profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardSelection />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
