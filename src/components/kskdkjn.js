import { useState, useEffect } from "react";
import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import BlogsPage from "./Blogspage";
import ServicesPage from "./ServicesPage";
import SupportPage from "./SupportPage";

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
  <div className="absolute bg-white-A700 flex flex-col items-center justify-start left-[6%] px-4 md:px-5 py-[15px] rounded-lg top-[12%] w-auto">
    <div className={`lg:w-1/3 ${isMobile ? "w-full" : "w-1/3"} py-4 px-5`} />
    <Card className="flex flex-col gap-1 items-start justify-start w-auto">
      <div
        className="bg-white-A700 justify-center pl-2.5 sm:pr-5 pr-[35px] py-[9px] rounded-lg text-gray-900 text-sm w-[270px]"
        size="txtInterMedium14Gray900"
      >
        Home
      </Text>
      <Text
        className="bg-white-A700 justify-center pb-2 pl-2.5 sm:pr-5 pr-[35px] pt-[11px] rounded-lg text-gray-900 text-sm w-[270px]"
        size="txtInterMedium14Gray900"
      >
        Blogs
      </Text>
      <div className="bg-gray-200 flex flex-row gap-2 items-center justify-start p-2.5 rounded-lg w-[270px]">
        <Img className="h-3 w-px" src="images/img_line410.svg" alt="line410" />
        <Text
          className="text-gray-900 text-sm w-auto"
          size="txtInterMedium14Gray900"
        >
          Services
        </Text>
      </div>
      <a
        href="javascript:"
        className="bg-white-A700 justify-center pb-2 pl-2.5 sm:pr-5 pr-[35px] pt-[11px] rounded-lg text-gray-900 text-sm w-[270px]"
      >
        <Text size="txtInterMedium14Gray900">Support</Text>
      </a>
      <Text
        className="bg-white-A700 justify-center pl-2 sm:pr-5 pr-[35px] py-[9px] rounded-lg text-gray-900 text-sm w-[270px]"
        size="txtInterMedium14Gray900"
      >
        Advertisements
      </Text>
    </div>
  </div>;
}
