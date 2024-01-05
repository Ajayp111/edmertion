import React, { useState } from "react";
import AddCollegeForm from "./CollegeForm";
import CourseInfo from "./CollegeInfo";

const CollegeManager = () => {
  const [universityDetails, setUniversityDetails] = useState(null);

  const handleEdit = () => {};

  const handleDelete = () => {
    setUniversityDetails(null);
  };

  return (
    <div>
      <AddCollegeForm setUniversityDetails={setUniversityDetails} />

      {/* Render CourseInfo based on universityDetails */}
      {universityDetails && (
        <CourseInfo
          details={universityDetails}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default CollegeManager;
