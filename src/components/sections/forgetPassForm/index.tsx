"use client";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";
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
import { PasswordField } from "@/components/ui/passwordfield";
import PasswordValidation from "@/utils/PasswordValidation";

type FormInput = {
  email: string;
};
export default function ForgetpassForm() {
  const [open, setOpen] = useState(false);
  const schema: ZodType<FormInput> = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Invalid email format",
    }),
  });
  const form = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async ({ email }: FormInput) => {
    console.log({ email });
    setOpen(true);
  };
  return (
    <>
      <Form {...form}>
        <form action="" className="w-full gap-6 mb-2">
          <div className="mt-5 mb-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">
                    Please enter your registered email id
                  </Label>
                  <FormControl>
                    <Input
                      id="email"
                      icon={
                        <MailOutlined
                          style={{
                            color: "rgba(0,0,0,.45)",
                            marginRight: 5,
                          }}
                          className="absolute top-3 left-3 z-10"
                        />
                      }
                      type="email"
                      {...field}
                      placeholder="Email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <AlertDialog onOpenChange={setOpen} open={open}>
            <AlertDialogTrigger asChild>
              <Button
                type="button"
                className="w-full"
                size={"lg"}
                onClick={form.handleSubmit(onSubmit)}
              >
                Recover
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent
              style={{
                borderRadius: 0,
                width: 360,
                paddingTop: 40,
                paddingBottom: 40,
              }}
            >
              <AlertDialogHeader className="items-center">
                <FaCircleCheck size={80} className="text-primary" />
                <AlertDialogTitle className="text-center">
                  Awesome!
                </AlertDialogTitle>
                <AlertDialogDescription className="text-center">
                  Instructions for setting your password have been sent to your
                  email. If you don&apos;t get an email, please check that the
                  entered email address matches the address you registered with,
                  and check your spam folder.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <Button
                  type="button"
                  className="rounded-none mx-auto"
                  size={"lg"}
                  onClick={() => setOpen(false)}
                >
                  Ok
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button type="button" className="w-full mt-4" size={"lg"}>
            Go Back
          </Button>
        </form>
      </Form>
    </>
  );
}
