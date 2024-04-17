// app/providers.tsx
"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

export function AntProviders({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#e21d34",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
