import React, { useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { Image, Typography } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

type FormInput = {
  slideTitle: string;
  slideHeading: string;
  buttonUrl: string;
  buttonText: string;
};
interface FileState {
  file: File | null;
}
export default function SliderForm() {
  const schema: ZodType<FormInput> = z.object({
    slideTitle: z.string().min(1, { message: "Slide Title Name is required" }),
    slideHeading: z.string().min(1, "Slide Heading Text is required"),
    buttonUrl: z.string().min(1, "Url is required"),
    buttonText: z.string().min(1, "Button Text is required"),
  });
  const form = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      slideTitle: "",
      slideHeading: "",
      buttonUrl: "",
      buttonText: "",
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
    <Form {...form}>
      <form action="" className="w-full gap-6 mb-2">
        <div className="w-full mb-4">
          <FormField
            control={form.control}
            name="slideTitle"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="slideTitle">Slide Title</Label>
                <FormControl>
                  <Input id="slideTitle" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full mb-4">
          <FormField
            control={form.control}
            name="slideHeading"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="slideHeading">Slide Middle Heading</Label>
                <FormControl>
                  <Input id="slideHeading" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-end gap-5 mb-5 mx-auto">
          <div className="w-full">
            <FormItem>
              <Label htmlFor="picture">Upload banner image 1 (1920x850)</Label>
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
        <div className="w-full mb-4">
          <FormField
            control={form.control}
            name="buttonUrl"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="buttonUrl">Button link/url</Label>
                <FormControl>
                  <Input
                    id="buttonUrl"
                    type="text"
                    placeholder="link.com"
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
            name="buttonText"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="buttonText">Button text</Label>
                <FormControl>
                  <Input id="buttonText" type="text" {...field} />
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
