"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import style from "./menuArea.module.scss";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
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
};
export default function MenuArea() {
  const schema: ZodType<FormInput> = z.object({
    heading: z.string().min(1, { message: "Menu Heading is required" }),
  });
  const form = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      heading: "",
    },
  });
  const onSubmit = async ({ heading }: FormInput) => {
    console.log({ heading });
    // setOpen(true);
  };
  return (
    <div className={style.maincontainer}>
      <div className={style.formcontainer}>
        <h4>Menu Area</h4>
        <Form {...form}>
          <form action="" className="w-full gap-6 mb-2">
            <div className="mb-3">
              <FormField
                control={form.control}
                name="heading"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="heading">Menu Heading</Label>
                    <FormControl>
                      <Input
                        id="heading"
                        type="text"
                        {...field}
                        placeholder="Menu Heading"
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
