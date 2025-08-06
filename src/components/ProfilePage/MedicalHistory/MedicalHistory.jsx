import React, { useState } from "react";
import { Typography, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import Card from "../../../assets/AntDesign/Card";
import Button from "../../../assets/AntDesign/Button";
import Input from "../../../assets/AntDesign/Input";

import "./MedicalHistory.css";

const { Title, Text } = Typography;

const MedicalHistory = () => {
  const [histories, setHistories] = useState([
    { id: 1, condition: "Heart Disease", relation: "Father" },
    { id: 2, condition: "Type1 Diabetes", relation: "Sister" },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newCondition, setNewCondition] = useState("");
  const [newRelation, setNewRelation] = useState("");

  const handleAddHistory = () => {
    if (newCondition && newRelation) {
      setHistories([
        ...histories,
        {
          id: histories.length + 1,
          condition: newCondition,
          relation: newRelation,
        },
      ]);
      setNewCondition("");
      setNewRelation("");
      setShowAddForm(false);
    }
  };

  return (
    <div className="medical-history-container">
      <Card className="medical-history-card">
        <div className="medical-history-header">
          <Title level={4} className="medical-history-title">
            <span className="medical-icon">🩺</span>
            Medical History
          </Title>
        </div>

        <Space direction="vertical" style={{ width: "100%" }} size="middle">
          {histories.map((history) => (
            <div key={history.id} className="history-item">
              <Text className="condition-text">{history.condition}</Text>
              <Text className="relation-text">{history.relation}</Text>
            </div>
          ))}

          {showAddForm && (
            <div className="add-form">
              <Space
                direction="vertical"
                style={{ width: "100%" }}
                size="small"
              >
                <Input
                  placeholder="Condition"
                  value={newCondition}
                  onChange={(e) => setNewCondition(e.target.value)}
                  className="form-input"
                />
                <Input
                  placeholder="Relation"
                  value={newRelation}
                  onChange={(e) => setNewRelation(e.target.value)}
                  className="form-input"
                />
                <Space>
                  <Button
                    type="primary"
                    size="small"
                    onClick={handleAddHistory}
                    className="add-btn"
                  >
                    Add
                  </Button>
                  <Button
                    size="small"
                    onClick={() => setShowAddForm(false)}
                    className="cancel-btn"
                  >
                    Cancel
                  </Button>
                </Space>
              </Space>
            </div>
          )}

          <Button
            type="text"
            icon={<PlusOutlined />}
            onClick={() => setShowAddForm(true)}
            className="add-history-btn"
          >
            Add history
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default MedicalHistory;
