import React from "react";
import { Card, Button, Grid, IconButton, makeStyles } from "@material-ui/core";
import { SchoolSharp } from "@material-ui/icons";

const UseStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "225px",
    },
  },
}));

const courseDetails = [
  {
    id: 1,
    CourseName: " MERN Full Stack ",
    language: "Telugu/English",
    organisation: "Aj-tech",
    level: "Advanced",
    mode: "Online&Offline",
    price: "19999",
    contact: "8919814760",
    photo: "https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png",
  },
  {
    id: 1,
    CourseName: "Java Full Stack ",
    language: "Telugu/English",
    organisation: "Aj-tech",
    level: "Advanced",
    mode: "Online&Offline",
    price: "19999",
    contact: "8919814760",
    photo:
      "https://ashokitech.com/uploads/course/java-fullstack-development-online-training.jpeg",
  },
  {
    id: 1,
    CourseName: "Python Developer ",
    language: "Telugu/English",
    organisation: "Aj-tech",
    level: "Advanced",
    mode: "Online&Offline",
    price: "19999",
    contact: "8919814760",
    photo:
      "https://www.interviewbit.com/blog/wp-content/uploads/2021/12/Python-Developer-Skills.png",
  },
];
function dummycourses({ details }) {
  const classes = UseStyles();

  return (
    <div style={{ padding: "10px" }}>
      <Grid container spacing={2}>
        {courseDetails.map((courseDetails) => (
          <Grid item xs={12} key={courseDetails.id}>
            <Card className={classes.card}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <img
                    src={courseDetails.photo}
                    alt={courseDetails.CourseName}
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
                      {courseDetails.CourseName}
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
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{
                          backgroundColor: "red",
                          color: "#FFF",
                          marginTop: "15px",
                        }}
                      >
                        Edit
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

export default dummycourses;
