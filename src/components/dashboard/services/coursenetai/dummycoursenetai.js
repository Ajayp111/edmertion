import React from "react";
import { Card, Button, Grid, IconButton } from "@material-ui/core";
import { StarBorder, Edit, Delete } from "@material-ui/icons";
import Rating from "@mui/material/Rating";

const dummycoursenetai = () => {
  const universities = [
    {
      id: 1,
      name: "IIT Bombay",
      course: "BTech",
      eligibility: "12th Pass 75%",
      fees: "8-12Lakhs INR ",
      stars: 4,
      photo: "https://new-img.patrika.com/upload/2023/02/13/iit_bombay.jpg",
    },
    {
      id: 2,
      name: "Nit Calicut",
      course: "BTech",
      eligibility: "12th Pass 75%",
      fees: "8-12Lakhs INR ",
      stars: 4,
      photo:
        "https://static.toiimg.com/thumb/msid-97783502,imgsize-276282,width-400,resizemode-4/97783502.jpg",
    },
    {
      id: 3,
      name: "IIT Bombay",
      course: "BTech",
      eligibility: "12th Pass 75%",
      fees: "8-12Lakhs INR ",
      stars: 4,
      photo: "https://new-img.patrika.com/upload/2023/02/13/iit_bombay.jpg",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "100%",
        overflowX: "auto",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <Grid container spacing={2}>
        {universities.map((university) => (
          <Grid item xs={12} key={university.id}>
            <Card style={{ height: "225px", width: "100%" }}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <img
                    src={university.photo}
                    alt={university.name}
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
                      {university.name}
                    </h3>
                    <p>
                      <strong>Course: </strong> {university.course}
                    </p>
                    <p>
                      <strong>Eligibility:</strong> {university.eligibility}
                    </p>
                    <p>
                      <strong>Fees:</strong>
                      {university.fees}
                    </p>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid container direction="column">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Rating
                        name="read-only"
                        value={university.stars}
                        readOnly
                      />
                      <IconButton aria-label="delete"></IconButton>
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
        ))}
      </Grid>
    </div>
  );
};

export default dummycoursenetai;
