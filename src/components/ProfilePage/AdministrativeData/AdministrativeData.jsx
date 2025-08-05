import React, { useState } from "react";
import { Typography } from "antd";
import Card from "../../../assets/AntDesign/Card";
import Input from "../../../assets/AntDesign/Input";
import "./AdministrativeData.css";

const { Title, Text } = Typography;

const AdministrativeData = () => {
  const [administrativeInfo, setAdministrativeInfo] = useState([
    {
      id: 1,
      label: "Social Security Number",
      value: "XXX-XX-1234",
    },
    {
      id: 2,
      label: "Health Insurance",
      value: "Blue Cross Blue Shield",
    },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const handleValueClick = (item) => {
    setEditingId(item.id);
    setTempValue(item.value);
  };

  const handleInputChange = (e) => {
    setTempValue(e.target.value);
  };

  const handleInputBlur = () => {
    setAdministrativeInfo((prev) =>
      prev.map((item) =>
        item.id === editingId ? { ...item, value: tempValue } : item
      )
    );
    setEditingId(null);
    setTempValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
    if (e.key === "Escape") {
      setEditingId(null);
      setTempValue("");
    }
  };

  const cardTitle = (
    <div className="administrative-header">
      <svg
        className="administrative-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
      <span className="administrative-title">Administrative Data</span>
      <svg
        className="edit-icon"
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
        <path d="M18.5 2.5a2.121 2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    </div>
  );

  return (
    <div className="administrative-container">
      <Card
        title={cardTitle}
        style={{
          background: "#f5fff5",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
          border: "1px solid #e0f0e0",
          minHeight: "300px",
        }}
      >
        <div className="data-list">
          {administrativeInfo.map((item) => (
            <div key={item.id} className="data-item">
              <Text className="data-label">{item.label}</Text>
              {editingId === item.id ? (
                <Input
                  value={tempValue}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  onKeyDown={handleInputKeyDown}
                  autoFocus
                  className="editable-input"
                  style={{
                    border: "none",
                    padding: 0,
                    background: "transparent",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#1f2937",
                    lineHeight: "1.3",
                    boxShadow: "none",
                  }}
                />
              ) : (
                <Text
                  className="data-value editable-value"
                  onClick={() => handleValueClick(item)}
                >
                  {item.value}
                </Text>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AdministrativeData;
