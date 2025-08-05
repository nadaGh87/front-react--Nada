
import React from "react";
import { Checkbox as AntCheckbox } from "antd";

const Checkbox = ({ checked = false, onChange, disabled = false, className, style }) => {
  return (
    <AntCheckbox 
      checked={checked} 
      onChange={onChange} 
      disabled={disabled}
      className={className}
      style={style}
    />
  );
};

export default Checkbox;


// import React, { useState } from 'react';
// import { Checkbox } from 'antd';

// const CheckboxGroup = ({ options = [] }) => {
//   const [checkedValues, setCheckedValues] = useState([]);

//   const handleChange = (checkedValues) => {
//     setCheckedValues(checkedValues);
//     console.log('Valeurs cochées :', checkedValues);
//   };

//   return (
//     <Checkbox.Group options={options} value={checkedValues} onChange={handleChange} />
//   );
// };

// export default CheckboxGroup;
