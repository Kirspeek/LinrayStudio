import React from "react";
import Header from "../components/Header";
import "../styles/pages/Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Header />
      <main className="dashboard-content">
        <div className="dashboard-container">
          {/* Dashboard content will go here */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
