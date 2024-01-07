import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const VidyaGrantInfo = ({ data }) => {
  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <img
              src={data.imageUrl}
              alt="company"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="col-span-2">
            <Typography variant="h6" component="h2" className="mb-2">
              {data.name}
            </Typography>

            <Typography variant="body2" color="textSecondary" className="mb-2">
              Organisation: {data.organisation}
            </Typography>

            <Typography variant="body2" color="textSecondary" className="mb-2">
              Amount: {data.amount}
            </Typography>

            <Typography variant="body2" color="textSecondary" className="mb-2">
              Eligibility: {data.eligibility}
            </Typography>

            <Typography variant="body2" color="textSecondary" className="mb-2">
              Application Process: {data.applicationProcess}
            </Typography>

            <div className="grid grid-cols-2 gap-4">
              <Typography
                variant="body2"
                color="textSecondary"
                className="mb-2"
              >
                Contact: {data.contact}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                className="mb-2"
              >
                Applicable to: {data.applicableTo}
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VidyaGrantInfo;
