"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React from "react";
import style from "./contactInfo.module.scss";
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
  email: string;
  phone_number: string;
};
export default function ContactInfo() {
  const schema: ZodType<FormInput> = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Invalid email format",
    }),
    phone_number: z.string().min(1, { message: "Please enter any Phone" }),
  });
  const form = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      phone_number: "",
    },
  });
  const onSubmit = async (data: FormInput) => {
    console.log(data);
    // setOpen(true);
  };
  return (
    <div className={style.maincontainer}>
      <div className={style.formcontainer}>
        <h4>Contact information</h4>

        <Form {...form}>
          <form action="" className="w-full gap-6 mb-2">
            <div className="mb-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="email">Email</Label>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        {...field}
                        placeholder="Enter email here"
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
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="phone_number">Phone Number</Label>
                    <FormControl>
                      <Input
                        id="phone_number"
                        type="tel"
                        {...field}
                        placeholder="Enter phone number here"
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
