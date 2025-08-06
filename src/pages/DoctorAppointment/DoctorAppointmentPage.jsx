import React from "react";
import { Layout } from "antd";
import DoctorAppointment from "../../components/ProfilePage/DoctorAppointment/DoctorAppointment";

const { Content } = Layout;

const DoctorAppointmentPage = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Content
        style={{
          padding: 0,
          margin: 0,
          background: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DoctorAppointment />
      </Content>
    </Layout>
  );
};

export default DoctorAppointmentPage;
