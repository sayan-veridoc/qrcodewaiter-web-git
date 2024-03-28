"use client";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingFilled,
  UserOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Button, theme, Typography, Image } from "antd";
const { Title } = Typography;
import { Footer } from "antd/es/layout/layout";

const { Header, Sider, Content } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} width={230}>
        <div className="demo-logo-vertical" />

        <Image
          src={collapsed ? "/img/logos.svg" : "/img/footerlogo.png"}
          alt="logo"
          className="max-w-full h-auto p-5"
          preview={false}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <SettingFilled />,
              label: "Select Website Template",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "18px",
              fontWeight: 600,
              width: 70,
              height: 70,
              color: "white",
            }}
          >
            Account Settings
          </Button>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "calc(100vh - 181px)",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
        <Footer style={{ textAlign: "center" }}>
          115 Brighton Rd, QLD 4017, Sandgate, Australia. QR Code Waiter ©{" "}
          {new Date().getFullYear()} All Rights Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
