import React from "react";
import StarIcon from "@mui/icons-material/Star";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";

const CourseInfo = ({ details, onEdit, onDelete }) => {
  if (!details) {
    return <div>No details available</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full lg:w-12/15 flex">
      <img
        src="https://img.freepik.com/premium-vector/letter-e-logo-design-with-polygonal-style-hexagonal-logo-with-gradient-blue_15602-643.jpg"
        alt="Random college photo"
        className="w-full h-48 object-contain mb-4 rounded-lg shadow-lg mr-4"
        style={{ maxWidth: "150px", height: "auto" }}
      />
      <div className="flex-1 lg:pl-4 ">
        <div>
          <h1 className="text-xl font-semibold mb-4">{details.institution}</h1>
          <p className="text-gray-500 mb-2">Course :{details.programme}</p>
          <p className="text-gray-500 mb-2">
            Eligibility :{details.eligibility}
          </p>
          <p className="text-gray-500 mb-2">Fees :{details.fees} Lakhs INR</p>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div>
            <h1>
              <IconButton>
                <StarIcon />
              </IconButton>
              <IconButton>
                <StarIcon />
              </IconButton>
              <IconButton>
                <StarIcon />
              </IconButton>
            </h1>
          </div>
          <div className="flex">
            <button className="mr-2 py-3 text-gray-500 text-xl">
              <EditNoteIcon />
            </button>
            <button className="text-gray-500 py-3 text-xl">
              <DeleteIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
