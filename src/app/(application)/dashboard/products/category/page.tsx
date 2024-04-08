import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "antd";
import CardButton from "@/components/ui/cardButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
};
type Props = {};

export default function Category({}: Props) {
  return (
    <section>
      <div className="container mx-auto py-4">
        <Card>
          <CardContent className="pt-6 flex justify-center">
            <CardButton>Add Categories</CardButton>
            {/* <div className="flex flex-col bg-slate-200 border shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"></div> */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
