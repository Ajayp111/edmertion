import React, { useState } from "react";
import ScholarshipDetails from "./ScholarshipDetails";

function VidyaGrantForm() {
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
      name: e.target.name.value,
      organisation: e.target.organisation.value,
      about: e.target.about.value,
      amount: e.target.amount.value,
      applicationProcess: e.target.applicationProcess.value,
      eligibility: e.target.eligibility.value,
      contact: e.target.contact.value,
      applicableTo: e.target.applicableTo.value,
      imageUrl: imageUrl,
    };
    setCourseData([...courseData, newCourse]);
    setImageUrl("");
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
      <h2 className="text-xl font-bold mb-4">Add New Scholarship</h2>
      {isOpen ? (
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div>
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
              <label htmlFor="name" className="block">
                Scholarship Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter Name Of the Scholarship"
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
              <label htmlFor="about" className="block">
                About
              </label>
              <input
                id="about"
                name="about"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="About"
              />
            </div>
            <div>
              <label htmlFor="amount" className="block">
                Enter the Amount
              </label>
              <input
                id="amount"
                name="amount"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter the Amount "
              />
            </div>
            <div>
              <label htmlFor="applicationProcess" className="block">
                applicationProcess
              </label>
              <input
                id="applicationProcess"
                name="applicationProcess"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="applicationProcess"
              />
            </div>
            <div>
              <label htmlFor="eligibility" className="block">
                Eligibility
              </label>
              <input
                id=" eligibility"
                name=" eligibility"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Eligibility"
              />
            </div>
            <div>
              <label htmlFor="applicableTo" className="block">
                applicableTo
              </label>
              <input
                id="applicableTo"
                name="applicableTo"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="applicableTo"
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
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Course
        </button>
      )}
      <ScholarshipDetails
        details={courseData}
        onEdit={handleEditCourse}
        onDelete={handleDeleteCourse}
      />
    </div>
  );
}

export default VidyaGrantForm;
