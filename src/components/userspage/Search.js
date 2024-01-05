import React from "react";

const SearchBar = () => {
  return (
    <div className="flex px-4 mx-5 pb-5">
      {/* Users List Section */}
      <div className="w-30 p-4">
        <h1 className="text-4xl font-bold">Users List</h1>
      </div>

      {/* Search Bar Section */}
      <div className="flex-grow p-4 flex items-center justify-center">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md py-2 px-4 w-64 focus:outline-none focus:ring focus:border-blue-500"
          />
          <button className="bg-black text-white font-semibold py-2 px-4 ml-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
