import React from "react";
import { CalendarIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const ReviewComments = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mt-3 w-full sm:w-auto sm:max-w-md">
      <h2 className="text-xl font-semibold mb-4">Review Comments</h2>
      <div className="flex flex-col sm:flex-row">
        {/* Left Side: Name, Date, Time */}
        <div className="flex flex-col sm:w-1/3 pr-4">
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-500">Username</span>
            <p className="mt-1 text-sm text-gray-900">Dummy Name</p>
          </div>
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-500">Date</span>
            <p className="mt-1 text-sm text-gray-900">January 1, 2024</p>
          </div>
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-500">Time</span>
            <p className="mt-1 text-sm text-gray-900">12:00 PM</p>
          </div>
        </div>

        {/* Right Side: Comment and Buttons */}
        <div className="flex flex-col sm:w-2/3">
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-500">Comment</span>
            <p className="mt-1 text-sm text-gray-900 max-w-full sm:max-w-md break-words">
              comment is a comment and comment is also a comment so comment
              called as a comment so it is a comment . so i call it as a comment
            </p>
          </div>
          {/* Buttons */}
          <div className="flex justify-end">
            <button className="text-white bg-red-500 hover:bg-red-600 mr-2  rounded-full px-2 py-1 sm:mb-0">
              Remove Report
            </button>
            <button className="text-red-500 bg-white hover:bg-gray-100 sm:mb-0 rounded-full px-4 py-2 border border-red-500 ">
              Delete Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewComments;
