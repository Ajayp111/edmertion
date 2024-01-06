import React, { useState } from "react";
import AddCollegeForm from "./CollegeForm";
import CourseInfo from "./CollegeInfo";
import Dummycoursenetai from "./dummycoursenetai";
const CollegeManager = () => {
  const [universityDetails, setUniversityDetails] = useState(null);

  const handleEdit = () => {};

  const handleDelete = () => {
    setUniversityDetails(null);
  };

  return (
    <div>
      <AddCollegeForm setUniversityDetails={setUniversityDetails} />

      {universityDetails && (
        <CourseInfo
          details={universityDetails}
          // onEdit={handleEdit}
          // onDelete={handleDelete}
        />
      )}
      <>
        <Dummycoursenetai />
      </>
    </div>
  );
};

export default CollegeManager;
