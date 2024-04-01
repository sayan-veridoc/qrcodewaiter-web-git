import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.scss";
import { Providers } from "@/utils/providers";

export const metadata: Metadata = {
  title: {
    template: "%s | QR Code Waiter",
    default: "QR Code Waiter",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body>
        <Providers>{children}</Providers>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            className: "toast",
          }}
        />
      </body>
    </html>
  );
}
