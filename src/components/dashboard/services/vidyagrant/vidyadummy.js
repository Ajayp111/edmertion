import React from "react";
import { Card, Button, Grid, IconButton, makeStyles } from "@material-ui/core";

const UseStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "225px",
    },
  },
}));
const vidyadummy = () => {
  const classes = UseStyles();
  const ScholarShipCompany = [
    {
      id: 1,
      name: "KC Mahindra ScholarShip",
      company: "Mahindra Education Trust",
      eligibility: "Applicable for all Colleges",
      based: "Need based",
      amount: "80000/- INR",
      stars: 4,
      photo:
        "https://logowik.com/content/uploads/images/tech-mahindra-new6235.logowik.com.webp",
    },
    {
      id: 2,
      name: "Zol Global Scholarship",
      company: "Zol Global Trust",
      eligibility: "Applicable for all Colleges",
      based: "Merit Based",
      amount: "500000/- INR",
      stars: 4,
      photo:
        "https://img.freepik.com/premium-vector/global-tech-logo-modern-logo-communication_221979-151.jpg?w=2000",
    },
    {
      id: 3,
      name: "KC Mahindra ScholarShip",
      company: "Mahindra Education Trust",
      eligibility: "Applicable for all Colleges",
      based: "Need based",
      amount: "80000/- INR",
      stars: 4,
      photo:
        "https://logowik.com/content/uploads/images/tech-mahindra-new6235.logowik.com.webp",
    },
  ];

  return (
    <div style={{ padding: "10px", userSelect: "none" }}>
      <Grid container spacing={2} style={{ userSelect: "none" }}>
        {ScholarShipCompany.map((scholarship) => (
          <Grid item xs={12} key={scholarship.id}>
            <Card className={classes.card}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <img
                    src={scholarship.photo}
                    alt={scholarship.name}
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
                      {scholarship.name}
                    </h3>
                    <p>
                      {" "}
                      <strong>ScholarShip Company :</strong>
                      {scholarship.company}
                    </p>
                    <p>
                      <strong>Eligibility: </strong>
                      {scholarship.eligibility}
                    </p>
                    <p>
                      <strong>Based:</strong>
                      {scholarship.based}
                    </p>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Grid container direction="column">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>
                        <strong className="text-xl px-2">
                          {scholarship.amount}{" "}
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
                          backgroundColor: "#ff6347",
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
};

export default vidyadummy;
