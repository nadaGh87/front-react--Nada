import React from "react";
import { Typography } from "antd";
import MedicalHistory from "../../components/ProfilePage/MedicalHistory/MedicalHistory";

const { Title } = Typography;

const MedicalHistoryPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "100px", margin: "0 auto" }}>
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#1f2937",
          }}
        >
          Medical History Management
        </Title>
        <MedicalHistory />
      </div>
    </div>
  );
};

export default MedicalHistoryPage;
