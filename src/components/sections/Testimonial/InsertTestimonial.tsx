import React, { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { Image, Typography } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { invoices } from "@/utils/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";

type FormInput = {
  customerName: string;
  customerDesignation: string;
  customFeedback: string;
};
interface FileState {
  file: File | null;
}
export default function InsertTestimonial() {
  const schema: ZodType<FormInput> = z.object({
    customerName: z.string().min(1, { message: "Customer Name is required" }),
    customerDesignation: z.string().min(1, "Customer Designation is required"),
    customFeedback: z.string().min(1, "Custom Feedback is required"),
  });
  const form = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      customerName: "",
      customerDesignation: "",
      customFeedback: "",
    },
  });
  const [fileState, setFileState] = useState<FileState>({ file: null });
  const [visible, setVisible] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Function to handle file selection
  const handleFileChange = () => {
    if (
      fileInputRef.current &&
      fileInputRef.current.files &&
      fileInputRef.current.files.length > 0
    ) {
      const selectedFile = fileInputRef.current.files[0];
      setFileState({ file: selectedFile });
    }
  };

  // Function to handle preview button click
  const handlePreviewClick = () => {
    setVisible(true);
  };
  const onSubmit = async (data: FormInput) => {
    //   await loginMutation(data);
    if (!fileState.file) {
      toast.error("Please upload a file before submitting.");
      return;
    }
    const formData = {
      ...data,
      file: fileState.file,
    };
    console.log(formData);
  };
  return (
    <>
      <Form {...form}>
        <form action="" className="w-full gap-6 mb-2">
          <div className="flex items-end gap-5 mb-5 mx-auto">
            <div className="w-full">
              <FormItem>
                <Label htmlFor="picture">Customer photo</Label>
                <Input
                  id="picture"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </FormItem>
            </div>
            <Button
              type="button"
              size={"lg"}
              className="h-[40px] w-full"
              onClick={handlePreviewClick}
              disabled={!fileState.file}
            >
              Preview
            </Button>
          </div>
          <div className="w-full mb-4">
            <FormField
              control={form.control}
              name="customerName"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="customerName">Customer Name</Label>
                  <FormControl>
                    <Input
                      id="customerName"
                      placeholder="Enter Name Here"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full mb-4">
            <FormField
              control={form.control}
              name="customerDesignation"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="customerDesignation">
                    Customer Designation/Title
                  </Label>
                  <FormControl>
                    <Input
                      id="customerDesignation"
                      placeholder="Enter Designation Here"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full mb-4">
            <FormField
              control={form.control}
              name="customFeedback"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="customFeedback">Custom Feedback</Label>
                  <FormControl>
                    <Input
                      id="customFeedback"
                      type="text"
                      placeholder="Enter Description Here"
                      {...field}
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
          <div className="hidden">
            {fileState.file && (
              <Image
                width={200}
                style={{ display: "none" }}
                src={URL.createObjectURL(fileState.file)}
                alt="preview"
                preview={{
                  visible,
                  title: (
                    <Typography.Title level={4}>
                      {fileState.file.name}
                    </Typography.Title>
                  ),
                  onVisibleChange: (val) => setVisible(val),
                }}
              />
            )}
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
      <div>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className="bg-primary  ">
            <TableRow className="hover:bg-primary">
              <TableHead className="w-[100px] text-white">SL No</TableHead>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Designation</TableHead>
              <TableHead className="text-right text-white">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
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
    </>
  );
}
