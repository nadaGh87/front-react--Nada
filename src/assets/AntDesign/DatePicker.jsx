import { DatePicker } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

<DatePicker
  className="form-input"
  value={formData.dateOfBirth ? dayjs(formData.dateOfBirth) : null}
  onChange={(date, dateString) => handleInputChange("dateOfBirth", dateString)}
  format="YYYY-MM-DD"
  placeholder="Select date"
  suffixIcon={<CalendarOutlined />}
/>;
