import React from "react";
import styles from "./loginPage.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Header from "@/app/components/sections/core/header/header";
import LoginForm from "@/app/components/sections/loginForm";
import LoginFooter from "@/app/components/sections/core/loginFooter/footer";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
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
                      <h1>Login To Your Account</h1>
                    </div>
                    <div className={styles.top_field_sec}>
                      <a>New User?</a>
                      <Link
                        className="linkText"
                        href="https://veridoclogbook.com/#pricing"
                      >
                        Create an Account
                      </Link>
                    </div>

                    <LoginForm />
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
