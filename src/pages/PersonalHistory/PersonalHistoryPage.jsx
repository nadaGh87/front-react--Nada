import React from "react";
import FamilyHistory from "../ProfilePage/FamilyHistory/FamilyHistory";

const PersonalHistoryPage = () => {
  return (
    <div className="family-page">
      <div className="family-page-container">
        <header className="family-page-header">
          <h1>Family & Personal History</h1>
          <p>Manage your personal and family medical history</p>
        </header>

        <main className="family-page-content">
          <FamilyHistory />
        </main>
      </div>
    </div>
  );
};

export default PersonalHistoryPage;
