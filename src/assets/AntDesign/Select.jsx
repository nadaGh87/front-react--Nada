import React from 'react';
import { Select as AntSelect } from 'antd';

const CustomSelect = ({
  options = [],
  width = '100%',
  placeholder = "Sélectionnez...",
  onChange,
  ...restProps
}) => {
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
    onChange?.(value); 
  };

  return (
    <AntSelect
      style={{ width }}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

export default CustomSelect;