import React from "react";
import { Grid, Typography, Button, Paper } from "@mui/material";

const ReviewComments = () => {
  // Replace the placeholder image URL with the actual one you choose
  const profilePhotoUrl = "https://picsum.photos/50";

  return (
    <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom></Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <img
            src={profilePhotoUrl}
            alt="Profile"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
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
                backgroundColor: "#ff6347",
                color: "white",
                marginRight: "10px",
                borderRadius: "20px",
              }}
            >
              Remove Report
            </Button>
            <Button
              variant="outlined"
              style={{
                color: "#ff6347",
                borderColor: "#ff6347",
                borderRadius: "20px",
                fontWeight: "bold",
              }}
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
