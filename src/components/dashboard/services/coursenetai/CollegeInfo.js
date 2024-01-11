import React from "react";
import { Card, Button, Grid, IconButton } from "@material-ui/core";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";

import { StarBorder, Edit, Delete } from "@material-ui/icons";
import Rating from "@mui/material/Rating";

const CollegeInfo = ({ details, onEdit, onDelete }) => {
  if (!details) {
    return <div>No details available</div>;
  }
  return (
    <div
      style={{
        maxWidth: "100%",
        overflowX: "auto",
        border: "1px solid #ccc",
        padding: "10px",
        userSelect: "none",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card style={{ height: "225px", width: "100%" }}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <img
                  src={details.imageUrl}
                  alt={details.institution}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Grid container direction="column">
                  <h3 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    {details.institution}
                  </h3>
                  <p>
                    <strong>Course: </strong> {details.programme}
                  </p>
                  <p>
                    <strong>Eligibility:</strong> {details.eligibility}
                  </p>
                  <p>
                    <strong>Fees:</strong>
                    {details.fees} Lakhs INR
                  </p>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid container direction="column">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                      <StarIcon />
                    </IconButton>
                    <IconButton>
                      <StarIcon />
                    </IconButton>
                    <IconButton>
                      <StarIcon />
                    </IconButton>
                  </div>
                  <div style={{ marginTop: "10px", padding: "5px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{
                        backgroundColor: "light-red",
                        color: "#FFF",
                        marginTop: "15px",
                      }}
                    >
                      <Edit />
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="small"
                      style={{
                        backgroundColor: "blue",
                        color: "#FFF",
                        marginTop: "15px",
                        marginLeft: "5px",
                      }}
                    >
                      <Delete />
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CollegeInfo;
