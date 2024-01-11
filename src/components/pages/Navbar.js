import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons"; // Import the bell icon from Font Awesome
import { useLocation, Link } from "react-router-dom"; // Changed from useNavigate to useLocation and using Link from react-router-dom
import { useNavigate } from "react-router-dom";
import Users from "../userspage/Users";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  },
  activeLink: {
    fontWeight: "bold",
    color: "blue",
  },
}));

const Navbar = () => {
  const [activePage, setActivePage] = useState("/users");
  const classes = useStyles();
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? classes.activeLink : "";
  };

  const navigate = useNavigate();
  const goToUsersPage = () => {
    navigate("/users");
  };
  return (
    <nav
      className="bg-white-800 text-black py-4 border-b border-gray-300"
      style={{ userSelect: "none" }}
    >
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
            <Link
              to="/users"
              className={`hover:text-gray-800 hover:underline text-lg ${isActive(
                "/users"
              )}`}
            >
              Users
            </Link>
          </li>
          {/* { isAdmin && ( */}
          <li>
            <Link
              to="admin/dashboard"
              className={`hover:text-gray-800 hover:underline text-lg ${isActive(
                "/admin/dashboard"
              )}`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/analytics"
              className={`hover:text-gray-800 hover:underline text-lg ${isActive(
                "/analytics"
              )}`}
            >
              Analytics
            </Link>
          </li>
          <li>
            <Link
              to="/approvals"
              className={`hover:text-gray-800 hover:underline text-lg ${isActive(
                "/approvals"
              )}`}
            >
              Approvals
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className={`hover:text-gray-800 hover:underline text-lg ${isActive(
                "/logout"
              )}`}
            >
              Logout
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className={`hover:text-gray-800 hover:underline text-lg ${isActive(
                "/notification"
              )}`}
            >
              <FontAwesomeIcon icon={faBell} />
            </Link>
          </li>
          <li className="">
            <Link
              to="/profile"
              className={`hover:text-gray-800 hover:underline text-lg ${isActive(
                "/profile"
              )}`}
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
