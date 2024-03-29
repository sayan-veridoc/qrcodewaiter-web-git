"use client";
import { LockOutlined } from "@ant-design/icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PasswordField } from "@/components/ui/passwordfield";
import { ZodType, isValid, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import PasswordValidation from "@/utils/PasswordValidation";

type FormInput = {
  new_password: string;
  confirm_password: string;
};
export default function ConfirmPassForm() {
  const schema: ZodType<FormInput> = z
    .object({
      new_password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must have more than 8 characters")
        .regex(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,16}$/, {
          message:
            "Password must contain a combination of lowercase letters, numbers, and uppercase letters.",
        }),
      confirm_password: z.string().min(1, "Password confirmation is required"),
    })
    .refine((data) => data.new_password === data.confirm_password, {
      message: "Password do not match",
      path: ["confirm_password"],
    });

  const form = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });

  const [new_password, setNew_password] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  const [isValidationVisible, setValidationVisibility] = useState(false);

  const onChangePassword = () => {
    setValidationVisibility(true);
    setNew_password(form.getValues("new_password"));
  };

  const onChangeConfirmPassword = () => {
    setValidationVisibility(true);
    setConfirm_password(form.getValues("confirm_password"));
  };

  const handlePasswordValid = (isValid: boolean) => {
    if (!!form.formState.errors.new_password) return;
    setIsPasswordValid(isValid);
  };
  const handleConfirmPasswordValid = (isValid: boolean) => {
    if (!!form.formState.errors.confirm_password) return;
    setIsConfirmPasswordValid(isValid);
  };
  const onSubmit = (data: FormInput) => {
    if (!isPasswordValid || !isConfirmPasswordValid) return;
    console.log(data);
  };
  return (
    <>
      <Form {...form}>
        <form className="w-full mb-2">
          <div className="mb-4">
            <FormField
              control={form.control}
              name="new_password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PasswordField
                      onKeyUp={onChangePassword}
                      icon={
                        <LockOutlined
                          style={{ color: "rgba(0,0,0,.45)", marginRight: 5 }}
                          className="absolute top-3 left-3 z-10"
                        />
                      }
                      {...field}
                      placeholder="Password"
                    />
                  </FormControl>
                  {/* <FormMessage /> */}
                  {isValidationVisible && (
                    <PasswordValidation
                      type="password"
                      value={new_password}
                      handleValidation={handlePasswordValid}
                    />
                  )}
                </FormItem>
              )}
            />
          </div>
          <div className="mb-4">
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PasswordField
                      onKeyUp={onChangeConfirmPassword}
                      icon={
                        <LockOutlined
                          style={{ color: "rgba(0,0,0,.45)", marginRight: 5 }}
                          className="absolute top-3 left-3 z-10"
                        />
                      }
                      placeholder="Confirm Password"
                      disabled={!isPasswordValid}
                      {...field}
                    />
                  </FormControl>

                  {isValidationVisible && isPasswordValid && (
                    <PasswordValidation
                      type="confirmPassword"
                      value={confirm_password}
                      valueAgain={new_password}
                      handleValidation={handleConfirmPasswordValid}
                    />
                  )}
                </FormItem>
              )}
            />
          </div>

          <Button
            type="button"
            className="w-full mt-4"
            size={"lg"}
            onClick={form.handleSubmit(onSubmit)}
          >
            Save Password
          </Button>
        </form>
      </Form>

      {/* <form action="" className="w-full gap-6 mb-2">
        <PasswordField
          icon={
            <LockOutlined
              style={{ color: "rgba(0,0,0,.45)", marginRight: 5 }}
              className="absolute top-3 left-3 z-10"
            />
          }
          placeholder="Confirm Password"
          disabled
        />

        <Button type="button" className="w-full mt-4" size={"lg"}>
          Save Password
        </Button>
      </form> */}
    </>
  );
}
