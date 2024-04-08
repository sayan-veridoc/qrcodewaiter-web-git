import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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
  testimonialHeading: string;
};
export default function HeadingForm() {
  const schema: ZodType<FormInput> = z.object({
    testimonialHeading: z
      .string()
      .min(1, { message: "Testimonial Heading is required" }),
  });
  const form = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      testimonialHeading: "",
    },
  });
  const onSubmit = async (data: FormInput) => {
    console.log(data);
    // setOpen(true);
  };
  return (
    <Form {...form}>
      <form action="" className="w-full gap-6 mb-2">
        <div className="mb-3">
          <FormField
            control={form.control}
            name="testimonialHeading"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="testimonialHeading">Testimonial Heading</Label>
                <FormControl>
                  <Input
                    id="testimonialHeading"
                    type="text"
                    {...field}
                    placeholder="Enter Testimonial heading here"
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
  );
}
