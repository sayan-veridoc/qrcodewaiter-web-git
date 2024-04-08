import AddCategoryForm from "@/components/sections/addCategoryForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type Props = {};

export default function AddCategory({}: Props) {
  return (
    <section>
      <h1 className="text-2xl font-bold">Add New Category</h1>
      <div className="container mx-auto py-4">
        <Card>
          <CardContent className="pt-6">
            <AddCategoryForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
