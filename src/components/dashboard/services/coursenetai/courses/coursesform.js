import React, { useState } from "react";
import CourseList from "./courseList";

function CoursesForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [courseData, setCourseData] = useState([]);

  // Handle edit course
  const handleEditCourse = (index) => {
    setCourseData(
      courseData.map((course, i) =>
        i === index ? { ...course, edit: true } : course
      )
    );
  };

  // Handle delete course
  const handleDeleteCourse = (index) => {
    setCourseData(courseData.filter((course, i) => i !== index));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      courseName: e.target.courseName.value,
      language: e.target.language.value,
      organisation: e.target.organisation.value,
      level: e.target.level.value,
      price: e.target.price.value,
      mode: e.target.mode.value,
      contact: e.target.contact.value,
      imageUrl: imageUrl,
    };
    setCourseData([...courseData, newCourse]);
    setIsOpen(false);
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    } else {
      setImageUrl("");
    }
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add Course</h2>
      {isOpen ? (
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="courseName" className="block">
                Course Name
              </label>
              <input
                id="courseName"
                name="courseName"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter Name Of the Course"
              />
            </div>
            <div>
              <input
                id="image"
                name="image"
                type="file"
                className="border p-2 w-full rounded"
                onChange={handleImageChange}
              />

              <img
                src={imageUrl}
                alt="Upload"
                className="border p-2 w-full rounded"
              />
            </div>
            <div>
              <label htmlFor="language" className="block">
                Name of the language
              </label>
              <input
                id="language"
                name="language"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter the language"
              />
            </div>
            <div>
              <label htmlFor="organisation" className="block">
                Name of the Organisation
              </label>
              <input
                id="organisation"
                name="organisation"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter Name Of the Organisation"
              />
            </div>
            <div>
              <label htmlFor="level" className="block">
                Enter the level
              </label>
              <input
                id="level"
                name="level"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter the Level "
              />
            </div>
            <div>
              <label htmlFor="price" className="block">
                Enter the Price
              </label>
              <input
                id="price"
                name="price"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter the Price "
              />
            </div>
            <div>
              <label htmlFor="mode" className="block">
                online/offline
              </label>
              <input
                id="mode"
                name="mode"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="online/offline"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block">
                Contact
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter the Contact"
              />
            </div>

            {/* Form submission buttons */}
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-red-500 text-white p-2 rounded"
              >
                Publish
              </button>
              <button
                type="button"
                onClick={closeForm}
                className="bg-gray-300 text-gray-700 p-2 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="border-4 border-dashed border-gray-200 w-200 h-200 p-20">
          <div className="h-full w-full flex items-center justify-center">
            <div>
              <button
                className="w-48 rounded-lg py-4 px-8 font-bold text-xl bg-gray-500 text-white hover:bg-red-400 transition-colors duration-300"
                onClick={() => setIsOpen(true)}
              >
                Add New
              </button>
              <div className="text-gray-500 py-1 px-2">
                <span>Upload files in jpg format</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <CourseList
        details={courseData}
        onEdit={handleEditCourse}
        onDelete={handleDeleteCourse}
      />
    </div>
  );
}

export default CoursesForm;
