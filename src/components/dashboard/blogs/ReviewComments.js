import React from "react";
import { Grid, Typography, Button, Paper } from "@mui/material";

const ReviewComments = () => {
  return (
    <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom>
        <strong>Review Comments</strong>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" gutterBottom>
            <strong>Username</strong>
          </Typography>
          <Typography variant="body1">Dummy Name</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" gutterBottom>
            <strong>Date</strong>
          </Typography>
          <Typography variant="body1">January 1, 2024</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1" gutterBottom>
            <strong>Time</strong>
          </Typography>
          <Typography variant="body1">12:00 PM</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="subtitle1" gutterBottom>
            <strong>Comment</strong>
          </Typography>
          <Typography variant="body1">
            comment is a comment and comment is also a comment so comment called
            as a comment so it is a comment. So I call it as a comment.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#FF2400",
                color: "white",
                marginRight: "10px",
              }}
            >
              Remove Report
            </Button>
            <Button
              variant="outlined"
              style={{ color: "red", borderColor: "red" }}
            >
              Delete Comment
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReviewComments;
