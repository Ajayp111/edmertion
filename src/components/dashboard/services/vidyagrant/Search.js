import React, { useState } from "react";

function SearchComponent({ posts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="p-4 text-center mr-15">
      <input
        className="border border-red-300 px-5 py-3 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        type="text"
        placeholder="Search by post title..."
        value={searchQuery}
        onChange={handleChange}
      />
      <button
        className="ml-2 px-5 py-3 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
        onClick={handleSearch}
        style={{ background: "#ff6347" }}
      >
        Search
      </button>

      {searchResults.length > 0 && (
        <div className="mt-5">
          <h2 className="text-lg font-bold">Search Results:</h2>
          <ul className="mt-2 ">
            {searchResults.map((post) => (
              <li key={post.id} className="text-gray-700">
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchComponent;
