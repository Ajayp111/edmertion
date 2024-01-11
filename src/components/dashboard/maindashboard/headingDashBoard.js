// Dashboard.js
import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import "tailwindcss/tailwind.css";

const Dashboard = () => {
  return (
    <Container>
      <Grid container spacing={3} style={{ height: "100px", width: "800px" }}>
        {/* Left side with Dashboard heading */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="p-4">
            <Typography variant="h4">Dashboard</Typography>
          </Paper>
        </Grid>

        {/* Right side without anything */}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
