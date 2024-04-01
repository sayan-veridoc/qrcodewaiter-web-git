import CardSelection from "@/components/sections/templateSelection/cardSelection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};
export default function HomePage() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Choose Your Template</h1>
      <div className="container mx-auto py-4">
        <CardSelection />
      </div>
    </section>
  );
}
