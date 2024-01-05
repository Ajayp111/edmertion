import React, { useState, useEffect } from "react";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const UsersComponent = () => {
  const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch("#")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Failed to fetch data");
  //     })
  //     .then((data) => {
  //       setUsers(data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setIsLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    const sampleUsers = [
      {
        id: 1,
        name: "Alice",
        profilePhoto:
          "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        stars: 4,
      },
      {
        id: 2,
        name: "Bob",
        profilePhoto:
          "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        stars: 3,
      },
      {
        id: 3,
        name: "Charlie",
        profilePhoto:
          "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        stars: 5,
      },
      {
        id: 1,
        name: "ramu",
        profilePhoto:
          "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        stars: 4,
      },
      {
        id: 2,
        name: "ajay",
        profilePhoto:
          "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        stars: 3,
      },
      {
        id: 3,
        name: "majunu",
        profilePhoto:
          "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        stars: 5,
      },
      {
        id: 1,
        name: "giri",
        profilePhoto:
          "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        stars: 4,
      },
      {
        id: 2,
        name: "vegi",
        profilePhoto:
          "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        stars: 3,
      },
    ];

    setUsers(sampleUsers);
  }, []);

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString();
  };

  const renderStars = (count) => {
    const starsArray = [];
    for (let i = 0; i < count; i++) {
      starsArray.push(
        <RiStarSFill key={i} style={{ color: "gold", marginRight: "3px" }} />
      );
    }
    return starsArray;
  };

  return (
    <div className="bg-white   p-4 shadow-md rounded-md">
      <h1 className=" text-4xl font-bold mb-4">Users :</h1>
      {/* {isLoading ? (
       <p>Loading...</p>
      ) :
      ( } */}
      <ul>
        <h1 className="my-2 mr-5 font-bold p-2 ">Recent Users :</h1>
        {users.map((user) => (
          <li
            key={user.id}
            className="border-b border-gray-200 py-2 flex justify-between items-center my-5"
            style={{
              borderTop: "1px solid #D1D5DB",
              borderBottom: "1px solid #D1D5DB",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Link
              to={`/users/${user.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="flex items-center">
                <div
                  className="rounded-full border-2 border-gray-300 overflow-hidden"
                  style={{ width: "48px", height: "48px" }}
                >
                  <img
                    src={user.profilePhoto}
                    alt={`${user.name}'s Profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <strong className="text-lg font-semibold">{user.name}</strong>
                  <div style={{ display: "flex" }}>
                    {renderStars(user.stars)}
                  </div>
                </div>
              </div>
            </Link>
            <div>
              <p className="text-sm text-gray-500 text-right py-2 px-6">
                {getCurrentDateTime()}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {/* )} */}
    </div>
  );
};

export default UsersComponent;
