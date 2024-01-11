import React from "react";
import Homeoffer from "./banners/Homebanners/OfferBanners/homeOffer";
import HomeAdver from "./banners/Homebanners/AdvertisementBanners/homeAdver";
import BlogsBannerHome from "./banners/Blogsbanners/Blogsbannerhome";

function Home() {
  const borderedComponentStyle = {
    // border: "1px solid #000",
    padding: "10px",
    marginBottom: "20px",
  };

  return (
    <div>
      <div className="text-bold">
        <h1 className="text-4xl px-3 mr-4 pb-5" style={{ userSelect: "none" }}>
          Home page
        </h1>
      </div>
      <div style={borderedComponentStyle}>
        <Homeoffer />
      </div>
      <div style={borderedComponentStyle}>
        <HomeAdver />
      </div>

      <div>
        <h1 className="text-4xl px-3 mr-4 pb-5" style={{ userSelect: "none" }}>
          Blogs Page
        </h1>
        <div style={borderedComponentStyle}>
          <BlogsBannerHome />
        </div>
      </div>
    </div>
  );
}

export default Home;
