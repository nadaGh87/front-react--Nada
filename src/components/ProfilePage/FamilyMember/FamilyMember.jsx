import React from "react";
import { Typography, Avatar } from "antd";
import { UserOutlined, RightOutlined } from "@ant-design/icons";
import Card from "../../../assets/AntDesign/Card";
import Button from "../../../assets/AntDesign/Button";
import "./FamilyMember.css";

const { Title, Text } = Typography;

const FamilyMember = () => {
  const familyMembers = [
    {
      id: 1,
      relationship: "Son",
      name: "Guy Azhari",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 2,
      relationship: "Son",
      name: "Guy Azhari",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 3,
      relationship: "Son",
      name: "Guy Azhari",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const handleViewProfile = (memberId) => {
    console.log("View profile for member:", memberId);
  };

  return (
    <div className="family-member-container">
      <Card className="family-member-card">
        <div className="family-member-header">
          <Title level={4} className="family-member-title">
            Family Member
          </Title>
        </div>

        <div className="family-member-list">
          {familyMembers.map((member, index) => (
            <div
              key={member.id}
              className={`family-member-item ${
                index !== familyMembers.length - 1 ? "with-border" : ""
              }`}
            >
              <div className="member-info">
                <Avatar
                  size={40}
                  src={member.avatar}
                  icon={<UserOutlined />}
                  className="member-avatar"
                />
                <div className="member-details">
                  <Text className="member-relationship">
                    {member.relationship}
                  </Text>
                  <Text className="member-name">{member.name}</Text>
                </div>
              </div>
              <Button
                type="link"
                className="view-profile-btn"
                onClick={() => handleViewProfile(member.id)}
              >
                View profile <RightOutlined />
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default FamilyMember;
