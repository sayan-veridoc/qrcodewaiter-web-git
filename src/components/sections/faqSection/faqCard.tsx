"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import style from "./faqCard.module.scss";
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

import { FaPlus } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { invoices } from "@/utils/card";

type FormInput = {
  question: string;
  answer: string;
};
export default function FaqCard() {
  const schema: ZodType<FormInput> = z.object({
    question: z.string().min(1, { message: "FAQ Question is required" }),
    answer: z.string().min(1, { message: "FAQ Answer is required" }),
  });
  const form = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      question: "",
      answer: "",
    },
  });
  const onSubmit = async ({ question, answer }: FormInput) => {
    console.log({ question, answer });
    // setOpen(true);
  };
  return (
    <div className={style.maincontainer}>
      <div className={style.formcontainer}>
        <h4>FAQ</h4>
        <Form {...form}>
          <form action="" className="w-full gap-6 mb-2">
            <div className="mb-3">
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="question">Question</Label>
                    <FormControl>
                      <Input
                        id="question"
                        type="text"
                        {...field}
                        placeholder="Enter Question here"
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
                name="answer"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="answer">Answer</Label>
                    <FormControl>
                      <Input
                        id="answer"
                        type="text"
                        {...field}
                        placeholder="Enter Answer here"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="button"
              size={"default"}
              variant={"outline"}
              className="flex justify-center items-center gap-2"
            >
              <FaPlus size={18} />
              <span>Add More</span>
            </Button>
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
        <div>
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader className="bg-primary  ">
              <TableRow className="hover:bg-primary">
                <TableHead className="w-[100px] text-white">SL No</TableHead>
                <TableHead className="text-white">Question</TableHead>
                {/* <TableHead>Answer</TableHead> */}
                <TableHead className="text-right text-white">Answer</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  {/* <TableCell>{invoice.paymentMethod}</TableCell> */}
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>
        </div>
      </div>
    </div>
  );
}
