import React from "react";
import { Layout, Typography, Breadcrumb } from "antd";
import { HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import Emergency from "../../components/ProfilePage/EmergencyContacts/EmergencyContact";

const { Header, Content } = Layout;
const { Title } = Typography;

const EmergencyPage = () => {
  return (
    <Layout className="emergency-page-layout">
      <Header className="emergency-page-header">
        <Title level={2} className="page-title">
          <PhoneOutlined className="page-icon" />
          Contacts Management
        </Title>
      </Header>

      <Content className="emergency-page-content">
        <div className="content-wrapper">
          <Breadcrumb className="page-breadcrumb">
            <Breadcrumb.Item>
              <HomeOutlined />
              <span>Home</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <PhoneOutlined />
              <span>Contacts</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Emergency Contacts</Breadcrumb.Item>
          </Breadcrumb>

          <div className="page-description">
            <Typography.Paragraph>
              Manage your emergency contacts here. These contacts will be easily
              accessible during urgent situations.
            </Typography.Paragraph>
          </div>

          <Emergency />
        </div>
      </Content>
    </Layout>
  );
};

export default EmergencyPage;
