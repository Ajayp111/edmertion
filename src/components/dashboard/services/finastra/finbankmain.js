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

function finbankmain() {
  const classes = UseStyles();

  return (
    <div className={classes.container} style={{ userSelect: "none" }}>
      <Grid container spacing={3}>
        {/* Image */}
        <Grid item xs={12} sm={3} className={classes.item}>
          <Typography variant="h6"></Typography>
          <img
            src="https://130e178e8f8ba617604b-8aedd782b7d22cfe0d1146da69a52436.ssl.cf1.rackcdn.com/sbi-investigates-reported-massive-data-leak-showcase_image-2-a-11986.jpg"
            alt="SBI Image"
            className={classes.image}
          />
        </Grid>

        {/* Interest Rate */}
        <Grid item xs={12} sm={3} className={classes.item}>
          <Typography variant="h6" className="py-6 font-semibold pl-3">
            Interest Rate
          </Typography>
          <Typography variant="body1" className="pl-3">
            For Males: 8.95%
          </Typography>
          <Typography variant="body1" className="pl-3">
            For Females: 8.95%
          </Typography>
        </Grid>

        {/* Processing Fees */}
        <Grid item xs={12} sm={3} className={classes.item}>
          <Typography variant="h6" className="py-6 font-semibold">
            Processing fees
          </Typography>
          <Typography variant="body1">Up to Rs.10,000</Typography>
          <Typography variant="body1">
            No charged required for loan amount below Rs.20 lakh
          </Typography>
        </Grid>

        {/* Maximum Loan Amount */}
        <Grid item xs={12} sm={3} className={classes.item}>
          <Typography variant="h6" className="py-6 font-semibold">
            Maximum Loan Amount
          </Typography>
          <Typography variant="body1">Upto 10 Lacs - In India</Typography>
          <Typography variant="body1">Upto 20 Lacs - In Abroad</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default finbankmain;
