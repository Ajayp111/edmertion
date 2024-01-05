import React from "react";
import Filter from "./Filter";
import Users from "./Users";
import SearchBar from "./Search";

function RecentUsers() {
  return (
    <div className="py-8">
      {/* SearchBar  */}
      <SearchBar />

      {/* Filter and Users components */}
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/4 my-4 mx-6 ">
          <Filter />
        </div>
        <div className="lg:w-3/4 my-20 mx-6">
          <Users />
        </div>
      </div>
    </div>
  );
}

export default RecentUsers;
