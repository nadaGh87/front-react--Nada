import React, { useState } from "react";
import "./PersonalHistory.css";

const PersonalHistory = () => {
  const [familyHistory, setFamilyHistory] = useState([
    {
      id: 1,
      type: "Smoking Status",
      value: "Current Smoker (5 per day)",
      status: "current",
    },
    {
      id: 2,
      type: "Alcohol",
      value: "Occasional",
      status: "occasional",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newHistory, setNewHistory] = useState({
    type: "",
    value: "",
  });

  const handleAddHistory = () => {
    if (newHistory.type && newHistory.value) {
      setFamilyHistory([
        ...familyHistory,
        {
          id: Date.now(),
          type: newHistory.type,
          value: newHistory.value,
          status: "normal",
        },
      ]);
      setNewHistory({ type: "", value: "" });
      setShowAddForm(false);
    }
  };

  const handleRemoveHistory = (id) => {
    setFamilyHistory(familyHistory.filter((item) => item.id !== id));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "current":
        return "#ff6b6b";
      case "occasional":
        return "#4dabf7";
      case "normal":
        return "#51cf66";
      default:
        return "#868e96";
    }
  };

  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case "smoking status":
        return "🚬";
      case "alcohol":
        return "🍷";
      case "diabetes":
        return "🩺";
      case "heart disease":
        return "❤️";
      default:
        return "📋";
    }
  };

  return (
    <div className="family-history-container">
      <h2 className="family-history-title">Personal History</h2>

      <div className="history-list">
        {familyHistory.map((item) => (
          <div key={item.id} className="history-item">
            <span className="history-icon">{getIcon(item.type)}</span>
            <div className="history-content">
              <span className="history-type">{item.type}</span>
              <span
                className="history-value"
                style={{ color: getStatusColor(item.status) }}
              >
                {item.value}
              </span>
            </div>
            <button
              className="remove-btn"
              onClick={() => handleRemoveHistory(item.id)}
              title="Remove"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {!showAddForm ? (
        <button
          className="add-history-btn"
          onClick={() => setShowAddForm(true)}
        >
          + Add history
        </button>
      ) : (
        <div className="add-history-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="History type (e.g., Diabetes, Heart Disease)"
              value={newHistory.type}
              onChange={(e) =>
                setNewHistory({ ...newHistory, type: e.target.value })
              }
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Status/Value (e.g., Type 2, Family History)"
              value={newHistory.value}
              onChange={(e) =>
                setNewHistory({ ...newHistory, value: e.target.value })
              }
              className="form-input"
            />
          </div>
          <div className="form-actions">
            <button className="save-btn" onClick={handleAddHistory}>
              Save
            </button>
            <button
              className="cancel-btn"
              onClick={() => setShowAddForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalHistory;
