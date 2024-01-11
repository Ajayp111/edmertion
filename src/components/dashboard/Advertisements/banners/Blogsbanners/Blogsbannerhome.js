import React, { useState, useEffect } from "react";
import AllBanners from "./AllBanners";
import AddBanner from "./AddBanners";

function BlogsBannerHome() {
  const [banners, setBanners] = useState([]);

  const addBanner = (banner) => {
    setBanners([...banners, banner]);
  };

  useEffect(() => {
    console.log("Banners have changed:", banners);
  }, [banners]);

  return (
    <div style={{ userSelect: "none" }}>
      <h1 className=" px-3 font-2xl text-xl font-bold ">
        Advertisement Banners
      </h1>
      <AddBanner addBanner={addBanner} />
      <AllBanners banners={banners} />
    </div>
  );
}

export default BlogsBannerHome;
