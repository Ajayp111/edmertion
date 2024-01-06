import React from "react";
import Coursesform from "./coursesform";
import CourseManager from "./courseManager";
import Dummycourses from "./dummycourses";
function coursesmain() {
  return (
    <div>
      <Coursesform />
      {/* <CourseManager /> */}
      <Dummycourses />
    </div>
  );
}

export default coursesmain;
