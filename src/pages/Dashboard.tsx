import React from "react";
import Box from "@mui/material/Box";
import DraggableDashboard from "../components/Dashboard";

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      <DraggableDashboard />
    </Box>
  );
};

export default Dashboard;
