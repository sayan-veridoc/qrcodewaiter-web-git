import Image from "next/image";
import React from "react";
import styles from "./loginHeader.module.scss";

export default function Header() {
  return (
    <header>
      <nav className={styles.header}>
        <div className="login-nav">
          <a href="https://veridoclogbook.com" target="_blank">
            <Image
              src="/img/footerlogo.png"
              alt="img"
              className={styles.loginLogo}
              width={1076}
              height={200}
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
