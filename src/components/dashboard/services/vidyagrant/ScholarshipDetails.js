import React from "react";
import { Card, CardContent } from "@material-ui/core";

function ScholarshipDetails({ data }) {
  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <img
              src={data.photo}
              alt="company"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2">
            <h2 className="text-xl font-bold mb-2">{data.name}</h2>
            <p className="text-gray-500 mb-2">
              Organisation: {data.organisation}
            </p>
            <p className="text-gray-500 mb-2">Amount: {data.amount}</p>
            <p className="text-gray-500 mb-2">
              Eligibility: {data.eligibility}
            </p>
            <p className="text-gray-500 mb-2">
              Application Process: {data.applicationProcess}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-gray-500 mb-2">Contact: {data.contact}</p>
              <p className="text-gray-500 mb-2">
                Applicable to: {data.applicableTo}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ScholarshipDetails;
