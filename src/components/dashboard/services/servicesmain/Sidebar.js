import React, { useState } from "react";
import { Card, List, ListItem, Typography } from "@material-ui/core";
import BlogsPageComponent from "../../blogs/Blogspage";
import ServicesPageComponent from "./ServicesPage";
import SupportPageComponent from "../../support/SupportPage";
import Home from "../../Advertisements/home";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    "&:hover": {
      backgroundColor: "#e0e0e0",
    },
  },
}));

const DefaultSidebar = () => {
  const [activePage, setActivePage] = useState("blogs");
  const classes = useStyles();

  const pages = [
    { name: "Blogs", component: <BlogsPageComponent /> },
    { name: "Services", component: <ServicesPageComponent /> },
    { name: "Support", component: <SupportPageComponent /> },
    { name: "Advertisement", component: <Home /> },
  ];

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  };

  const renderPage = () => {
    const currentPage = pages.find((page) => page.name === activePage);
    return currentPage ? currentPage.component : null;
  };

  return (
    <div className="lg:flex">
      <div className=" lg:w-1/4 py-4 px-5">
        <Card className="w-full lg:w-[302px] lg:h-[1000px] p-4 rounded-8 shadow-xl shadow-blue-gray-900/5 border-r-2 border-gray-200 border-b-2 border-gray-200">
          <div className="mb-2 p-4 font-bold text-large text-center border-b-2 border-gray-200">
            <Typography variant="h5" color="blue-gray">
              Sidebar
            </Typography>
          </div>
          <List className="w-full gap-4 px-6 text-center">
            {pages.map((page) => (
              <ListItem
                key={page.name}
                onClick={(event) => handlePageChange(page.name)}
                className={`text-xl text-center cursor-pointer px-4 py-2 ${
                  activePage === page.name ? "bg-gray-200" : ""
                } ${classes.listItem}`}
              >
                {page.name}
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
      <div className="lg:w-5/6 py-4 pr-6">{renderPage()}</div>
    </div>
  );
};

export default DefaultSidebar;
