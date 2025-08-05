import React, { useState } from 'react';
import { Radio } from 'antd';

const RadioGroup = ({ options = [] }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    console.log("Valeur sélectionnée :", e.target.value);
  };

  return (
    <Radio.Group onChange={handleChange} value={selectedValue}>
      {options.map((option) => (
        <Radio key={option.value} value={option.value}>
          {option.label}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default RadioGroup;
