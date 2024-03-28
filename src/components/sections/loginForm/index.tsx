"use client";

import Link from "next/link";
import styles from "./loginform.module.scss";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordField } from "@/components/ui/passwordfield";

export default function LoginForm() {
  return (
    <>
      <form action="" className="w-full gap-6 mb-2">
        <Input
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
          placeholder="Email"
          className="mb-3"
        />
        <PasswordField
          icon={
            <LockOutlined
              style={{ color: "rgba(0,0,0,.45)", marginRight: 5 }}
              className="absolute top-3 left-3 z-10"
            />
          }
          placeholder="Password"
        />

        <div className={styles.check_box_div}>
          <Link className={styles.forgot_pass} href={"/forgotpassword"}>
            Forgot Password?
          </Link>
        </div>

        <Button type="button" className="w-full" size={"lg"}>
          Login
        </Button>
      </form>
    </>
  );
}
