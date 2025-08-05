// src/assets/AntDesign/Avatar.jsx
import React from "react";
import { Avatar as AntAvatar } from "antd";

const Avatar = ({ children, ...props }) => {
  return <AntAvatar {...props}>{children}</AntAvatar>;
};

export default Avatar;
