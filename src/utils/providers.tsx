import { ConfigProvider } from "antd";
import theme from "./themeConfig";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider theme={theme}>
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
}
