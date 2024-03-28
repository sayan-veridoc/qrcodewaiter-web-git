import { IconType } from "react-icons";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export type FooterLinks = {
  url: string;
  icon: IconType;
};

export const footerLinks: FooterLinks[] = [
  {
    url: "https://facebook.com/VeriDocGlobal",
    icon: FaFacebookF,
  },
  {
    url: "https://instagram.com/VeriDocGlobal/",
    icon: FaInstagram,
  },
];
