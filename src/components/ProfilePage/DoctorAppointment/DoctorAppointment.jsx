// components/DoctorAppointment/DoctorAppointment.jsx
import React, { useState } from "react";
import { Table, Input, Select, Tag, Avatar, Space, Typography } from "antd";
import {
  FormOutlined,
  DeleteOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { appointmentsData } from "../../../Data/appointmentsData";
import Button from "../../../assets/AntDesign/Button";
import Card from "../../../assets/AntDesign/Card";
import CustomInput from "../../../assets/AntDesign/Input";
import "./DoctorAppointment.css";

const { Search } = Input;
const { Option } = Select;
const { Title } = Typography;

const DoctorAppointment = () => {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "green";
      case "Pending":
        return "orange";
      case "Canceled":
        return "red";
      default:
        return "default";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Confirmed":
        return "✓";
      case "Pending":
        return "⏳";
      case "Canceled":
        return "✕";
      default:
        return "";
    }
  };

  const columns = [
    {
      title: "Date & Time",
      dataIndex: "date",
      key: "datetime",
      render: (date, record) => (
        <div className="datetime-cell">
          <div className="date">{date}</div>
          <div className="time">{record.time}</div>
        </div>
      ),
      width: 120,
    },
    {
      title: "Patient",
      dataIndex: "patient",
      key: "patient",
      render: (patient) => (
        <div className="patient-cell">
          <Avatar
            src={patient.avatar}
            icon={<UserOutlined />}
            size={32}
            className="patient-avatar"
          />
          <span className="patient-name">{patient.name}</span>
        </div>
      ),
      width: 200,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 180,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={getStatusColor(status)} className="status-tag">
          {getStatusIcon(status)} {status}
        </Tag>
      ),
      width: 120,
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="small">
          {record.status === "Pending" && (
            <Button
              type="text"
              icon={<span style={{ fontSize: "12px" }}>✓</span>}
              className="action-btn confirm-btn"
              size="small"
              title="Confirm appointment"
            />
          )}
          <Button
            type="text"
            icon={<FormOutlined />}
            className="action-btn edit-btn"
            size="small"
          />
          <Button
            type="text"
            icon={<DeleteOutlined />}
            className="action-btn delete-btn"
            size="small"
          />
        </Space>
      ),
      width: (record) => (record.status === "Pending" ? 130 : 100),
    },
  ];

  const filteredData = appointmentsData.filter((appointment) => {
    const matchesSearch = appointment.patient.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesStatus =
      statusFilter === "All Statuses" || appointment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  // Reset to first page when filters change
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusFilterChange = (value) => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  return (
    <div className="doctor-appointment-container">
      <Card
        className="appointment-card"
        style={{
          width: "100%",
          maxWidth: "none",
          height: "fit-content",
          minHeight: "auto",
        }}
      >
        <div className="card-content-wrapper">
          <div className="header-section">
            <Title level={4} className="page-title">
              List of Appointments
            </Title>

            <div className="controls-section">
              <Search
                placeholder="Search patient..."
                value={searchText}
                onChange={handleSearchChange}
                className="search-input"
                prefix={<SearchOutlined />}
                allowClear
              />

              <Select
                value={statusFilter}
                onChange={handleStatusFilterChange}
                className="status-filter"
              >
                <Option value="All Statuses">All Statuses</Option>
                <Option value="Confirmed">Confirmed</Option>
                <Option value="Pending">Pending</Option>
                <Option value="Canceled">Canceled</Option>
              </Select>
            </div>
          </div>

          <Table
            columns={columns}
            dataSource={filteredData}
            pagination={{
              current: currentPage,
              total: filteredData.length,
              pageSize: pageSize,
              showSizeChanger: false,
              showQuickJumper: false,
              hideOnSinglePage: false,
              showTotal: (total, range) =>
                `Displaying results ${range[0]} to ${range[1]} of ${total}`,
              className: "custom-pagination",
              onChange: handlePageChange,
              showLessItems: true,
              simple: false,
              size: "default",
              itemRender: (current, type, originalElement) => {
                if (type === "prev") {
                  return <span>Previous</span>;
                }
                if (type === "next") {
                  return <span>Next</span>;
                }
                return originalElement;
              },
            }}
            className="appointments-table"
            size="small"
          />
        </div>
      </Card>
    </div>
  );
};

export default DoctorAppointment;
