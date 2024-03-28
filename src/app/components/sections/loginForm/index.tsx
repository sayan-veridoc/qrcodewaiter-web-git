"use client";

import Link from "next/link";
import styles from "./loginform.module.scss";
import { Button, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <>
      <form action="" className="w-full gap-6 mb-2">
        <Input
          size="large"
          placeholder="Email"
          type="email"
          className="mb-4"
          prefix={
            <MailOutlined
              style={{ color: "rgba(0,0,0,.45)", marginRight: 5 }}
            />
          }
        />
        <Input.Password
          size="large"
          placeholder="Password"
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
          prefix={
            <LockOutlined
              style={{ color: "rgba(0,0,0,.45)", marginRight: 5 }}
            />
          }
        />
        <div className={styles.check_box_div}>
          <Link className={styles.forgot_pass} href={"/forgotpassword"}>
            Forgot Password?
          </Link>
        </div>
        <Button type="primary" block size="large" loading>
          Login
        </Button>
      </form>
    </>
  );
}
