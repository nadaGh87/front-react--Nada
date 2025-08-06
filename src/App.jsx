import React from "react";
import AdministrativeData from "./components/ProfilePage/AdministrativeData/AdministrativeData";
import EmergencyContacts from "./components/ProfilePage/EmergencyContacts/EmergencyContact";
import FamilyMember from "./components/ProfilePage/FamilyMember/FamilyMember";
import PersonalHistory from "./components/ProfilePage/PersonalHistory/PersonalHistory";
import MedicalHistory from "./components/ProfilePage/MedicalHistory/MedicalHistory";
import DoctorAppointment from "./components/ProfilePage/DoctorAppointment/DoctorAppointment";
function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        gap: "20px",
      }}
    >
      <AdministrativeData />
      <EmergencyContacts />
      <FamilyMember />
      <PersonalHistory />
      <MedicalHistory />
      <DoctorAppointment />
    </div>
  );
}

export default App;
