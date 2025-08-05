// src/assets/AntDesign/Card.jsx
import React from "react";
import { Card as AntCard, Space } from "antd";
import Button from "./Button";
import Rate from "./Rate";

const Card = ({
  title,
  href,
  linkText,
  children,
  image,
  buttonText,
  onButtonClick,
  rating,
  onRatingChange,
  style,
  className,
}) => {
  return (
    <Space direction="vertical" size={16} style={{ width: "100%" }}>
      <AntCard
        className={className}
        title={title}
        extra={linkText && href ? <a href={href}>{linkText}</a> : null}
        style={{ width: "100%", maxWidth: 480, ...style }}
      >
        <div style={{ display: "flex", gap: 16 }}>
          {image && (
            <img
              src={image}
              alt="illustration"
              style={{
                width: 100,
                height: 100,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          )}

          <div style={{ flex: 1 }}>
            {children}

            {rating !== undefined && (
              <div style={{ marginTop: 12 }}>
                <Rate
                  allowHalf
                  defaultValue={rating}
                  onChange={onRatingChange}
                />
              </div>
            )}

            {buttonText && (
              <div style={{ marginTop: 12 }}>
                <Button type="primary" onClick={onButtonClick}>
                  {buttonText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </AntCard>
    </Space>
  );
};

export default Card;
