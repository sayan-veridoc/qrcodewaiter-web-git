"use client";

import Link from "next/link";
import styles from "./loginform.module.scss";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordField } from "@/components/ui/passwordfield";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

type FormInput = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const schema: ZodType<FormInput> = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Invalid email format",
    }),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have more than 8 characters")
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,16}$/, {
        message:
          "Password must contain a combination of lowercase letters, numbers, and uppercase letters.",
      }),
  });
  const form = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: FormInput) => {
    //   await loginMutation(data);
    console.log(data);
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
          <div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PasswordField
                      id="password"
                      icon={
                        <LockOutlined
                          style={{ color: "rgba(0,0,0,.45)", marginRight: 5 }}
                          className="absolute top-3 left-3 z-10"
                        />
                      }
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className={styles.check_box_div}>
            <Link className={styles.forgot_pass} href={"/forgotpassword"}>
              Forgot Password?
            </Link>
          </div>

          <Button
            type="button"
            className="w-full"
            size={"lg"}
            onClick={form.handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </form>
      </Form>
    </>
  );
}
