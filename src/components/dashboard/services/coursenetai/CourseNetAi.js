import React, { useState } from "react";
import SearchComponent from "./Search";
import CollegeManager from "./CollegeManager";
import Dummycoursenetai from "../coursenetai/dummycoursenetai";
import Coursesmain from "./courses/coursesmain";
import CourseManager from "./courses/courseManager";
function CourseNetAi() {
  const [isCollegeView, setIsCollegeView] = useState(true);

  return (
    <div>
      <div
        className="text-black p-4 flex justify-between items-center"
        style={{ userSelect: "none" }}
      >
        <h1 className="text-2xl">CourseNet AI</h1>
        <div>
          <button
            className=" text-white rounded-md px-4 py-2 mr-2"
            onClick={() => setIsCollegeView(true)}
            style={{ background: "#ff6347" }}
          >
            Colleges
          </button>
          <button
            className="bg-white text-black px-4 py-2 rounded border border-red-500"
            onClick={() => setIsCollegeView(false)}
          >
            Courses
          </button>
        </div>
      </div>
      <div className="w-full">
        <SearchComponent />
      </div>

      {isCollegeView ? <CollegeManager /> : <Coursesmain />}
    </div>
  );
}

export default CourseNetAi;
