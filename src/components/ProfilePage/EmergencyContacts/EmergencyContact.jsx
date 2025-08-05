import React from "react";
import Card from "../../../assets/AntDesign/Card";
import Button from "../../../assets/AntDesign/Button";
import { Avatar, Typography } from "antd";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import "./EmergencyContact.css";

const { Title, Text } = Typography;

const EmergencyContact = () => {
  const emergencyContacts = [
    {
      id: 1,
      name: "Jane Doe",
      relationship: "Spouse",
      phone: "(555) 123-4567",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Jane Doe",
      relationship: "Spouse",
      phone: "(555) 123-4567",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    },
  ];

  const handleAddContact = () => {
    console.log("Add contact clicked");
  };

  const handleCallContact = (phone) => {
    console.log("Calling:", phone);
  };

  const EmergencyIcon = () => (
    <svg
      className="emergency-icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const cardTitle = (
    <div className="emergency-header">
      <EmergencyIcon />
      <Title level={4} className="emergency-title">
        Emergency Contacts
      </Title>
    </div>
  );

  return (
    <div className="emergency-container">
      <Card
        title={cardTitle}
        style={{
          background: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          border: "none",
          padding: "24px",
        }}
      >
        <div className="contacts-list">
          {emergencyContacts.map((contact) => (
            <div key={contact.id} className="contact-item">
              <div className="contact-left">
                {contact.avatar ? (
                  <Avatar
                    size={48}
                    src={contact.avatar}
                    className="contact-avatar"
                  />
                ) : (
                  <div className="contact-avatar-placeholder">
                    <UserOutlined />
                  </div>
                )}
                <div className="contact-details">
                  <Text className="contact-name">{contact.name}</Text>
                  <Text className="contact-relationship">
                    {contact.relationship}
                  </Text>
                </div>
              </div>
              <Button
                type="link"
                className="contact-phone"
                onClick={() => handleCallContact(contact.phone)}
              >
                {contact.phone}
              </Button>
            </div>
          ))}
        </div>

        <Button
          type="text"
          icon={<PlusOutlined />}
          className="add-contact-btn"
          onClick={handleAddContact}
        >
          Add Contact
        </Button>
      </Card>
    </div>
  );
};

export default EmergencyContact;
