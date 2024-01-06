import React, { useState } from "react";
import CoursesForm from "./coursesform";
import CourseList from "./courseList";

function CourseManager() {
  const [courseDetails, setCourseDetails] = useState([]);

  const handleEdit = () => {};

  const handleDelete = () => {
    setCourseDetails([]);
  };

  return (
    <div>
      <CoursesForm setCourseDetails={setCourseDetails} />

      {courseDetails.length > 0 && (
        <CourseList
          details={courseDetails}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default CourseManager;
