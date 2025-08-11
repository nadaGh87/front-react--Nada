import React, { useState } from "react";
import { Checkbox, Select, Button, Typography, Space, Row, Col } from "antd";
import {
  PlusCircleOutlined,
  CloseSquareOutlined,
  ClockCircleOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import "./availability.css";

const { Title } = Typography;
const { Option } = Select;

const Availability = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [availability, setAvailability] = useState({
    Monday: {
      enabled: true,
      slots: [
        { from: "09:00", to: "12:00" },
        { from: "14:00", to: "18:00" },
      ],
    },
    Tuesday: {
      enabled: true,
      slots: [
        { from: "09:00", to: "12:00" },
        { from: "14:00", to: "18:00" },
      ],
    },
    Wednesday: {
      enabled: true,
      slots: [
        { from: "09:00", to: "12:00" },
        { from: "14:00", to: "18:00" },
      ],
    },
    Thursday: {
      enabled: true,
      slots: [
        { from: "09:00", to: "12:00" },
        { from: "14:00", to: "18:00" },
      ],
    },
    Friday: {
      enabled: true,
      slots: [
        { from: "09:00", to: "12:00" },
        { from: "14:00", to: "18:00" },
      ],
    },
    Saturday: { enabled: false, slots: [] },
    Sunday: { enabled: false, slots: [] },
  });

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        times.push(timeString);
      }
    }
    return times;
  };

  const timeOptions = generateTimeOptions();

  const handleDayToggle = (day, checked) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        enabled: checked,
        slots: checked
          ? prev[day].slots.length === 0
            ? [{ from: "09:00", to: "17:00" }]
            : prev[day].slots
          : [],
      },
    }));
  };

  const handleTimeChange = (day, slotIndex, type, value) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: prev[day].slots.map((slot, index) =>
          index === slotIndex ? { ...slot, [type]: value } : slot
        ),
      },
    }));
  };

  const addTimeSlot = (day) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: [...prev[day].slots, { from: "09:00", to: "17:00" }],
      },
    }));
  };

  const removeTimeSlot = (day, slotIndex) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: prev[day].slots.filter((_, index) => index !== slotIndex),
      },
    }));
  };

  return (
    <div className="availability-container">
      <div className="availability-header">
        <Title level={3}>Availability</Title>
        <p className="availability-subtitle">
          Complete Availability Management - Dr. Ryan Azhari
        </p>
      </div>

      <div className="availability-content">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-container">
            <div className="day-header">
              <Checkbox
                checked={availability[day].enabled}
                onChange={(e) => handleDayToggle(day, e.target.checked)}
                className="day-checkbox"
              >
                <span className="day-title">{day}</span>
              </Checkbox>
            </div>

            <div className="day-content">
              {availability[day].enabled ? (
                <div className="time-slots">
                  {availability[day].slots.map((slot, index) => (
                    <div key={index} className="time-slot">
                      <div className="time-inputs">
                        <ClockCircleOutlined className="clock-icon" />
                        <span className="from-label">From</span>
                        <Select
                          value={slot.from}
                          onChange={(value) =>
                            handleTimeChange(day, index, "from", value)
                          }
                          className="time-select"
                          suffixIcon={
                            <CheckOutlined style={{ color: "#000000" }} />
                          }
                        >
                          {timeOptions.map((time) => (
                            <Option key={time} value={time}>
                              {time}
                            </Option>
                          ))}
                        </Select>
                        <span className="to-label">to</span>
                        <Select
                          value={slot.to}
                          onChange={(value) =>
                            handleTimeChange(day, index, "to", value)
                          }
                          className="time-select"
                          suffixIcon={
                            <CheckOutlined style={{ color: "#000000" }} />
                          }
                        >
                          {timeOptions.map((time) => (
                            <Option key={time} value={time}>
                              {time}
                            </Option>
                          ))}
                        </Select>
                      </div>
                      <div className="slot-actions">
                        <Button
                          type="text"
                          icon={<CloseSquareOutlined />}
                          onClick={() => removeTimeSlot(day, index)}
                          className="remove-slot-btn"
                          size="small"
                        />
                        <Button
                          type="text"
                          icon={<PlusCircleOutlined />}
                          onClick={() => addTimeSlot(day)}
                          className="add-slot-btn"
                          size="small"
                        />
                      </div>
                    </div>
                  ))}

                  {availability[day].slots.length === 0 && (
                    <div className="time-slot">
                      <div className="time-inputs">
                        <ClockCircleOutlined className="clock-icon" />
                        <span className="from-label">From</span>
                        <Select
                          defaultValue="09:00"
                          onChange={(value) => {
                            setAvailability((prev) => ({
                              ...prev,
                              [day]: {
                                ...prev[day],
                                slots: [{ from: value, to: "17:00" }],
                              },
                            }));
                          }}
                          className="time-select"
                          suffixIcon={
                            <CheckOutlined style={{ color: "#3b82f6" }} />
                          }
                        >
                          {timeOptions.map((time) => (
                            <Option key={time} value={time}>
                              {time}
                            </Option>
                          ))}
                        </Select>
                        <span className="to-label">to</span>
                        <Select
                          defaultValue="17:00"
                          onChange={(value) => {
                            setAvailability((prev) => ({
                              ...prev,
                              [day]: {
                                ...prev[day],
                                slots: [
                                  {
                                    from: prev[day].slots[0]?.from || "09:00",
                                    to: value,
                                  },
                                ],
                              },
                            }));
                          }}
                          className="time-select"
                          suffixIcon={
                            <CheckOutlined style={{ color: "#3b82f6" }} />
                          }
                        >
                          {timeOptions.map((time) => (
                            <Option key={time} value={time}>
                              {time}
                            </Option>
                          ))}
                        </Select>
                      </div>
                      <div className="slot-actions">
                        <Button
                          type="text"
                          icon={<CloseSquareOutlined />}
                          onClick={() => handleDayToggle(day, false)}
                          className="remove-slot-btn"
                          size="small"
                        />
                        <Button
                          type="text"
                          icon={<PlusCircleOutlined />}
                          onClick={() => addTimeSlot(day)}
                          className="add-slot-btn"
                          size="small"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="unavailable-slot">
                  <ClockCircleOutlined className="clock-icon disabled" />
                  <span className="unavailable-text">
                    Not available on this day
                  </span>
                  <div className="slot-actions">
                    <Button
                      type="text"
                      icon={<CloseSquareOutlined />}
                      className="remove-slot-btn disabled"
                      size="small"
                      disabled
                    />
                    <Button
                      type="text"
                      icon={<PlusCircleOutlined />}
                      onClick={() => handleDayToggle(day, true)}
                      className="add-slot-btn"
                      size="small"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Availability;
