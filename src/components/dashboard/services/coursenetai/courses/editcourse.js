import React, { useState } from "react";
const Editcourse = ({ details, onUpdate }) => {
  const [courseName, setCourseName] = useState(details.courseName);
  const [organisation, setorganisation] = useState(details.organisation);
  const [language, setlanguage] = useState(details.language);
  const [level, setlevel] = useState(details.level);
  const [mode, setmode] = useState(details.mode);
  const [contact, setcontact] = useState(details.contact);
  const [price, setprice] = useState(details.price);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the server to update the course details

    const updatedCourse = {
      id: details.id,
      courseName: courseName,
      organisation: organisation,
      language: language,
      level: level,
      mode: mode,
      contact: contact,
      price: price,
    };

    try {
      await onUpdate(updatedCourse);
      setCourseName("");
      setorganisation("");
      setlanguage("");
      setlevel("");
      setmode("");
      setcontact("");
      setprice("");
    } catch (error) {
      console.error("Failed to update course:", error);
    }
  };
  return (
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
            className="form-control border p-2 w-full rounded"
            onChange={(e) => setCourseName(e.target.value)}
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
            className="form-control border p-2 w-full rounded"
            onChange={(e) => setlanguage(e.target.value)}
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
            onChange={(e) => setorganisation(e.target.value)}
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
            className="form-control border p-2 w-full rounded"
            onChange={(e) => setlevel(e.target.value)}
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
            className=" form-control border p-2 w-full rounded"
            onChange={(e) => setprice(e.target.value)}
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
            className="form-control border p-2 w-full rounded"
            onChange={(e) => setmode(e.target.value)}
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
            className="form-control border p-2 w-full rounded"
            onChange={(e) => setcontact(e.target.value)}
          />
        </div>

        {/* Form submission buttons */}
        <div className="flex justify-between">
          <button type="submit" className="bg-red-500 text-white p-2 rounded">
            updated Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editcourse;
