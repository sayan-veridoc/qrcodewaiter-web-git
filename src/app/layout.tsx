import type { Metadata } from "next";

import "./globals.scss";
import { Providers } from "./utils/providers";

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
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
