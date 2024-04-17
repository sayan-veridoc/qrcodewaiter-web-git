import { ConfigProvider } from "antd";
import theme from "./themeConfig";
import { AntProviders } from "./antProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider theme={theme}>
      <AntProviders>{children}</AntProviders>
    </ConfigProvider>
  );
}
