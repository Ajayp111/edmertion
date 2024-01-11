import React, { useState } from "react";
import {
  Card,
  List,
  ListItem,
  Typography,
  makeStyles,
} from "@material-ui/core";
import BlogsPageComponent from "../../blogs/Blogspage";
import ServicesPageComponent from "./ServicesPage";
import SupportPageComponent from "../../support/SupportPage";
import Home from "../../Advertisements/home";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column", // Change to column for mobile
    minHeight: "800px",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row", // Change to row for larger screens
    },
  },
  sidebar: {
    flex: "1",
    order: 1,
    position: "fixed",
    height: "100%",
    zIndex: 1000,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up("lg")]: {
      order: 0,
    },
  },
  mainContent: {
    flex: "1",
    order: 2,
    marginLeft: "0",
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginLeft: "302px",
      paddingLeft: theme.spacing(6),
    },
    [theme.breakpoints.up("lg")]: {
      order: 1,
    },
  },
}));

const DefaultSidebar = () => {
  const classes = useStyles();
  const [activePage, setActivePage] = useState("blogs");

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
    <div className={classes.container}>
      <div className={`${classes.sidebar} py-4 px-2 bg-gray-100`}>
        <Card className="w-full lg:w-[302px] lg:h-[px] p-4 rounded-8 shadow-xl shadow-blue-gray-900/5 border-r-2 border-gray-200 border-b-2 border-gray-200">
          <div className="text-bold mb-2 p-4 font-bold text-2xl text-center border-gray-200">
            <Typography
              variant="h5"
              color="blue-gray"
              style={{ userSelect: "none" }}
            >
              DashBoard
            </Typography>
          </div>
          <List className="w-full gap-4 px-2 text-center">
            {pages.map((page) => (
              <ListItem
                key={page.name}
                onClick={() => handlePageChange(page.name)}
                className={`text-xl text-center cursor-pointer px-2 py-2 ${
                  activePage === page.name ? "bg-gray-200" : ""
                }`}
              >
                {page.name}
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
      <div className={`${classes.mainContent} py-4 pr-2 ml-0`}>
        {renderPage()}
      </div>
    </div>
  );
};

export default DefaultSidebar;
