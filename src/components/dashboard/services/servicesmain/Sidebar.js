import { useState, useEffect } from "react";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import BlogsPage from "../../blogs/Blogspage";
import ServicesPage from "./ServicesPage";
import SupportPage from "../../support/SupportPage";

export function DefaultSidebar() {
  const [activePage, setActivePage] = useState("blogs");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case "blogs":
        return <BlogsPage />;
      case "services":
        return <ServicesPage />;
      case "support":
        return <SupportPage />;
      default:
        return null;
    }
  };

  return (
    <div className="lg:flex">
      <div className={`lg:w-1/3 ${isMobile ? "w-full" : "w-1/3"} py-4 px-5`}>
        <Card className="w-full lg:w-[302px] lg:h-[1000px] p-4 rounded-8 shadow-xl shadow-blue-gray-900/5 border-r-2 border-gray-200 border-b-2 border-gray-200">
          <div className="mb-2 p-4 font-bold text-large text-center border-b-2 border-gray-200">
            <Typography variant="h5" color="blue-gray">
              Sidebar
            </Typography>
          </div>
          <List className="w-full gap-4 px-6  text-center">
            <ListItem
              onClick={() => handlePageChange("blogs")}
              className={`text-xl text-center cursor-pointer px-4 py-2 ${
                activePage === "blogs" ? "bg-gray-200" : ""
              }`}
            >
              Blogs
            </ListItem>
            <ListItem
              onClick={() => handlePageChange("services")}
              className={`text-xl text-center cursor-pointer px-4 py-2 ${
                activePage === "services" ? "bg-gray-200" : ""
              }`}
            >
              Services
            </ListItem>
            <ListItem
              onClick={() => handlePageChange("support")}
              className={`text-xl text-center cursor-pointer px-4 py-2 ${
                activePage === "support" ? "bg-gray-200" : ""
              }`}
            >
              Support
            </ListItem>
          </List>
        </Card>
      </div>
      <div className={`lg:w-5/6 ${isMobile ? "w-full" : "w-5/6"} py-4 pr-6`}>
        {renderPage()}
      </div>
    </div>
  );
}
