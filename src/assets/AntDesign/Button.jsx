import React from 'react';
import { Button as AntButton } from 'antd';

const Button = ({ children, ...props }) => {
  return (
    <AntButton {...props}>
      {children} {/* Le texte s'affiche ici */}
    </AntButton>
  );
}; 

export default Button;
