"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React from "react";
import style from "./socialMedia.module.scss";
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
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
};
export default function SocialMedia() {
  const schema: ZodType<FormInput> = z.object({
    facebookUrl: z.string().min(1, { message: "Facebook Url is required" }),
    twitterUrl: z.string().min(1, { message: "Twitter Url is required" }),
    instagramUrl: z.string().min(1, { message: "Instagram Url is required" }),
  });
  const form = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      facebookUrl: "",
      twitterUrl: "",
      instagramUrl: "",
    },
  });
  const onSubmit = async (data: FormInput) => {
    console.log(data);
    // setOpen(true);
  };
  return (
    <div className={style.maincontainer}>
      <div className={style.formcontainer}>
        <h4>Social Media</h4>

        <Form {...form}>
          <form action="" className="w-full gap-6 mb-2">
            <div className="mb-3">
              <FormField
                control={form.control}
                name="facebookUrl"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="facebookUrl">Facebook</Label>
                    <FormControl>
                      <Input
                        id="facebookUrl"
                        type="text"
                        {...field}
                        placeholder="Enter your facebook profile link here"
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
                name="twitterUrl"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="twitterUrl">Twitter</Label>
                    <FormControl>
                      <Input
                        id="twitterUrl"
                        type="text"
                        {...field}
                        placeholder="Enter your twitter profile link here"
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
                name="instagramUrl"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="instagramUrl">Instagram</Label>
                    <FormControl>
                      <Input
                        id="instagramUrl"
                        type="text"
                        {...field}
                        placeholder="Enter your instagram profile link here"
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
