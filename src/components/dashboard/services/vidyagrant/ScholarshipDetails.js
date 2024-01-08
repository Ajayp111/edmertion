import React from "react";
import { Card, Button, Grid, IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "225px",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    maxHeight: "225px",
  },
  buttonGroup: {
    marginTop: "15px",
    display: "flex",
  },
  button: {
    marginTop: "15px",
    marginLeft: "5px",
  },
}));

const ScholarshipDetails = ({ details, onEdit, onDelete }) => {
  const classes = useStyles();

  return (
    <div style={{ padding: "10px" }}>
      <Grid container spacing={2}>
        {details.map((detail, index) => (
          <Grid item xs={12} key={index}>
            <Card className={classes.card}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  {detail.imageUrl && (
                    <img
                      src={detail.imageUrl}
                      alt="Scholarship Photo"
                      className={classes.img}
                    />
                  )}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Grid container direction="column">
                    <h3 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                      {detail.scholarshipname}
                    </h3>
                    <p>
                      <strong>Organisation:</strong> {detail.organisation}
                    </p>
                    <p>
                      <strong>Eligibility:</strong> {detail.eligibility}
                    </p>
                    <p>
                      <strong>Based:</strong>
                      {detail.based}
                    </p>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Grid container direction="column">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>
                        <strong className="text-xl px-2">
                          {detail.amount}{" "}
                        </strong>
                      </p>
                      <IconButton aria-label="delete"></IconButton>
                    </div>
                    <div className={classes.buttonGroup}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        onClick={() => onEdit(index)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.button}
                        onClick={() => onDelete(index)}
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

export default ScholarshipDetails;
