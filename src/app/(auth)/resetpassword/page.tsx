import React from "react";
import styles from "./resetPass.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Header from "@/components/sections/core/header/header";
import LoginForm from "@/components/sections/loginForm";
import LoginFooter from "@/components/sections/core/loginFooter/footer";
import ConfirmPassForm from "@/components/sections/confirmPassForm";

export const metadata: Metadata = {
  title: "Reset Password",
};

export default function ResetPassword() {
  return (
    <>
      <Header />
      <main className="">
        <div className={styles.loginSection}>
          <div className="container mx-auto">
            <div className="grid grid-cols-2 content-center tab:grid-cols-none">
              <div className={styles.image}>
                <Image
                  src="/img/login-page-image.webp"
                  alt={""}
                  width={600}
                  height={600}
                  className="m-auto max-h-full h-auto"
                />
              </div>
              <div className="w-full md:py-0 my-auto">
                <div className={styles.loginDiv} id="login-div">
                  <div className={styles.loginForm} id="MainLoginForm">
                    <div className={styles.loginTitle}>
                      <h1>Create New Password</h1>
                    </div>

                    <ConfirmPassForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <LoginFooter />
    </>
  );
}
