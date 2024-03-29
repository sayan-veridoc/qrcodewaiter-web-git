import React from "react";
import styles from "./forgetpassPage.module.scss";
import Image from "next/image";
import { Metadata } from "next";
import Header from "@/components/sections/core/header/header";
import LoginFooter from "@/components/sections/core/loginFooter/footer";
import ForgetpassForm from "@/components/sections/forgetPassForm";

export const metadata: Metadata = {
  title: "Forget Password",
};

export default function ForgetPassPage() {
  return (
    <>
      <Header />
      <main className="">
        <div className={styles.loginSection}>
          <div className="container mx-auto">
            <div className="grid grid-cols-2 content-center tab:grid-cols-none">
              <div className={styles.image}>
                <Image
                  src="/img/ForgetPassword.webp"
                  alt={"forgetpass"}
                  width={600}
                  height={600}
                  className="m-auto max-h-full h-auto"
                />
              </div>
              <div className="w-full md:py-0 my-auto">
                <div className={styles.loginDiv} id="login-div">
                  <div className={styles.loginForm} id="MainLoginForm">
                    <div className={styles.loginTitle}>
                      <h1>Password Recovery</h1>
                    </div>
                    <ForgetpassForm />
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
