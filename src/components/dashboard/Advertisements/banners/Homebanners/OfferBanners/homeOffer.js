import React, { useState, useEffect } from "react";
import AllBanners from "./AllBanners";
import AddBanner from "./AddBanner";

function Home() {
  const [banners, setBanners] = useState([]);

  const addBanner = (banner) => {
    setBanners([...banners, banner]);
  };

  useEffect(() => {
    // This useEffect will run when the component mounts or when 'banners' state changes
    console.log("Banners have changed:", banners);
  }, [banners]); // Dependency array ensures it runs when 'banners' changes

  return (
    <div style={{ userSelect: "none" }}>
      <h1 className=" px-3 font-2xl text-xl font-bold ">Offers Banners</h1>
      <AddBanner addBanner={addBanner} />
      <AllBanners banners={banners} />
    </div>
  );
}

export default Home;
