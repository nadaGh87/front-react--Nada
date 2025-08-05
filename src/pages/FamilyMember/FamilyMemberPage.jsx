import React from "react";
import { Layout, Typography, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import FamilyMember from "../../components/ProfilePage/FamilyMember/FamilyMember";

const { Header, Content } = Layout;
const { Title } = Typography;

const FamilyMemberPage = () => {
  return (
    <Layout className="family-member-page-layout">
      <Header className="family-member-page-header">
        <Title level={2} className="page-title">
          <svg
            className="page-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Family Member Management
        </Title>
        <svg
          className="page-edit-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      </Header>

      <Content className="family-member-page-content">
        <div className="content-wrapper">
          <Breadcrumb className="page-breadcrumb">
            <Breadcrumb.Item>
              <HomeOutlined />
              <span>Home</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: "4px" }}
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>Profile</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Family Members</Breadcrumb.Item>
          </Breadcrumb>

          <div className="page-description">
            <Typography.Paragraph>
              View and manage your family members information and their
              profiles.
            </Typography.Paragraph>
          </div>

          <FamilyMember />
        </div>
      </Content>
    </Layout>
  );
};

export default FamilyMemberPage;
