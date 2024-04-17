"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dat } from "@/utils/card";

// export const metadata: Metadata = {
//   title: "Stocks",
// };
type Props = {};
export default function Home({}: Props) {
  return (
    <section>
      <div className="container mx-auto py-4">
        <Card>
          <CardHeader className="flex-row justify-between items-center">
            <CardTitle>Items</CardTitle>
            <div className="flex items-center gap-3 ">
              <div className="flex items-center gap-2">
                <Label className="w-44" htmlFor="">
                  Select category
                </Label>
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="button"
                size={"default"}
                className="flex justify-center items-center gap-2"
              >
                <FaPlus size={18} />
                <span>Add More</span>
              </Button>
            </div>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent>
            <div>
              <Table className="border">
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader className="bg-primary  ">
                  <TableRow className="hover:bg-primary">
                    <TableHead className="w-[100px] text-white">
                      Item name
                    </TableHead>
                    <TableHead className="text-white">
                      Take Away Price
                    </TableHead>
                    <TableHead className="text-white">DineIn Price</TableHead>
                    <TableHead className="text-white">
                      Add ons available
                    </TableHead>
                    <TableHead className="text-right text-white">
                      Stock Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dat.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="text-center font-semibold"
                      >
                        No data found!
                      </TableCell>
                    </TableRow>
                  ) : (
                    dat.map((invoice) => (
                      <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">
                          {invoice.invoice}
                        </TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                          {invoice.totalAmount}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
                {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter> */}
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
