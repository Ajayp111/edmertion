import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons"; // Import the bell icon from Font Awesome
import { useNavigate } from "react-router-dom";
import Users from "../userspage/Users";
const Navbar = () => {
  const navigate = useNavigate();
  const goToUsersPage = () => {
    navigate("/users");
  };
  return (
    <nav className="bg-white-800 text-black py-4 border-b border-gray-300">
      <div className="container mx-auto flex md:flex-row flex-col justify-between items-center">
        <div
          className="flex-shrink-0 mb-4 md:mb-0"
          onClick={goToUsersPage}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://img.freepik.com/premium-vector/letter-e-logo-design-with-polygonal-style-hexagonal-logo-with-gradient-blue_15602-643.jpg"
            alt="Logo"
            className="h-20 w-20 justify-center "
          />
        </div>
        <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
          <li>
            <a
              href="/users"
              className="hover:text-gray-800 hover:underline text-lg"
            >
              Users
            </a>
          </li>
          {/* { isAdmin && ( */}
          <li>
            <a
              href="admin/dashboard"
              className="hover:text-gray-800 hover:underline text-lg"
            >
              Dashboard
            </a>
          </li>
          {/* )} */}
          <li>
            <a
              href="/analytics"
              className="hover:text-gray-800 hover:underline text-lg"
            >
              Analytics
            </a>
          </li>
          <li>
            <a
              href="/approvals"
              className="hover:text-gray-800 hover:underline text-lg"
            >
              Approvals
            </a>
          </li>
          <li>
            <a
              href="/logout"
              className="hover:text-gray-800 hover:underline text-lg"
            >
              Logout
            </a>
          </li>
          <li>
            <a
              href="/notifications"
              className="hover:text-gray-800 hover:underline text-lg"
            >
              <FontAwesomeIcon icon={faBell} />
            </a>
          </li>
          <li className="">
            <a
              href="/profile"
              className="hover:text-gray-800 hover:underline text-lg"
            >
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
