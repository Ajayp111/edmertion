import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const AddCollegeForm = ({ setUniversityDetails }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const details = {
      institution: formData.get("institution"),
      programme: formData.get("programme"),
      fees: formData.get("fees"),
      duration: formData.get("duration"),
      eligibility: formData.get("eligibility"),
      selection: formData.get("selection"),
      placement: formData.get("placement"),
      seatsAvailable: formData.get("seatsAvailable"),
      averagePackage: formData.get("averagePackage"),
      infrastructure: formData.get("infrastructure"),
      imageUrl: imageUrl,
    };
    setUniversityDetails(details);
    closeForm();
  };

  const handleEdit = () => {
    // Implement edit functionality here
    // You might open a modal or another view for editing the university details
    // Pass `universityDetails` to the editing component or trigger the editing mode
    // For example, set a state variable to indicate editing mode and pass `universityDetails` to the editing component
    // Assuming `editMode` is a state variable
  };

  const handleDelete = () => {
    // Implement delete functionality here
    setUniversityDetails(null); // Reset university details after deletion
    // Additionally, close any edit mode if it's open
    // Assuming `editMode` is a state variable used for edit mode
  };
  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    } else {
      setImageUrl("");
    }
  };

  return (
    <div
      className="flex justify-center items-center mt-7 lg:mr-20"
      style={{ userSelect: "none" }}
    >
      {!isOpen && (
        <div>
          <div className="h-full w-full flex items-center justify-center">
            <div>
              <button
                className="w-48 rounded-lg py-4 px-8 font-bold text-xl bg-gray-500 text-white hover:bg-red-400 transition-colors duration-300"
                onClick={openForm}
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

      {isOpen && (
        <div className="top-10 left-10 w-full h-full flex justify-center items-center">
          <div className="bg-white md:p-8 rounded w-full max-w-screen-lg ">
            <IconButton onClick={closeForm} className="float-right">
              <CloseIcon />
            </IconButton>
            <h2 className="text-xl md:text-xl font-semibold mb-4 ">
              Add New College
            </h2>

            {/* Add Photo Section */}
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
                alt="Selected photo"
                className="border p-2 w-full rounded"
              />
            </div>

            {/* Form to add a new college */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name of the Institution */}
              <div>
                <label htmlFor="institution" className="block">
                  Name of the Institution
                </label>
                <input
                  id="institution"
                  name="institution"
                  type="text"
                  className="border p-2 w-full rounded"
                  placeholder="Enter institution name"
                />
              </div>

              {/* Programme */}
              <div>
                <label htmlFor="programme" className="block">
                  Programme
                </label>
                <input
                  id="programme"
                  name="programme"
                  type="text"
                  className="border p-2 w-full rounded"
                  placeholder="Enter programme"
                />
              </div>

              {/* Fees */}
              <div>
                <label htmlFor="fees" className="block">
                  Fees
                </label>
                <input
                  id="fees"
                  name="fees"
                  type="number"
                  className="border p-2 w-full rounded"
                  placeholder="Enter fees"
                />
              </div>

              {/* Duration */}
              <div>
                <label htmlFor="duration" className="block">
                  Duration
                </label>
                <input
                  id="duration"
                  name="duration"
                  type="number"
                  className="border p-2 w-full rounded"
                  placeholder="Enter duration"
                />
              </div>

              {/* Eligibility */}
              <div>
                <label htmlFor="eligibility" className="block">
                  Eligibility
                </label>
                <input
                  id="eligibility"
                  name="eligibility"
                  type="text"
                  className="border p-2 w-full rounded"
                  placeholder="Enter eligibility details"
                />
              </div>

              {/* Selection */}
              <div>
                <label htmlFor="selection" className="block">
                  Selection
                </label>
                <input
                  id="selection"
                  name="selection"
                  type="text"
                  className="border p-2 w-full rounded"
                  placeholder="Enter selection details"
                />
              </div>

              {/* Placement */}
              <div>
                <label htmlFor="placement" className="block">
                  Placement
                </label>
                <input
                  id="placement"
                  name="placement"
                  type="text"
                  className="border p-2 w-full rounded"
                  placeholder="Enter placement details"
                />
              </div>

              {/* Seats Available */}
              <div>
                <label htmlFor="seatsAvailable" className="block">
                  Seats Available
                </label>
                <input
                  id="seatsAvailable"
                  name="seatsAvailable"
                  type="number"
                  className="border p-2 w-full rounded"
                  placeholder="Enter number of seats available"
                />
              </div>

              {/* Average Package */}
              <div>
                <label htmlFor="averagePackage" className="block">
                  Average Package
                </label>
                <input
                  id="averagePackage"
                  name="averagePackage"
                  type="number"
                  className="border p-2 w-full rounded"
                  placeholder="Enter average package amount"
                />
              </div>

              {/* Infrastructure */}
              <div>
                <label htmlFor="infrastructure" className="block">
                  Infrastructure
                </label>
                <input
                  id="infrastructure"
                  name="infrastructure"
                  type="text"
                  className="border p-2 w-full rounded"
                  placeholder="Enter infrastructure details"
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
        </div>
      )}
    </div>
  );
};
export default AddCollegeForm;
