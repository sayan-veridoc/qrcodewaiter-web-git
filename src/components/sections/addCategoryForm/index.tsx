"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Image, Typography } from "antd";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

type FormInput = {
  categoryName: string;
  orderPosition: string;
};
interface FileState {
  file: File | null;
}
export default function AddCategoryForm() {
  const schema: ZodType<FormInput> = z.object({
    categoryName: z.string().min(1, { message: "Category Name is required" }),
    orderPosition: z.string().min(1, "Order Position is required"),
  });
  const form = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      categoryName: "",
      orderPosition: "",
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
          <div className="flex items-center gap-5 mb-5 mx-auto">
            <div className="w-full">
              <FormField
                control={form.control}
                name="categoryName"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="categoryName">Category Name</Label>
                    <FormControl>
                      <Input id="categoryName" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="orderPosition"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="orderPosition">Order Position</Label>
                    <FormControl>
                      <Input id="orderPosition" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex items-end gap-5 mb-5 mx-auto">
            <div className="w-full">
              <FormItem>
                <Label htmlFor="picture">
                  Category Image
                  <span className="text-destructive">*</span>
                </Label>
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

          <div className="">
            <Button
              type="button"
              size={"lg"}
              onClick={form.handleSubmit(onSubmit)}
            >
              Add
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
