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
        i === index ? { ...courseData, edit: true } : courseData
      )
    );
  };

  // Handle delete course
  const handleDeleteCourse = (index) => {
    setCourseData(courseData.filter((course, i) => i !== index));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newCourse = {
      scholarshipname: formData.get("scholarshipname") || "",
      organisation: formData.get("organisation") || "",
      about: formData.get("about") || "",
      amount: formData.get("amount") || "",
      applicationProcess: formData.get("applicationProcess") || "",
      eligibility: formData.get("eligibility") || "",
      based: formData.get("based") || "",
      contact: formData.get("contact") || "",
      applicableTo: formData.get("applicableTo") || "",
      imageUrl: imageUrl || "",
    };

    setCourseData([...courseData, newCourse]);
    // setImageUrl("");
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
    <div className="p-4" style={{ userSelect: "none" }}>
      <h2 className="text-xl font-bold mb-4">Add New Scholarship</h2>
      {isOpen ? (
        <div className="p-4" style={{ userSelect: "none" }}>
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
              <label htmlFor="based" className="block">
                Based
              </label>
              <input
                id="based"
                name="based"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Based"
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
      <ScholarshipDetails
        details={courseData}
        onEdit={handleEditCourse}
        onDelete={handleDeleteCourse}
      />
    </div>
    //
  );
}

export default VidyaGrantForm;
