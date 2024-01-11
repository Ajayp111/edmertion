import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import AddQuestion from "./addquestion";
function Feedback() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "", // Updated to lowercase 'email'
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, formData]);
    setSubmittedData(formData);
    setFormData({
      name: "",
      email: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      className="container mx-auto py-5 pr-10"
      style={{ userSelect: "none" }}
    >
      <div>
        <h1 className="text-xl font-bold size-5 pb-8 pl-5 underline">
          Feedback
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <TextField
          fullWidth
          label="Name Field"
          variant="outlined"
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mb-4"
        />
        <TextField
          fullWidth
          label="Email Field"
          variant="outlined"
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      <div>
        {data.map((data, index) => (
          <div key={index} className="mb-2">
            <h2 className="text-xl font-bold">Submitted Data:</h2>
            <p className="mt-2">Name: {data.name}</p>
            <p>Email: {data.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
