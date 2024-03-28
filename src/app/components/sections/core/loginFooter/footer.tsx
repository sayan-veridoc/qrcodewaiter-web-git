import React from "react";
import styles from "./loginFooter.module.scss";
import Image from "next/image";
import { FaEnvelope, FaFacebookF, FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import {
  FooterLinks,
  footerLinks,
} from "@/app/utils/constant/footerSocialIcon";

export default function LoginFooter() {
  function currentYear(): number {
    return new Date().getFullYear();
  }
  return (
    <footer>
      <div className={styles.footer}>
        <div className="container mx-auto">
          <div className="grid grid-cols-4 ">
            <div>
              <div className="mb-7">
                <a href="https://qrcodewaiter.com/">
                  <Image
                    src="/img/footerlogo.png"
                    alt="img"
                    className="max-w-full h-auto"
                    width={687}
                    height={200}
                  />
                </a>
              </div>
              <div className={styles.footer_social_icon}>
                <ul>
                  {footerLinks.map((link: FooterLinks, index: number) => (
                    <li key={index}>
                      <Link
                        target="_blank"
                        aria-label="Social"
                        href={link.url}
                        className="mr-2 no-underline"
                      >
                        <span>{React.createElement(link.icon)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className={`footer_heading ${styles.usefull_link}`}>
                <h3>Useful Links</h3>
                <ul>
                  <li className="nav-item">
                    <a href="https://veridoclogbook.com/feature-and-benefits">
                      Features and Benefits
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="https://veridoclogbook.com/faq">FAQs</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://veridoclogbook.com/blog">Blogs</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://veridoclogbook.com/contact">Contact Us</a>
                  </li>
                  <li className="nav-item">
                    <a href="https://veridoclogbook.com/privacy-policy">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className={`footer_heading ${styles.footerContact}`}>
                <h3>Contact Us</h3>
                <ul>
                  <li>
                    <a
                      href="https://tvdg.io/9AAAAA"
                      target="_blank"
                      className="flex text-white !items-center"
                    >
                      <span>
                        <FaLocationDot className={styles.footerIcon} />
                      </span>
                      <p className="font-medium">Australia</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:admin@qrcodewaiter.com"
                      className="flex text-white !items-center"
                    >
                      <span>
                        <FaEnvelope className={styles.footerIcon} />
                      </span>
                      <p className="mt-[6px] font-medium">
                        admin@qrcodewaiter.com
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="ml-auto">
              <a href="https://veridocglobal.com/" target="_blank">
                <Image
                  src="/img/AVeriDocGlobalProduct_Logo_White_250px.webp"
                  width={1076}
                  height={200}
                  className="max-w-[180px]"
                  alt="VeriDoc Global"
                  title="VeriDoc Global"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="text-white">
                © {currentYear()} | ALL RIGHTS RESERVED, VERIDOC GLOBAL PTY LTD
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
