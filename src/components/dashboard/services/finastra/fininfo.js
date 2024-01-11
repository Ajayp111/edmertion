import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "auto",
    width: "100%",
    overflowX: "auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: theme.spacing(1),
  },
  image: {
    // Define your styles for the image here if needed
  },
}));

function FinInfo({ details }) {
  const classes = useStyles();

  return (
    <div className={classes.container} style={{ userSelect: "none" }}>
      <Grid container spacing={3}>
        {/* Replace the data in details with the actual data */}
        {details.map((bankDetails, index) => (
          <React.Fragment key={index}>
            {/* Image */}
            <Grid item xs={12} sm={3} className={classes.item}>
              <Typography variant="h6"></Typography>
              <img
                src={bankDetails.imageUrl}
                alt="bank"
                className={classes.image}
              />
            </Grid>

            {/* Interest Rate */}
            <Grid item xs={12} sm={3} className={classes.item}>
              <Typography variant="h6" className={classes.item}>
                <h1>
                  <strong>Interest Rate</strong>
                </h1>
              </Typography>
              <Typography variant="body1" className={classes.item}>
                <p>
                  <strong>ForMale : </strong> {bankDetails.forMale}
                </p>
              </Typography>
              <Typography variant="body1" className={classes.item}>
                <p>
                  <strong>ForWomen :</strong> {bankDetails.forWomen}
                </p>
              </Typography>
            </Grid>

            {/* Processing Fees */}
            <Grid item xs={12} sm={3} className={classes.item}>
              <Typography variant="h6" className={classes.item}>
                <p>
                  <strong> Processing Fees : </strong>
                  {bankDetails.processingFees}
                </p>
              </Typography>
            </Grid>

            {/* Maximum Loan Amount */}
            <Grid item xs={12} sm={3} className={classes.item}>
              <Typography variant="h6" className={classes.item}>
                <p>
                  <strong>Maximum Loan Amount </strong>
                  {bankDetails.maximumLoanAmount}
                </p>
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </div>
  );
}

export default FinInfo;
