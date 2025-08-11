import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [selectedDates, setSelectedDates] = useState([11]);
  const [showYearMonthPicker, setShowYearMonthPicker] = useState(false);
  const [showManageSlots, setShowManageSlots] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedMonth, setSelectedMonth] = useState("April");
  const [yearRange, setYearRange] = useState("1990-2013");
  const [timeSlots, setTimeSlots] = useState([{ from: "09:00", to: "09:00" }]);

  const currentMonth = `${selectedMonth} ${selectedYear}`;

  const years = {
    "1990-2013": Array.from({ length: 24 }, (_, i) => 1990 + i),
    "2014-2037": Array.from({ length: 24 }, (_, i) => 2014 + i),
    "2038-2061": Array.from({ length: 24 }, (_, i) => 2038 + i),
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const timeOptions = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];

  // Generate calendar days for the selected month/year
  const generateCalendarDays = () => {
    const days = [];

    // For April 2025 specifically (matching the original)
    if (selectedMonth === "April" && selectedYear === 2025) {
      // Empty cells for days before April 1st (April 1st is on Tuesday)
      for (let i = 0; i < 2; i++) {
        days.push(null);
      }

      // April days (1-30)
      for (let day = 1; day <= 30; day++) {
        days.push(day);
      }

      // Next month days to fill the grid
      for (let day = 1; day <= 4; day++) {
        days.push({ nextMonth: day });
      }
    } else {
      // Generic calendar generation for other months
      const firstDay = new Date(
        selectedYear,
        months.indexOf(selectedMonth),
        1
      ).getDay();
      const daysInMonth = new Date(
        selectedYear,
        months.indexOf(selectedMonth) + 1,
        0
      ).getDate();

      // Empty cells before first day
      for (let i = 0; i < firstDay; i++) {
        days.push(null);
      }

      // Days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        days.push(day);
      }

      // Next month days to fill grid
      const remainingCells = 42 - (firstDay + daysInMonth);
      for (let day = 1; day <= Math.min(remainingCells, 14); day++) {
        days.push({ nextMonth: day });
      }
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  const handleDateClick = (day) => {
    if (day && typeof day === "number") {
      setSelectedDates((prev) => {
        if (prev.includes(day)) {
          return prev.filter((d) => d !== day);
        } else {
          return [...prev, day];
        }
      });
    }
  };

  const handleMonthYearClick = () => {
    setShowYearMonthPicker(true);
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
    setShowYearMonthPicker(false);
  };

  const handlePrevYearRange = () => {
    const ranges = Object.keys(years);
    const currentIndex = ranges.indexOf(yearRange);
    if (currentIndex > 0) {
      setYearRange(ranges[currentIndex - 1]);
    }
  };

  const handleNextYearRange = () => {
    const ranges = Object.keys(years);
    const currentIndex = ranges.indexOf(yearRange);
    if (currentIndex < ranges.length - 1) {
      setYearRange(ranges[currentIndex + 1]);
    }
  };

  const handleManageSlotsClick = () => {
    setShowManageSlots(true);
  };

  const handleBackToCalendar = () => {
    setShowYearMonthPicker(false);
    setShowManageSlots(false);
  };

  const addTimeSlot = () => {
    setTimeSlots((prev) => [...prev, { from: "09:00", to: "09:00" }]);
  };

  const removeTimeSlot = (index) => {
    setTimeSlots((prev) => prev.filter((_, i) => i !== index));
  };

  const updateTimeSlot = (index, field, value) => {
    setTimeSlots((prev) =>
      prev.map((slot, i) => (i === index ? { ...slot, [field]: value } : slot))
    );
  };

  const getFormattedDate = () => {
    if (selectedDates.length === 1) {
      const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const date = new Date(
        selectedYear,
        months.indexOf(selectedMonth),
        selectedDates[0]
      );
      const dayName = dayNames[date.getDay()];
      return `${dayName} le ${selectedDates[0]} ${selectedMonth} ${selectedYear}`;
    }
    return `${selectedDates.length} dates selected`;
  };

  // Manage Slots View
  if (showManageSlots) {
    return (
      <div className="calendar-container">
        <div className="manage-slots-container">
          <div className="calendar-grid">
            {/* Mini Calendar */}
            <div className="weekdays-header">
              {weekDays.map((day, index) => (
                <div key={index} className="weekday">
                  {day}
                </div>
              ))}
            </div>

            <div className="days-grid">
              {calendarDays.map((day, index) => {
                const isSelected = selectedDates.includes(day);
                const isNextMonth =
                  day && typeof day === "object" && day.nextMonth;
                const dayNumber = isNextMonth ? day.nextMonth : day;

                return (
                  <button
                    key={index}
                    onClick={() => handleDateClick(day)}
                    className={`
                      day-button
                      ${!day ? "invisible" : ""}
                      ${isSelected ? "selected" : ""}
                      ${isNextMonth ? "next-month" : ""}
                    `}
                    disabled={!day}
                  >
                    {dayNumber}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Date Display */}
          <div className="selected-date-display">{getFormattedDate()}</div>

          {/* Time Slots */}
          <div className="time-slots-container">
            {timeSlots.map((slot, index) => (
              <div key={index} className="time-slot-row">
                <div className="time-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 6v6l4 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="time-inputs">
                  <span className="from-label">From</span>
                  <select
                    value={slot.from}
                    onChange={(e) =>
                      updateTimeSlot(index, "from", e.target.value)
                    }
                    className="time-select"
                  >
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>

                  <span className="to-label">to</span>
                  <select
                    value={slot.to}
                    onChange={(e) =>
                      updateTimeSlot(index, "to", e.target.value)
                    }
                    className="time-select"
                  >
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="slot-actions">
                  <button
                    onClick={() => removeTimeSlot(index)}
                    className="remove-slot-btn"
                    disabled={timeSlots.length === 1}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18 6L6 18M6 6l12 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button onClick={addTimeSlot} className="add-slot-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="slots-action-buttons">
            <button onClick={handleBackToCalendar} className="cancel-btn">
              Cancel
            </button>
            <button className="save-btn">Save</button>
          </div>
        </div>
      </div>
    );
  }

  // Year/Month Picker View
  if (showYearMonthPicker) {
    return (
      <div className="calendar-container">
        <div className="year-month-picker">
          <h2 className="picker-title">Select Year & Month</h2>

          <div className="year-range-nav">
            <button onClick={handlePrevYearRange} className="range-nav-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="year-range">{yearRange}</span>
            <button onClick={handleNextYearRange} className="range-nav-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="years-grid">
            {years[yearRange].map((year) => (
              <button
                key={year}
                onClick={() => handleYearClick(year)}
                className={`year-button ${
                  year === selectedYear ? "selected" : ""
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="months-grid">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => handleMonthClick(month)}
                className={`month-button ${
                  month === selectedMonth ? "selected" : ""
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Main Calendar View
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2 className="calendar-title">Select Date</h2>

        <div className="month-navigation">
          <div className="month-selector" onClick={handleMonthYearClick}>
            <span className="current-month">{currentMonth}</span>
            <svg
              className="dropdown-arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="nav-arrows">
            <button className="nav-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="nav-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="weekdays-header">
          {weekDays.map((day, index) => (
            <div key={index} className="weekday">
              {day}
            </div>
          ))}
        </div>

        <div className="days-grid">
          {calendarDays.map((day, index) => {
            const isSelected = selectedDates.includes(day);
            const isNextMonth = day && typeof day === "object" && day.nextMonth;
            const dayNumber = isNextMonth ? day.nextMonth : day;

            return (
              <button
                key={index}
                onClick={() => handleDateClick(day)}
                className={`
                  day-button
                  ${!day ? "invisible" : ""}
                  ${isSelected ? "selected" : ""}
                  ${isNextMonth ? "next-month" : ""}
                `}
                disabled={!day}
              >
                {dayNumber}
              </button>
            );
          })}
        </div>
      </div>

      <div className="action-buttons">
        <button className="manage-slots-btn" onClick={handleManageSlotsClick}>
          Manage Slots
        </button>
        <button className="block-date-btn">Block date</button>
      </div>
    </div>
  );
};

export default Calendar;
