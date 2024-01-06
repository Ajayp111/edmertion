import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";

const UseStyles = makeStyles((theme) => ({
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
}));

function fininfo({ details }) {
  const classes = UseStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        {/* Image */}
        {details.map((bankDetails,index)=>)}
        <Grid item xs={12} sm={3} className={classes.item}>
          <Typography variant="h6"></Typography>
          <img
            src={bankDetails.imageUrl}
            alt="SBI Image"
            className={classes.image}
          />
        </Grid>

        {/* Interest Rate */}
        <Grid item xs={12} sm={3} className={classes.item}>
          <Typography variant="h6" className="py-6 font-semibold pl-3">
            {bankDetails.InterestRate}
          </Typography>
          <Typography variant="body1" className="pl-3">
           {bankDetails.forMale}
          </Typography>
          <Typography variant="body1" className="pl-3">
          {bankDetails.forWomen}
          </Typography>
        </Grid>

        {/* Processing Fees */}
        <Grid item xs={12} sm={3} className={classes.item}>
          <Typography variant="h6" className="py-6 font-semibold">
           {bankDetails.processingFees}
          </Typography>
        </Grid>

        {/* Maximum Loan Amount */}
        <Grid item xs={12} sm={3} className={classes.item}>
          <Typography variant="h6" className="py-6 font-semibold">
            {bankDetails.maximumLoanAmount}
          </Typography>
        
        </Grid>
      </Grid>
    </div>
  );
}

export default fininfo;
