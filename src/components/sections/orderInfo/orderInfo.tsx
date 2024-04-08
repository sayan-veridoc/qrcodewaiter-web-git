"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React from "react";
import style from "./orderInfo.module.scss";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

type FormInput = {
  heading: string;
  description: string;
};
export default function OrderInfo() {
  const schema: ZodType<FormInput> = z.object({
    heading: z.string().min(1, { message: "Heading is required" }),
    description: z.string().min(1, { message: "Description is required" }),
  });
  const form = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      heading: "",
      description: "",
    },
  });
  const onSubmit = async ({ heading, description }: FormInput) => {
    console.log({ heading, description });
    // setOpen(true);
  };
  return (
    <div className={style.maincontainer}>
      <h5>Order Info</h5>
      <div className={style.formcontainer}>
        <h4>Daily Deal</h4>

        <Form {...form}>
          <form action="" className="w-full gap-6 mb-2">
            <div className="mb-3">
              <FormField
                control={form.control}
                name="heading"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="heading">Heading</Label>
                    <FormControl>
                      <Input
                        id="heading"
                        type="text"
                        {...field}
                        placeholder="Enter Heading here"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-3">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="description">Description</Label>
                    <FormControl>
                      <Input
                        id="description"
                        type="text"
                        {...field}
                        placeholder="Enter description here"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="text-end mt-4">
              <Button
                type="button"
                size={"default"}
                onClick={form.handleSubmit(onSubmit)}
              >
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
