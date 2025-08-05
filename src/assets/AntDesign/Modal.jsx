import React from "react";
import { Modal as AntModal } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const AntModalWrapper = ({
  open,
  onCancel,
  title,
  children,
  width = 600,
  centered = true,
  className = "",
}) => {
  return (
    <AntModal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered={centered}
      width={width}
      className={className}
      title={
        typeof title === "string" ? (
          <Title level={3} style={{ margin: 0 }}>
            {title}
          </Title>
        ) : (
          title
        )
      }
    >
      {children}
    </AntModal>
  );
};

export default AntModalWrapper;
