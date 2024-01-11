import React from "react";
import { Card, Button, Grid, IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    userSelect: "none",
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "225px",
    },
  },
}));

function CourseList({ details, onEdit, onDelete }) {
  const classes = useStyles();

  return (
    <div style={{ padding: "10px", userSelect: "none" }}>
      <Grid container spacing={2}>
        {details.map((courseDetails, index) => (
          <Grid item xs={12} key={index}>
            <Card className={classes.card}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <img
                    src={courseDetails.imageUrl}
                    alt={courseDetails.courseName}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      maxHeight: "225px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Grid container direction="column">
                    <h3 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                      {courseDetails.courseName}
                    </h3>
                    <p>
                      <strong>Language: </strong>
                      {courseDetails.language}
                    </p>
                    <p>
                      <strong>Organisation:</strong>
                      {courseDetails.organisation}
                    </p>
                    <p>
                      <strong>Level:</strong>
                      {courseDetails.level}
                    </p>
                    <p>
                      <strong>Mode:</strong>
                      {courseDetails.mode}
                    </p>
                    <p>
                      <strong>Contact:</strong>
                      {courseDetails.contact}
                    </p>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Grid container direction="column">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>
                        <strong className="text-xl px-2">
                          {courseDetails.price}/-
                        </strong>
                      </p>
                      <IconButton aria-label="delete"></IconButton>
                    </div>
                    <div style={{ marginTop: "10px", padding: "5px" }}>
                      <Button
                        onClick={() => onEdit(index)}
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{
                          backgroundColor: "#ff6347",
                          color: "#FFF",
                          marginTop: "15px",
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => onDelete(index)}
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
                        Delete
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CourseList;
