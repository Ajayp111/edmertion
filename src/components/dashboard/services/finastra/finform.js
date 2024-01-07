import React, { useState } from "react";
import Fininfo from "./fininfo";
function Finform() {
  const [isOpen, setIsOpen] = useState(false);
  const [bankData, setBankData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const newBank = {
      interestRate: e.target.interestRate.value,
      forMale: e.target.forMale.value,
      forWomen: e.target.forWomen.value,
      processingFees: e.target.processingFees.value,
      maximumLoanAmount: e.target.maximumLoanAmount.value,
      imageUrl: imageUrl,
    };
    setBankData([...bankData, newBank]);
    setIsOpen(false);
  };
  const [imageUrl, setImageUrl] = useState("");

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
              <label htmlFor="interestRate" className="block">
                InterestRate
              </label>
              <input
                id="interestRate"
                name="interestRate"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter the InterestRate"
              />
            </div>
            <div>
              <label htmlFor="forMale" className="block">
                Interest Rate For Males
              </label>
              <input
                id="forMale"
                name="forMale"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Interest Rate For Males"
              />
            </div>
            <div>
              <label htmlFor="forWomen" className="block">
                Interest Rate For Women
              </label>
              <input
                id="forWomen"
                name="forWomen"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Interest Rate For Women"
              />
            </div>
            <div>
              <label htmlFor="price" className="block">
                Processing Fees
              </label>
              <input
                id="processingFees"
                name="processingFees"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter the Processing Fees "
              />
            </div>
            <div>
              <label htmlFor="maximumLoanAmount" className="block">
                maximumLoanAmount
              </label>
              <input
                id="maximumLoanAmount"
                name="maximumLoanAmount"
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter the MaximumLoanAmount "
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
      <Fininfo details={bankData} />
    </div>
  );
}

export default Finform;
