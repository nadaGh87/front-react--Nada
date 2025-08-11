import React from "react";
import { ConfigProvider } from "antd";
import Calendar from "../../components/ProfilePage/Availibility/Calendar";
import "antd/dist/reset.css"; // Import Ant Design styles

// Custom theme configuration for Ant Design
const theme = {
  token: {
    colorPrimary: "#1890ff",
    borderRadius: 6,
    fontSize: 14,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  components: {
    Modal: {
      borderRadius: 12,
      headerBg: "#ffffff",
    },
    Button: {
      borderRadius: 6,
      controlHeight: 36,
    },
    TimePicker: {
      borderRadius: 6,
      controlHeight: 32,
    },
  },
};

const CalendarPage = () => {
  return (
    <ConfigProvider theme={theme}>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
          padding: "40px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#262626",
              fontSize: "24px",
              fontWeight: "600",
              marginBottom: "32px",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            Calendar Scheduler
          </h1>
          <Calendar />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default CalendarPage;
