import React from "react";
import SearchComponent from "./Search";
import CollegeManager from "./CollegeManager";
import Dummycoursenetai from "../coursenetai/dummycoursenetai";
function CourseNetAi() {
  return (
    <div>
      <div className=" text-black p-4 flex justify-between items-center">
        <h1 className="text-2xl">CourseNet AI</h1>
        <div>
          <button className="bg-red-400 text-white rounded-md px-4 py-2 mr-2">
            Colleges
          </button>
          <button className="bg-white text-black px-4 py-2 rounded border border-red-500">
            Courses
          </button>
        </div>
      </div>
      <div className="w-full">
        <SearchComponent />
      </div>

      <div>
        <CollegeManager />
      </div>
      <div>
        <Dummycoursenetai />
      </div>
    </div>
  );
}

export default CourseNetAi;
