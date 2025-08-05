import React from 'react';
import { Switch as AntSwitch } from 'antd';

const onChange = checked => {
  console.log(`switch to ${checked}`);
};

const Switch = () => 
<AntSwitch defaultChecked onChange={onChange} />;
export default Switch;